const DETAIL_URL = "https://api.spoonacular.com/recipes";

const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";

const BASE_URL_DETAILED = "&addRecipeInformation=true";

const DATA = [
    {
        "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
        "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
        "diets": ["gluten free,dairy free,lacto ovo vegetarian,vegan"]
    },
    {
        "image": "https://spoonacular.com/recipeImages/715594-312x231.jpg",
        "title": "Homemade Garlic and Basil French Fries",
        "diets": ["dairy free,lacto ovo vegetarian,vegan"]

    },
    {
        "image": "https://spoonacular.com/recipeImages/715497-312x231.jpg",
        "title": "Berry Banana Breakfast Smoothie",
        "diets": ["lacto ovo vegetarian"]

    },
    {
        "image": "https://spoonacular.com/recipeImages/644387-312x231.jpg",
        "title": "Garlicky Kale",
        "diets": ["gluten free,dairy free,paleolithic,lacto ovo vegetarian,primal,vegan"]
       
    },
    {
        "image": "https://spoonacular.com/recipeImages/716268-312x231.jpg",
        "title": "African Chicken Peanut Stew",
        "diets": ["gluten free,dairy free"]
     
    },
    {
        "image": "https://spoonacular.com/recipeImages/716381-312x231.jpg",
        "title": "Nigerian Snail Stew",
        "diets": ["gluten free,dairy free,paleolithic,primal"]
      
    },
    {
        "image": "https://spoonacular.com/recipeImages/782601-312x231.jpg",
        "title": "Red Kidney Bean Jambalaya",
        "diets": ["gluten free,dairy free,lacto ovo vegetarian,vegan"]
        
    },
    {
        "image": "https://spoonacular.com/recipeImages/794349-312x231.jpg",
        "title": "Broccoli and Chickpea Rice Salad",
        "diets": ["gluten free,dairy free,lacto ovo vegetarian,vegan"]
      
    },
    {
        "image": "https://spoonacular.com/recipeImages/715446-312x231.jpg",
        "title": "Slow Cooker Beef Stew",
        "diets": ["gluten free,dairy free"]
     
    },
    {
        "image": "https://spoonacular.com/recipeImages/715415-312x231.jpg",
        "title": "Red Lentil Soup with Chicken and Turnips",
        "diets": ["gluten free,dairy free"]
     
    },
    {
        "image": "https://spoonacular.com/recipeImages/766453-312x231.jpg",
        "title": "Hummus and Za'atar",
        "diets": ["gluten free,dairy free,lacto ovo vegetarian,vegan"]
      
    },
    {
        "image": "https://spoonacular.com/recipeImages/716627-312x231.jpg",
        "title": "Easy Homemade Rice and Beans",
        "diets": ["gluten free,dairy free,lacto ovo vegetarian,vegan"]
       
    },
    {
        "image": "https://spoonacular.com/recipeImages/716408-312x231.jpg",
        "title": "Greek-Style Baked Fish: Fresh, Simple, and Delicious",
        "diets":[ "gluten free,pescatarian"]
     
    },
    {
        "image": "https://spoonacular.com/recipeImages/795751-312x231.jpg",
        "title": "Chicken Fajita Stuffed Bell Pepper",
        "diets": ["gluten free"]
     
    },
    {
        "image": "https://spoonacular.com/recipeImages/640941-312x231.jpg",
        "title": "Crunchy Brussels Sprouts Side Dish",
        "diets": ["gluten free,dairy free,paleolithic,lacto ovo vegetarian,primal"]
    
    },
    {
        "image": "https://spoonacular.com/recipeImages/798400-312x231.jpg",
        "title": "Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant",
        "diets": ["gluten free,dairy free,lacto ovo vegetarian,vegan"]
      
    },
    {
        "image": "https://spoonacular.com/recipeImages/756814-312x231.jpg",
        "title": "Powerhouse Almond Matcha Superfood Smoothie",
        "diets": ["gluten free,dairy free"]
     
    },
    {
        "image": "https://spoonacular.com/recipeImages/729366-312x231.jpg",
        "title": "Plantain Salad",
        "diets": ["gluten free,primal,pescatarian"]
      
    },
    {
        "image": "https://spoonacular.com/recipeImages/715769-312x231.jpg",
        "title": "Broccolini Quinoa Pilaf",
        "diets": ["gluten free,dairy free,lacto ovo vegetarian,vegan"]
   
    },
    {
        "image": "https://spoonacular.com/recipeImages/782600-312x231.jpg",
        "title": "Quinoa Salad with Vegetables and Cashews",
        "diets": ["gluten free,dairy free,lacto ovo vegetarian,vegan"]
       
    },
    {
        "image": "https://spoonacular.com/recipeImages/642605-312x231.jpg",
        "title": "Farro With Mushrooms and Asparagus",
        "diets": ["dairy free,lacto ovo vegetarian"]
    },
    {
        "image": "https://spoonacular.com/recipeImages/715540-312x231.jpg",
        "title": "Summer Berry Salad",
        "diets": ["gluten free,dairy free,paleolithic,lacto ovo vegetarian,primal,vegan"]
    },
    {
        "image": "https://spoonacular.com/recipeImages/633221-312x231.jpg",
        "title": "Baby Beet Salad",
        "diets": ["gluten free,dairy free,paleolithic,lacto ovo vegetarian,primal,vegan"]
    },
    {
        "image": "https://spoonacular.com/recipeImages/659135-312x231.jpg",
        "title": "Salmon with roasted vegetables",
        "diets": ["gluten free,dairy free,pescatarian"]
    },
    {
        "image": "https://spoonacular.com/recipeImages/647016-312x231.jpg",
        "title": "HomeMade Hashbrowns with Spinach and Carrots",
        "diets": ["gluten free,dairy free,lacto ovo vegetarian,vegan"]
    }
]

module.exports = { BASE_URL, BASE_URL_DETAILED, DETAIL_URL, DATA };
