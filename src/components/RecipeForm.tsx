import React, { useState, useEffect } from 'react';
import { Recipe, RecipeCategory } from '../types/Recipe';

interface RecipeFormProps {
  initialRecipe?: Recipe;
  onSubmit: (recipe: Recipe) => void;
  onCancel?: () => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ initialRecipe, onSubmit, onCancel }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState<RecipeCategory>(RecipeCategory.MAIN_DISH);
  
  useEffect(() => {
    if (initialRecipe) {
      setName(initialRecipe.name);
      setIngredients(initialRecipe.ingredients.join('\n'));
      setInstructions(initialRecipe.instructions);
      setCategory(initialRecipe.category);
    }
  }, [initialRecipe]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const recipe: Recipe = {
      id: initialRecipe?.id || crypto.randomUUID(),
      name,
      ingredients: ingredients.split('\n').filter(item => item.trim() !== ''),
      instructions,
      category,
      createdAt: initialRecipe?.createdAt || Date.now()
    };
    
    onSubmit(recipe);
    
    if (!initialRecipe) {
      setName('');
      setIngredients('');
      setInstructions('');
      setCategory(RecipeCategory.MAIN_DISH);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        {initialRecipe ? 'Edit Recipe' : 'Add New Recipe'}
      </h2>
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Recipe Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          placeholder="Enter recipe name"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value as RecipeCategory)}
          required
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent"
        >
          {Object.values(RecipeCategory).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      
      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-1">
          Ingredients (one per line)
        </label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
          rows={5}
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          placeholder="Enter ingredients (one per line)"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-1">
          Instructions
        </label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
          rows={6}
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          placeholder="Enter cooking instructions"
        />
      </div>
      
      <div className="flex justify-end space-x-3">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors"
        >
          {initialRecipe ? 'Update Recipe' : 'Add Recipe'}
        </button>
      </div>
    </form>
  );
};

export default RecipeForm;