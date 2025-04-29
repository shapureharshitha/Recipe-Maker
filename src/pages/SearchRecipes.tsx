import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
import RecipeDetail from '../components/RecipeDetail';
import RecipeForm from '../components/RecipeForm';
import { Recipe, RecipeCategory } from '../types/Recipe';

interface SearchRecipesProps {
  recipes: Recipe[];
  onUpdateRecipe: (recipe: Recipe) => void;
  onDeleteRecipe: (id: string) => void;
}

const SearchRecipes: React.FC<SearchRecipesProps> = ({ 
  recipes, 
  onUpdateRecipe, 
  onDeleteRecipe 
}) => {
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);

  const handleSearch = (query: string, category: string) => {
    if (!query && !category) {
      setFilteredRecipes(recipes);
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    
    const filtered = recipes.filter((recipe) => {
      const matchesCategory = !category || recipe.category === category;
      const matchesQuery = !query || 
        recipe.name.toLowerCase().includes(lowercaseQuery) || 
        recipe.ingredients.some(i => i.toLowerCase().includes(lowercaseQuery));
      
      return matchesCategory && matchesQuery;
    });
    
    setFilteredRecipes(filtered);
  };

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
  };

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
    <div className="p-6">
      <SearchBar 
        onSearch={handleSearch} 
        categories={Object.values(RecipeCategory)}
      />
      <RecipeList 
        recipes={filteredRecipes} 
        onEdit={handleEditRecipe} 
        onDelete={onDeleteRecipe}
        onSelectRecipe={handleSelectRecipe}
      />
    </div>
  );
};

export default SearchRecipes;