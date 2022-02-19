const { Diet } = require("../db");

const addDiets = async (req, res) => {
  try {
    const dietCreated = await Diet.bulkCreate(req.body);
    res.send(dietCreated);
  } catch {
    res.status(404).json({ message: "Diets could not be added" });
  }
};

module.exports = { addDiets };
