import React, { useState } from 'react';
import RecipeList from '../components/RecipeList';
import RecipeDetail from '../components/RecipeDetail';
import RecipeForm from '../components/RecipeForm';
import PantryManager from '../components/PantryManager';
import { Recipe, Ingredient } from '../types/Recipe';
import { getPantryItems, savePantryItems, findRecipesByIngredients } from '../utils/storage';

interface ViewRecipesProps {
  recipes: Recipe[];
  onUpdateRecipe: (recipe: Recipe) => void;
  onDeleteRecipe: (id: string) => void;
}

const ViewRecipes: React.FC<ViewRecipesProps> = ({ 
  recipes, 
  onUpdateRecipe, 
  onDeleteRecipe 
}) => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
  const [pantryItems, setPantryItems] = useState<Ingredient[]>(getPantryItems());
  const [showingPossibleRecipes, setShowingPossibleRecipes] = useState(false);

  const handleEditRecipe = (recipe: Recipe) => {
    setEditingRecipe(recipe);
    setSelectedRecipe(null);
  };

  const handleUpdateRecipe = (updatedRecipe: Recipe) => {
    onUpdateRecipe(updatedRecipe);
    setEditingRecipe(null);
  };

  const handleSelectRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setEditingRecipe(null);
  };

  const handleBack = () => {
    setSelectedRecipe(null);
    setEditingRecipe(null);
    setShowingPossibleRecipes(false);
  };

  const handleUpdatePantry = (items: Ingredient[]) => {
    setPantryItems(items);
    savePantryItems(items);
  };

  const possibleRecipes = findRecipesByIngredients(pantryItems);

  if (editingRecipe) {
    return (
      <div className="p-6">
        <RecipeForm 
          initialRecipe={editingRecipe} 
          onSubmit={handleUpdateRecipe} 
          onCancel={handleBack}
        />
      </div>
    );
  }

  if (selectedRecipe) {
    return (
      <div className="p-6">
        <RecipeDetail 
          recipe={selectedRecipe} 
          onBack={handleBack}
        />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <PantryManager 
        pantryItems={pantryItems}
        onUpdatePantry={handleUpdatePantry}
      />
      
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">
          {showingPossibleRecipes ? 'Recipes You Can Make' : 'All Recipes'}
        </h2>
        <button
          onClick={() => setShowingPossibleRecipes(!showingPossibleRecipes)}
          className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors"
        >
          {showingPossibleRecipes ? 'Show All Recipes' : 'What Can I Make?'}
        </button>
      </div>

      <RecipeList 
        recipes={showingPossibleRecipes ? possibleRecipes : recipes} 
        onEdit={handleEditRecipe} 
        onDelete={onDeleteRecipe}
        onSelectRecipe={handleSelectRecipe}
      />
    </div>
  );
};

export default ViewRecipes;