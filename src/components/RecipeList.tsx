import React from 'react';
import { Recipe } from '../types/Recipe';
import RecipeCard from './RecipeCard';
import { CookingPot } from 'lucide-react';

interface RecipeListProps {
  recipes: Recipe[];
  onEdit: (recipe: Recipe) => void;
  onDelete: (id: string) => void;
  onSelectRecipe: (recipe: Recipe) => void;
}

const RecipeList: React.FC<RecipeListProps> = ({ 
  recipes, 
  onEdit, 
  onDelete,
  onSelectRecipe
}) => {
  if (recipes.length === 0) {
    return (
      <div className="text-center py-10">
        <CookingPot className="w-16 h-16 mx-auto text-amber-300 mb-4" />
        <h3 className="text-xl font-medium text-gray-700 mb-2">No recipes found</h3>
        <p className="text-gray-500">Add your first recipe to get started!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onEdit={onEdit}
          onDelete={onDelete}
          onClick={onSelectRecipe}
        />
      ))}
    </div>
  );
};

export default RecipeList;