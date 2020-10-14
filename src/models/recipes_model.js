const connection = require("../config/database_connection");

module.exports = {
  getAllRecipesData: () => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM recipes`, [], (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(new Error(error));
        }
      });
    });
  },
  postNewRecipeData: (recipeData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `INSERT INTO recipes SET ?`,
        [recipeData],
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
};
