export interface Recipe {
  id: string;
  name: string;
  ingredients: Ingredient[];
  instructions: string;
  category: RecipeCategory;
  createdAt: number;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: RecipeDifficulty;
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
  category: IngredientCategory;
}

export enum RecipeCategory {
  MAIN_DISH = 'Main Dish',
  APPETIZER = 'Appetizer',
  DESSERT = 'Dessert',
  BREAKFAST = 'Breakfast',
  SOUP = 'Soup',
  SALAD = 'Salad',
  BEVERAGE = 'Beverage',
  SNACK = 'Snack',
  OTHER = 'Other'
}

export enum RecipeDifficulty {
  EASY = 'Easy',
  MEDIUM = 'Medium',
  HARD = 'Hard'
}

export enum IngredientCategory {
  PRODUCE = 'Produce',
  MEAT = 'Meat & Poultry',
  DAIRY = 'Dairy & Eggs',
  PANTRY = 'Pantry Staples',
  SPICES = 'Spices & Herbs',
  BAKING = 'Baking',
  FROZEN = 'Frozen Foods',
  OTHER = 'Other'
}