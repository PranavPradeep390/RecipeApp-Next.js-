import React from 'react'
import {
    Card,
    CardContent
  } from "@/components/ui/card"

function RecipeDetails({recipeDetails}) {
    console.log("recipe details ",recipeDetails);
  return (
    <div className='px-3 md:px-12'>
         {
                    recipeDetails? 
                   (
                    <Card>
                        <CardContent className="rounded-md overflow-hidden bg-slate-200">

                          <div className='w-full p-7'>

                            <img src={recipeDetails.image}className='w-[500px] h-[300px] rounded object-cover'></img>
                            
                          </div> 

                          <div className=''>
                            <h3 className='text-2xl text-black font-bold'>{recipeDetails.name}</h3>
                            <div className='mt-4 flex items-center flex-wrap gap-2 '>
                                <p className='text-lg text-black '>
                                <span className='font-semibold'>Rating : </span>
                                {recipeDetails.rating}
                                </p>

                            </div>
                            <div className='mt-3'>
                            <p className='text-lg text-black '>
                            <span className='font-semibold'>Ingredients : </span>
                                {recipeDetails.ingredients}
                            </p>
                          </div>
                          <div className='mt-3'>
                            <p className='text-lg text-black '> <span className='font-semibold'>Instructions : </span>
                                {recipeDetails.instructions}
                            </p>
                          </div>
                          </div>

                          
                          
                        </CardContent>

                    </Card>     )              
                    :<div><p>no data</p></div>
                    
                }

    </div>
  )
}

export default RecipeDetails