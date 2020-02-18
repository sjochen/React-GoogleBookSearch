import React, { useState } from "react"
import axios from "axios"

function SearchBar() {
//State is set using hooks and constants are declared for the search
    const [input, setInput]= useState('');

function HandleClick() {
    
        axios(
            {
                method: "GET",
                url: 'https://www.googleapis.com/books/v1/volumes?q=' + input
                
            }
        ).then(res => {
            
            console.log(res.data)
        })

    
}
    return (
        <div>
            <h2>Book Search</h2>
            <input onChange={event => setInput(event.target.value)} type="text" placeholder="Search for a book" name="search" />
            <button type="submit" onClick={HandleClick}>Search</button>
        </div>
    )
}

export default SearchBar;