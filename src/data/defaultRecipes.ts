import { Recipe, RecipeCategory, RecipeDifficulty, IngredientCategory } from '../types/Recipe';

export const defaultRecipes: Recipe[] = [
  {
    id: '1',
    name: 'Classic Spaghetti Carbonara',
    ingredients: [
      { name: 'spaghetti', amount: 1, unit: 'pound', category: IngredientCategory.PANTRY },
      { name: 'eggs', amount: 4, unit: 'large', category: IngredientCategory.DAIRY },
      { name: 'pecorino romano', amount: 1, unit: 'cup', category: IngredientCategory.DAIRY },
      { name: 'black pepper', amount: 2, unit: 'teaspoons', category: IngredientCategory.SPICES },
      { name: 'pancetta', amount: 8, unit: 'ounces', category: IngredientCategory.MEAT }
    ],
    instructions: '1. Cook pasta in salted water\n2. Fry pancetta until crispy\n3. Mix eggs and cheese\n4. Combine all ingredients',
    category: RecipeCategory.MAIN_DISH,
    createdAt: Date.now(),
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    difficulty: RecipeDifficulty.MEDIUM
  },
  {
    id: '2',
    name: 'Thai Green Curry',
    ingredients: [
      { name: 'coconut milk', amount: 2, unit: 'cans', category: IngredientCategory.PANTRY },
      { name: 'green curry paste', amount: 2, unit: 'tablespoons', category: IngredientCategory.PANTRY },
      { name: 'chicken breast', amount: 1, unit: 'pound', category: IngredientCategory.MEAT },
      { name: 'bamboo shoots', amount: 1, unit: 'can', category: IngredientCategory.PANTRY },
      { name: 'thai basil', amount: 1, unit: 'cup', category: IngredientCategory.PRODUCE },
      { name: 'fish sauce', amount: 2, unit: 'tablespoons', category: IngredientCategory.PANTRY }
    ],
    instructions: '1. Heat coconut milk in a pan\n2. Add curry paste and stir\n3. Add chicken and cook\n4. Add remaining ingredients\n5. Simmer until done',
    category: RecipeCategory.MAIN_DISH,
    createdAt: Date.now(),
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    difficulty: RecipeDifficulty.MEDIUM
  },
  {
    id: '3',
    name: 'Butter Chicken',
    ingredients: [
      { name: 'chicken thighs', amount: 2, unit: 'pounds', category: IngredientCategory.MEAT },
      { name: 'yogurt', amount: 1, unit: 'cup', category: IngredientCategory.DAIRY },
      { name: 'garam masala', amount: 2, unit: 'tablespoons', category: IngredientCategory.SPICES },
      { name: 'tomato puree', amount: 2, unit: 'cups', category: IngredientCategory.PANTRY },
      { name: 'heavy cream', amount: 1, unit: 'cup', category: IngredientCategory.DAIRY },
      { name: 'butter', amount: 4, unit: 'tablespoons', category: IngredientCategory.DAIRY }
    ],
    instructions: '1. Marinate chicken in yogurt and spices\n2. Grill or bake chicken\n3. Make sauce with tomato, cream, and butter\n4. Combine and simmer',
    category: RecipeCategory.MAIN_DISH,
    createdAt: Date.now(),
    prepTime: 30,
    cookTime: 40,
    servings: 6,
    difficulty: RecipeDifficulty.MEDIUM
  },
  {
    id: '4',
    name: 'Sushi Rolls',
    ingredients: [
      { name: 'sushi rice', amount: 2, unit: 'cups', category: IngredientCategory.PANTRY },
      { name: 'nori sheets', amount: 4, unit: 'sheets', category: IngredientCategory.PANTRY },
      { name: 'cucumber', amount: 1, unit: 'medium', category: IngredientCategory.PRODUCE },
      { name: 'avocado', amount: 1, unit: 'large', category: IngredientCategory.PRODUCE },
      { name: 'sushi-grade salmon', amount: 8, unit: 'ounces', category: IngredientCategory.MEAT },
      { name: 'rice vinegar', amount: 2, unit: 'tablespoons', category: IngredientCategory.PANTRY }
    ],
    instructions: '1. Cook and season rice\n2. Prepare fillings\n3. Roll sushi with bamboo mat\n4. Cut into pieces',
    category: RecipeCategory.MAIN_DISH,
    createdAt: Date.now(),
    prepTime: 45,
    cookTime: 20,
    servings: 4,
    difficulty: RecipeDifficulty.HARD
  },
  {
    id: '5',
    name: 'Paella',
    ingredients: [
      { name: 'bomba rice', amount: 2, unit: 'cups', category: IngredientCategory.PANTRY },
      { name: 'saffron', amount: 1, unit: 'pinch', category: IngredientCategory.SPICES },
      { name: 'shrimp', amount: 1, unit: 'pound', category: IngredientCategory.MEAT },
      { name: 'mussels', amount: 1, unit: 'pound', category: IngredientCategory.MEAT },
      { name: 'chorizo', amount: 8, unit: 'ounces', category: IngredientCategory.MEAT },
      { name: 'peas', amount: 1, unit: 'cup', category: IngredientCategory.FROZEN }
    ],
    instructions: '1. Toast rice with saffron\n2. Add broth gradually\n3. Add seafood and meats\n4. Cook until rice is done\n5. Create socarrat',
    category: RecipeCategory.MAIN_DISH,
    createdAt: Date.now(),
    prepTime: 30,
    cookTime: 45,
    servings: 6,
    difficulty: RecipeDifficulty.HARD
  }
];

export const commonIngredients = [
  // Basic Pantry
  { name: 'Salt', category: IngredientCategory.SPICES },
  { name: 'Black Pepper', category: IngredientCategory.SPICES },
  { name: 'Olive Oil', category: IngredientCategory.PANTRY },
  { name: 'Vegetable Oil', category: IngredientCategory.PANTRY },
  { name: 'Soy Sauce', category: IngredientCategory.PANTRY },
  { name: 'Rice Vinegar', category: IngredientCategory.PANTRY },
  { name: 'Honey', category: IngredientCategory.PANTRY },
  
  // Produce
  { name: 'Garlic', category: IngredientCategory.PRODUCE },
  { name: 'Onions', category: IngredientCategory.PRODUCE },
  { name: 'Ginger', category: IngredientCategory.PRODUCE },
  { name: 'Carrots', category: IngredientCategory.PRODUCE },
  { name: 'Potatoes', category: IngredientCategory.PRODUCE },
  { name: 'Tomatoes', category: IngredientCategory.PRODUCE },
  { name: 'Lemons', category: IngredientCategory.PRODUCE },
  
  // Dairy & Proteins
  { name: 'Eggs', category: IngredientCategory.DAIRY },
  { name: 'Milk', category: IngredientCategory.DAIRY },
  { name: 'Butter', category: IngredientCategory.DAIRY },
  { name: 'Heavy Cream', category: IngredientCategory.DAIRY },
  { name: 'Yogurt', category: IngredientCategory.DAIRY },
  
  // Meat & Fish
  { name: 'Chicken Breast', category: IngredientCategory.MEAT },
  { name: 'Ground Beef', category: IngredientCategory.MEAT },
  { name: 'Salmon', category: IngredientCategory.MEAT },
  { name: 'Shrimp', category: IngredientCategory.MEAT },
  
  // Spices & Herbs
  { name: 'Cumin', category: IngredientCategory.SPICES },
  { name: 'Paprika', category: IngredientCategory.SPICES },
  { name: 'Cinnamon', category: IngredientCategory.SPICES },
  { name: 'Oregano', category: IngredientCategory.SPICES },
  { name: 'Basil', category: IngredientCategory.SPICES },
  { name: 'Thyme', category: IngredientCategory.SPICES },
  
  // Grains & Baking
  { name: 'Flour', category: IngredientCategory.BAKING },
  { name: 'Sugar', category: IngredientCategory.BAKING },
  { name: 'Rice', category: IngredientCategory.PANTRY },
  { name: 'Pasta', category: IngredientCategory.PANTRY },
  { name: 'Breadcrumbs', category: IngredientCategory.PANTRY },
  
  // Asian Ingredients
  { name: 'Sesame Oil', category: IngredientCategory.PANTRY },
  { name: 'Fish Sauce', category: IngredientCategory.PANTRY },
  { name: 'Coconut Milk', category: IngredientCategory.PANTRY },
  { name: 'Curry Paste', category: IngredientCategory.PANTRY },
  
  // Mediterranean
  { name: 'Feta Cheese', category: IngredientCategory.DAIRY },
  { name: 'Kalamata Olives', category: IngredientCategory.PANTRY },
  { name: 'Tahini', category: IngredientCategory.PANTRY }
];