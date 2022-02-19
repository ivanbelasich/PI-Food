const { Recipe, Diet } = require("../db");
const { Op } = require("sequelize");

const addRecipe = async (req, res) => {
  try {
    const {
      title,
      summary,
      spoonacularScore,
      dishTypes,
      healthScore,
      instructions,
      image,
      diets,
    } = req.body;
    const [recipe, created] = await Recipe.findOrCreate({
      where: { title },
      defaults: {
        summary,
        spoonacularScore,
        dishTypes,
        healthScore,
        instructions,
        image,
      },
    });
    const dietas = await Diet.findAll({
      where: { title: { [Op.in]: diets } },
    });
    await recipe.addDiet(dietas);
    res.json(created ? { recipe } : { message: "The recipe already exists" });
  } catch {
    res.status(404).json({ message: "No funca" });
  }
};

module.exports = { addRecipe };
