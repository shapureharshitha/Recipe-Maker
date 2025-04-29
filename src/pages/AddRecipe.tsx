import React from 'react';
import RecipeForm from '../components/RecipeForm';
import { Recipe } from '../types/Recipe';

interface AddRecipeProps {
  onAddRecipe: (recipe: Recipe) => void;
}

const AddRecipe: React.FC<AddRecipeProps> = ({ onAddRecipe }) => {
  return (
    <div className="p-6">
      <RecipeForm onSubmit={onAddRecipe} />
    </div>
  );
};

export default AddRecipe;