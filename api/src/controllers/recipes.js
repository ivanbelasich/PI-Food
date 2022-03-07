const { Op } = require("sequelize");
const axios = require("axios");
const { Recipe, Diet } = require("../db");
const {
  BASE_URL,
  BASE_URL_DETAILED,
  DETAIL_URL,
} = require("../resources/index");
const { API_KEY3} = process.env;
require("dotenv").config();

const getRecipesByName = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const dataApiName = await axios.get(
        `${BASE_URL}?apiKey=${API_KEY3}${BASE_URL_DETAILED}&query=${name}&number=100`
      );
      const dataDB = await Recipe.findAll({
        where: { title: { [Op.iLike]: `%${name}%` } },
        include: [Diet],
      });
      dataNameFilt = dataApiName.data.results
        .map((el) => {
          return {
            image: el.image,
            title: el.title,
            diets: el.diets,
            id: el.id,
          };
        })
        .concat(
          dataDB.map((el) => {
            return {
              image: el.image,
              title: el.title,
              diets: el.diets.map((el) => el.title),
              id: el.id,
            };
          })
        );
      return res.json(dataNameFilt);
    } else {
      const dataApi = await axios.get(
        `${BASE_URL}?apiKey=${API_KEY3}${BASE_URL_DETAILED}&number=100`
      );
      const dataDB = await Recipe.findAll({
        include: [Diet],
      });
      dateFilt = dataApi.data.results
        .map((el) => {
          return {
            image: el.image,
            title: el.title,
            diets: el.diets + "",
            id: el.id,
          };
        })
        .concat(
          dataDB.map((el) => {
            return {
              image: el.image,
              title: el.title,
              diets: el.diets.map((el) => el.title),
              id: el.id,
            };
          })
        );
      return res.json(dateFilt);
    }
  } catch {
    res.status(404).json({
      message: "The recipe doesn't exist",
    });
  }
};

const getRecipeDetail = async (req, res) => {
  const { id } = req.params;
  try {
    if (id.length > 10) {
      const detailDB = await Recipe.findByPk(id, { include: [Diet] });
      const detailDBMap = {
        image: detailDB.image,
        title: detailDB.title,
        dishTypes: detailDB.dishTypes,
        diets: detailDB.diets.map((el) => el.title),
        summary: detailDB.summary,
        score: detailDB.spoonacularScore,
        healthScore: detailDB.healthScore,
        instructions: detailDB.instructions,
      };
      return res.json(detailDBMap);
    } else {
      const detailData = await axios.get(
        `${DETAIL_URL}/${id}/information?apiKey=${API_KEY3}`
      );
      const detailApi = {
        image: detailData.data.image,
        title: detailData.data.title,
        dishTypes: detailData.data.dishTypes,
        diets: detailData.data.diets,
        summary:
          detailData.data.summary &&
          detailData.data.summary.replace(/<[^>]+>/g, ""),
        score: detailData.data.spoonacularScore,
        healthScore: detailData.data.healthScore,
        instructions:
          detailData.data.instructions &&
          detailData.data.instructions.replace(/<[^>]+>/g, ""),
      };
      return res.json(detailApi);
    }
  } catch {
    res.status(404).json({
      message: "The id doesn't exist",
    });
  }
};

module.exports = { getRecipesByName, getRecipeDetail };
