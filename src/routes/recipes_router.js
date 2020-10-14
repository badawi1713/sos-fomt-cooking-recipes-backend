const express = require("express");
const router = express.Router();
const recipes_controller = require("../controllers/recipes_controller");

router.get("/", recipes_controller.getAllRecipes);

module.exports = router;
