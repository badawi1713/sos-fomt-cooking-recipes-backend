const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const logger = require("morgan");

const port = 3001;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(logger("dev"));

const recipes_router = require("./src/routes/recipes_router");

app.use("/api/v1/recipes", recipes_router);

app.listen(port, () => {
  console.log("Server run on localhost:" + port);
});
