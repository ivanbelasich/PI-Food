/* const Recipes = require("../models/Recipe"); */
require("dotenv").config();
const axios = require("axios");
const {
  BASE_URL,
  BASE_URL_DETAILED,
  DETAIL_URL,
} = require("../resources/index"); // No funca no se porqué.
const { API_KEY } = process.env;

const getRecipesByName = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const dataApiName = await axios.get(
        `${BASE_URL}?apiKey=${API_KEY}${BASE_URL_DETAILED}&query=${name}`
      );
      dataNameFilt = dataApiName.data.results.map((el) => {
        return {
          image: el.image,
          title: el.title,
          diets: el.diets,
        };
      });
      return res.json(dataNameFilt);
    } else {
      const dataApi = await axios.get(
        `${BASE_URL}?apiKey=${API_KEY}${BASE_URL_DETAILED}`
      );
      dateFilt = dataApi.data.results.map((el) => {
        return {
          image: el.image,
          title: el.title,
          diets: el.diets,
        };
      });
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
    const detailData = await axios.get(
      /* https://api.spoonacular.com/recipes/715497/information?apiKey=f6cd65f28e6545a7a4186b72366f1f97 */
      `${DETAIL_URL}/${id}/information?apiKey=${API_KEY}`
    );
    const obj = {
      image: detailData.data.image,
      title: detailData.data.title,
      dishTypes: detailData.data.dishTypes,
      diets: detailData.data.diets,
      summary: detailData.data.summary,
      score: detailData.data.spoonacularScore,
      healthScore: detailData.data.healthScore,
      instructions: detailData.data.instructions,
    };
    return res.json(obj);
  } catch {
    res.status(404).json({
      message: "The id doesn't exist",
    });
  }
};

module.exports = { getRecipesByName, getRecipeDetail };
