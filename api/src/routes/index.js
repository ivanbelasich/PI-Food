const { Router } = require("express");

// Controllers
const recipe = require("../controllers/recipe");
const recipes = require("../controllers/recipes");
const diet = require("../controllers/diet");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


// Crear en nuestra BD una receta
//router.get("/recipe", recipe);

// Obtener 9 recetas
/* router.get("/recipes", recipes.getRecipes); */
router.get("/recipes", recipes.getRecipesByName)
router.get("/recipes", recipes.getRecipeDetail)
// Obtener tipos de dietas
//router.get("/types", diet);

module.exports = router;
