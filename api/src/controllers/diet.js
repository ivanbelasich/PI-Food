const { Diet } = require("../db");

const addDiets = async (req, res) => {
  try {
    const findDiet = await Diet.findAll();
    if (findDiet.length === 0) {
      const dietCreated = await Diet.bulkCreate(req.body);
      res.send(dietCreated);
    }
    res.send({ message: "Las dietas ya fueron agregadas" });
  } catch {
    res.status(404).json({ message: "Diets could not be added" });
  }
};

const getDiets = async (req, res) => {
  try {
    const findDiet = await Diet.findAll();
    res.send(findDiet);
  } catch {
    res.status(404).json({ message: "Cant find diets" });
  }
};

module.exports = { addDiets, getDiets };
