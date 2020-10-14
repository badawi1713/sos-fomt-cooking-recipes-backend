const express = require("express");
const router = express.Router();
const recipes_controller = require("../controllers/recipes_controller");
const fileUpload = require("../middlewares/file_upload");
router.get("/", recipes_controller.getAllRecipes);
router.post(
  "/add",
  fileUpload.single("img_url"),
  recipes_controller.postNewRecipeData
);

module.exports = router;
