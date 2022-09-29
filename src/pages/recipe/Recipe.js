import React, { useEffect, useState } from 'react'
import './Recipe.css'
// import { useFetch } from '../../hooks/useFetch'
import { useLocation, useParams } from 'react-router-dom'
import { projectFirestore } from '../../firebase/config'


export default function Recipe() {

    const { id } = useParams()
    // const url = 'http://localhost:8000/recipes/' + id
    // const { data: recipe, isPending, error } = useFetch(url)
    const [recipe, setRecipe] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setIsPending(true)
        projectFirestore.collection('recipes').doc(id).get().then((doc)=>{
            if (doc.exists) {
                setIsPending(false)
                setRecipe(doc.data())
            } else {
                setIsPending(false)
                setError('could not find recipe')
            }
        })
    }, [id])


  return (
    <div className='recipe'>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>loading...</p>}
        {recipe && (
            <>
                <h2 className='recipe-title'>{recipe.title}</h2>   
                <p>Takes {recipe.cookingTime} to cook.</p>
                <ul>
                    {recipe.ingredients.map(ingredient =>(
                        <li key={ingredient}>{ingredient}</li>
                    ))}
                </ul>
                <p className='method'>{recipe.method}</p>
            </>
        )}
    </div>
  )
}
