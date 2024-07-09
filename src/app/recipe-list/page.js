import Recipelist from '@/components/recipe-list'
import React from 'react'

async function Recipes() {

  async function fetchListOfRecipes(){
    try {
      const apiResponse = await fetch('https://dummyjson.com/recipes');
      const data = await apiResponse.json();
      return data.recipes;
    } catch (error) {
      throw new Error(error);
      
    }
  }
  
  const recipeList = await fetchListOfRecipes();
  return (
    
    <Recipelist recipeList={recipeList}/>
  );
}

export default Recipes