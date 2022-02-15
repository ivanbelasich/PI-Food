const { Diet } = require("../db");

const addDiet = async (req, res) => {
  try {
    const { id, title } = req.body;
    const recipeCreated = await Recipe.create({
      id,
      title,
    });
    res.send(recipeCreated);
  } catch {
    res.status(404).json({ message: "Error al agregar dieta" });
  }
};

module.exports = { addDiet };
