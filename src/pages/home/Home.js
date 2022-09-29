import React, { useEffect, useState } from 'react'
// import { useFetch } from '../../hooks/useFetch'
import './Home.css'
import { projectFirestore } from '../../firebase/config'

// components
import RecipeList from '../../components/RecipeList'

export default function Home() {
    // const url = 'http://localhost:8000/recipes'
    // const { data, isPending, error } = useFetch(url)
    
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
      setIsPending(true)
      const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot) => {
        if (snapshot.empty) {
          setError('snapshot is empty')
          setIsPending(false)
        }else{
          console.log(snapshot)
          let results = []
          snapshot.docs.map(doc => {
            results.push({id: doc.id, ...doc.data()})
          })
          setData(results)
          setIsPending(false)
        }
      }, (err) => {
        setError(err.message)
        setIsPending(false)
      })

      return () => unsub()

    },[])
    

  return (
    <div className='home'>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>loading...</p>}
        {data && <RecipeList recipes={data} />}
    </div>
  )
}
