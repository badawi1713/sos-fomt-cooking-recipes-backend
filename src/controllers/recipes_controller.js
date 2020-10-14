const moment = require("moment");
const fs = require("fs");
const path = require("path");
const Recipe = require("../models/recipes_model");
const helper = require("../helpers/responses_helper");

exports.getAllRecipes = (req, res, next) => {
  Recipe.getAllRecipesData()
    .then((result) => {
      if (result.length === 0) {
        helper.response(
          res,
          "Recipes data is still empty.",
          result,
          200,
          false
        );
      } else {
        helper.response(res, "Show all recipes data.", result, 200, false);
      }
    })
    .catch((error) => {
      if (res.statusCode === 500) {
        helper.response(res, "Internal server error.", error, 500, true);
      }
    });
};

exports.postNewRecipeData = (req, res, next) => {
  const created_date = moment(new Date(Date.now())).format(
    "DD-MM-YYYY, HH:mm:ss"
  );
  const recipe_name = req.body.recipe_name;
  const normal_price = req.body.normal_price;
  const high_price = req.body.high_price;
  const utensils = req.body.utensils;
  const ingredients = req.body.ingredients;
  const edible = req.body.edible;
  const stamina_effect = req.body.stamina_effect;
  const fatigue_effect = req.body.fatigue_effect;
  const obtain_method = req.body.obtain_method;
  const img_url = req.file.path;

  const recipeData = {
    recipe_name,
    normal_price,
    high_price,
    utensils,
    ingredients,
    edible,
    stamina_effect,
    fatigue_effect,
    obtain_method,
    img_url,
    created_date,
  };

  Recipe.postNewRecipeData(recipeData)
    .then((result) => {
      console.log("New recipe data has been posted successfully!");
      helper.response(
        res,
        "New recipe data has been uploaded.",
        recipeData,
        201,
        false
      );
    })
    .catch((error) => {
      console.log(error);
      if (res.statusCode === 500) {
        helper.response(res, "Internal server error.", error, 500, true);
      }
    });
};
