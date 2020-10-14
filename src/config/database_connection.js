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

app.listen(port, () => {
  console.log("Server run on localhost:" + port);
});
