const { Router } = require("express");
/* var router = express.Router() */
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
router.post("/recipe", recipe.addRecipe);
/* router.post("/recipe", recipe.addRecipes) */

// Obtener 9 recetas
router.get("/recipes", recipes.getRecipesByName);
router.get("/recipes/:id", recipes.getRecipeDetail);

// Obtener tipos de dietas
router.get("/types", diet.getDiets);
router.post("/types", diet.addDiets);

module.exports = router;
