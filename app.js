const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const fs = require("fs");
const serveIndex = require("serve-index");
const port = 3001;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(logger("dev"));

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

const recipes_router = require("./src/routes/recipes_router");

app.use(
  "/ftp",
  express.static("public"),
  serveIndex("public", { icons: true })
);
app.use("/api/v1/recipes", recipes_router);

app.listen(port, () => {
  console.log("Server run on localhost:" + port);
});
