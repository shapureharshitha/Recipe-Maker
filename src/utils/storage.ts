import { Recipe, Ingredient } from '../types/Recipe';
import { defaultRecipes } from '../data/defaultRecipes';

const RECIPES_KEY = 'recipes';
const PANTRY_KEY = 'pantry';

export const saveRecipes = (recipes: Recipe[]): void => {
  localStorage.setItem(RECIPES_KEY, JSON.stringify(recipes));
};

export const getRecipes = (): Recipe[] => {
  const recipes = localStorage.getItem(RECIPES_KEY);
  if (!recipes) {
    saveRecipes(defaultRecipes);
    return defaultRecipes;
  }
  return JSON.parse(recipes);
};

export const savePantryItems = (items: Ingredient[]): void => {
  localStorage.setItem(PANTRY_KEY, JSON.stringify(items));
};

export const getPantryItems = (): Ingredient[] => {
  const items = localStorage.getItem(PANTRY_KEY);
  return items ? JSON.parse(items) : [];
};

export const addRecipe = (recipe: Recipe): void => {
  const recipes = getRecipes();
  saveRecipes([...recipes, recipe]);
};

export const updateRecipe = (recipe: Recipe): void => {
  const recipes = getRecipes();
  const index = recipes.findIndex(r => r.id === recipe.id);
  if (index !== -1) {
    recipes[index] = recipe;
    saveRecipes(recipes);
  }
};

export const deleteRecipe = (id: string): void => {
  const recipes = getRecipes();
  saveRecipes(recipes.filter(recipe => recipe.id !== id));
};

export const findRecipesByIngredients = (availableIngredients: Ingredient[]): Recipe[] => {
  const recipes = getRecipes();
  const availableNames = new Set(availableIngredients.map(i => i.name.toLowerCase()));
  
  return recipes.filter(recipe => {
    const requiredIngredients = recipe.ingredients.map(i => i.name.toLowerCase());
    const matchingIngredients = requiredIngredients.filter(name => availableNames.has(name));
    return matchingIngredients.length >= requiredIngredients.length * 0.7; // 70% match threshold
  });
};