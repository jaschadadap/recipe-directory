import './Searchbar.css'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Searchbar() {

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/search?q=${term}`)
    }

    const [term, setTerm] = useState('')

  return (
    <div className='searchbar'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search</label>
            <input 
                type="text" 
                id="search"
                onChange={e => setTerm(e.target.value)}
                value={term}
            />
        </form>
    </div>
  )
}
