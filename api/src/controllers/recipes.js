/* const Recipes = require("../models/Recipe"); */
require("dotenv").config();
const axios = require("axios");
const { BASE_URL, BASE_URL_DETAILED } = require("../resources/index"); // No funca no se porqué.
const { API_KEY1 } = process.env;

const getRecipesByName = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const dataApiName = await axios.get(
        `${BASE_URL}?apiKey=${API_KEY1}${BASE_URL_DETAILED}&query=${name}`
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
        `${BASE_URL}?apiKey=${API_KEY1}${BASE_URL_DETAILED}`
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
    const dataApiName = await axios.get(
      `${BASE_URL}?apiKey=${API_KEY1}${BASE_URL_DETAILED}/${id}`
    );
    dataNameFilt = dataApiName.data.results.map((el) => {
      return {
        image: el.image,
        title: el.title,
        diets: el.diets,
        points: el.weightWatcherSmartPoints
      };
    });
    return res.json(dataNameFilt);
  } catch {
    res.status(404).json({
      message: "The id doesn't exist",
    });
  }
};

module.exports = { getRecipesByName, getRecipeDetail };
