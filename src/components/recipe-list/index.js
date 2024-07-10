import React from 'react'
import {
    Card,
    CardContent
  } from "@/components/ui/card"
import Link from 'next/link';
  
function Recipelist({recipeList}) {
    // console.log(recipeList);
    
  return (
    <>
        <div className='p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full'>
            <h2 className='text-4xl font-bold text-gray-700 mb-12'>Recipes</h2>
            <Link href={'/'}><p className='mb-3 font-semibold'>Go Home</p></Link>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    recipeList && recipeList.length>0 ? 
                    recipeList.map(recipe => 
                    <Link href={`/recipe-list/${recipe.id}`}>
                    <Card>
                        <CardContent className="bg-slate-200 hover:bg-slate-300 p-3 rounded-md overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all">

                          <div className='w-full aspect-w-16 aspect-h-8 lg:80'>

                            <img src={recipe.image}className='w-full h-full object-cover object-top rounded'></img>
                            
                          </div> 

                          <div className='p-6'>
                            <h3 className='text-base text-gray-600 font-bold'>{recipe.name}</h3>
                            <div className='mt-4 flex items-center flex-wrap gap-2 '>
                                <p className='text-base text-gray-600'>
                                Rating : {recipe.rating}
                                </p>

                            </div>
                            <div className='mt-3'>
                            <p className='text-base text-gray-600 font-bold'>
                                {recipe.cuisine}
                            </p>
                          </div>
                          </div>

                          
                          
                        </CardContent>

                    </Card>                   
                    </Link>)
                    : null
                    
                }

            </div>

        </div>
    </>
  )
}

export default Recipelist