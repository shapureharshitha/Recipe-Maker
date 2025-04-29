import React from 'react';
import { Recipe } from '../types/Recipe';
import { Pencil, Trash2, UtensilsCrossed } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
  onEdit: (recipe: Recipe) => void;
  onDelete: (id: string) => void;
  onClick: (recipe: Recipe) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onEdit, onDelete, onClick }) => {
  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit(recipe);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to delete this recipe?')) {
      onDelete(recipe.id);
    }
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 cursor-pointer"
      onClick={() => onClick(recipe)}
    >
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg text-gray-800 mb-1">{recipe.name}</h3>
          <span className="inline-block px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-800">
            {recipe.category}
          </span>
        </div>
        
        <div className="mt-2 text-sm text-gray-600">
          <p className="font-medium mb-1">Ingredients:</p>
          <ul className="list-disc list-inside">
            {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
              <li key={index} className="truncate">
                {ingredient.name} ({ingredient.amount} {ingredient.unit})
              </li>
            ))}
            {recipe.ingredients.length > 3 && (
              <li className="text-amber-600">+ {recipe.ingredients.length - 3} more</li>
            )}
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-100 px-4 py-3 bg-gray-50 flex justify-between items-center">
        <div className="flex items-center text-sm text-gray-500">
          <UtensilsCrossed className="w-4 h-4 mr-1" />
          <span>{new Date(recipe.createdAt).toLocaleDateString()}</span>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={handleEdit}
            className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
            aria-label="Edit recipe"
          >
            <Pencil className="w-4 h-4" />
          </button>
          <button 
            onClick={handleDelete}
            className="p-1 text-red-600 hover:text-red-800 transition-colors"
            aria-label="Delete recipe"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;