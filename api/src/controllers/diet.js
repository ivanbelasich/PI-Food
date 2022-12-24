const { Diet } = require("../db");

const addDiets = async (req, res) => {
  try {
    const findDiet = await Diet.findAll();
    const dietCreated = await Diet.bulkCreate([req.body]);
    if (findDiet.length < 1) res.send(dietCreated) 
    else res.send({message: "The diets already exist"})
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
