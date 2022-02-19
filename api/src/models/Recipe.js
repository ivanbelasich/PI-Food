const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("recipe", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    spoonacularScore: {
      type: DataTypes.DECIMAL,
    },
    dishTypes: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
    healthScore: {
      type: DataTypes.DECIMAL,
    },
    instructions: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.STRING,
    },
  });
};
