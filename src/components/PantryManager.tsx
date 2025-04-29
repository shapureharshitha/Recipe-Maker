import React, { useState } from 'react';
import { Ingredient, IngredientCategory } from '../types/Recipe';
import { commonIngredients } from '../data/defaultRecipes';
import { Plus, Minus, RefreshCw } from 'lucide-react';

interface PantryManagerProps {
  pantryItems: Ingredient[];
  onUpdatePantry: (items: Ingredient[]) => void;
}

const PantryManager: React.FC<PantryManagerProps> = ({ pantryItems, onUpdatePantry }) => {
  const [selectedCategory, setSelectedCategory] = useState<IngredientCategory | 'all'>('all');

  const addIngredient = (ingredient: Ingredient) => {
    if (!pantryItems.some(item => item.name === ingredient.name)) {
      onUpdatePantry([...pantryItems, { ...ingredient, amount: 1, unit: 'unit' }]);
    }
  };

  const removeIngredient = (ingredientName: string) => {
    onUpdatePantry(pantryItems.filter(item => item.name !== ingredientName));
  };

  const filteredIngredients = selectedCategory === 'all'
    ? commonIngredients
    : commonIngredients.filter(ing => ing.category === selectedCategory);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">My Pantry</h2>
        <button
          onClick={() => onUpdatePantry([])}
          className="text-gray-600 hover:text-gray-800 flex items-center"
        >
          <RefreshCw className="w-4 h-4 mr-1" />
          Reset
        </button>
      </div>

      <div className="mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value as IngredientCategory | 'all')}
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500"
        >
          <option value="all">All Categories</option>
          {Object.values(IngredientCategory).map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-lg p-4">
          <h3 className="font-medium mb-3">Available Ingredients</h3>
          <div className="space-y-2">
            {filteredIngredients.map(ingredient => (
              <div key={ingredient.name} className="flex justify-between items-center">
                <span>{ingredient.name}</span>
                <button
                  onClick={() => addIngredient(ingredient)}
                  className="p-1 text-green-600 hover:text-green-800"
                  disabled={pantryItems.some(item => item.name === ingredient.name)}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="font-medium mb-3">My Ingredients</h3>
          <div className="space-y-2">
            {pantryItems.map(item => (
              <div key={item.name} className="flex justify-between items-center">
                <span>{item.name}</span>
                <button
                  onClick={() => removeIngredient(item.name)}
                  className="p-1 text-red-600 hover:text-red-800"
                >
                  <Minus className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PantryManager;