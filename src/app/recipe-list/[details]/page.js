import React from 'react'
import RecipeDetails from '@/components/recipe-details';
import Link from 'next/link';

async function Recipedetails({params}) {
  const value = params.details
  console.log("Current Param:",value);

  async function fetchOneOfRecipes(){
    try {
      const apiResponse = await fetch(`https://dummyjson.com/recipes/${value}`);
      const data = await apiResponse.json();
      return data;
    } catch (error) {
      throw new Error(error);
      
    }
  }
  
  const recipeDetails = await fetchOneOfRecipes();
  // console.log(recipeDetails);

  return (
    <>
    <h1 className='p-3 font-semibold'>Here is the Details...</h1>
    <Link href={'/'}><p className='px-3 mb-3 font-semibold'>Go Back</p></Link>
    <RecipeDetails recipeDetails={recipeDetails}/>
    </>
  )
}

export default Recipedetails
