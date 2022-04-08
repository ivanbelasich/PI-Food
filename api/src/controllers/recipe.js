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
      diets
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
    res.status(404).json({ message: "Error, could't add the recipe" });
  }
};

const addRecipes = async (req, res) => {
  try {
    /* const { diets } = req.body; */
    const createRecipe = await Recipe.bulkCreate(req.body);
    /*  const dietas = await Diet.findAll({
      where: { title: { [Op.in]: diets } },
    });
    await createRecipe.addDiet(dietas); */
    res.status(201).json({
      message: "Added recipes successfully",
      data: createRecipe,
    });
  } catch {
    res.status(404).json({ message: "Error, could't add recipes" });
  }
};

module.exports = { addRecipe, addRecipes };
