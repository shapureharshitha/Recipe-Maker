import React from 'react';
import { Recipe } from '../types/Recipe';
import { ArrowLeft, Clock, UtensilsCrossed } from 'lucide-react';

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe, onBack }) => {
  return (
    <div className="bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      <div className="bg-amber-100 p-4 rounded-t-lg">
        <button 
          onClick={onBack}
          className="flex items-center text-amber-800 hover:text-amber-600 transition-colors mb-2"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span>Back to recipes</span>
        </button>
        
        <div className="flex justify-between items-start">
          <h1 className="text-2xl font-bold text-gray-800">{recipe.name}</h1>
          <span className="inline-block px-3 py-1 rounded-full bg-amber-200 text-amber-800 font-medium text-sm">
            {recipe.category}
          </span>
        </div>
        
        <div className="flex items-center mt-2 text-sm text-amber-700">
          <UtensilsCrossed className="w-4 h-4 mr-1" />
          <span>Added on {new Date(recipe.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
            <span className="w-8 h-8 bg-amber-100 text-amber-800 rounded-full inline-flex items-center justify-center mr-2">1</span>
            Ingredients
          </h2>
          <ul className="list-disc list-inside pl-2 space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">{ingredient}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
            <span className="w-8 h-8 bg-amber-100 text-amber-800 rounded-full inline-flex items-center justify-center mr-2">2</span>
            Instructions
          </h2>
          <div className="pl-2 text-gray-700 whitespace-pre-line">
            {recipe.instructions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;