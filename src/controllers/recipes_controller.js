const Recipe = require("../models/recipes_model");
const helper = require("../helpers/responses_helper");

exports.getAllRecipes = (req, res, next) => {
  Recipe.getAllRecipesData()
    .then((result) => {
      helper.response(res, "Show all recipes data.", result, 200, false);
    })
    .catch((error) => {
      helper.response(res, "Internal server error.", error, 500, true);
      console.log(error);
    });
};
