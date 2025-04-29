import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ViewRecipes from './pages/ViewRecipes';
import AddRecipe from './pages/AddRecipe';
import SearchRecipes from './pages/SearchRecipes';
import { Recipe } from './types/Recipe';
import { getRecipes, addRecipe, updateRecipe, deleteRecipe } from './utils/storage';

function App() {
  const [activeTab, setActiveTab] = useState('view');
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    // Load recipes from localStorage on initial render
    setRecipes(getRecipes());
  }, []);

  const handleAddRecipe = (recipe: Recipe) => {
    addRecipe(recipe);
    setRecipes(getRecipes());
    setActiveTab('view'); // Redirect to view recipes after adding
  };

  const handleUpdateRecipe = (recipe: Recipe) => {
    updateRecipe(recipe);
    setRecipes(getRecipes());
  };

  const handleDeleteRecipe = (id: string) => {
    deleteRecipe(id);
    setRecipes(getRecipes());
  };

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col">
      <Header title="Recipe Maker" />
      <NavBar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 container mx-auto">
        {activeTab === 'view' && (
          <ViewRecipes 
            recipes={recipes} 
            onUpdateRecipe={handleUpdateRecipe}
            onDeleteRecipe={handleDeleteRecipe}
          />
        )}
        
        {activeTab === 'add' && (
          <AddRecipe onAddRecipe={handleAddRecipe} />
        )}
        
        {activeTab === 'search' && (
          <SearchRecipes 
            recipes={recipes} 
            onUpdateRecipe={handleUpdateRecipe}
            onDeleteRecipe={handleDeleteRecipe}
          />
        )}
      </main>
      
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p className="text-sm">Recipe Maker App &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;