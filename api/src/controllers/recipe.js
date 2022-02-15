const { Recipe } = require("../db");

const addRecipe = async (req, res) => {
  try {
    const {
      title,
      summary,
      spoonacularScore,
      healthScore,
      instructions,
      image,
    } = req.body;
    const project = await Recipe.findOne({ where: { title: title } });
    if (project) {
      res
        .status(201)
        .json({ message: "There's already a recipe with that name" });
    } else {
      const recipeCreated = await Recipe.create({
        title,
        summary,
        spoonacularScore,
        healthScore,
        instructions,
        image,
      });
      res.send(recipeCreated);
    }
  } catch {
    res.status(404).json({ message: "Error al agregar receta" });
  }
};

module.exports = { addRecipe };
