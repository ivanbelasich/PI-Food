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

module.exports = { addDiets };
