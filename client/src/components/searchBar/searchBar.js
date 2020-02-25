import React, { useState } from "react"
import axios from "axios"

function SearchBar(props) {
    const [input, setInput]= useState();
    

    function handleClick() {

        axios(
            {
                method: "GET",
                url: 'https://www.googleapis.com/books/v1/volumes?q=' + input

            }
        ).then(res => {
            
            props.results(res.data.items)
        })


    }
    
    
    
    return (
        <div>
            <h2>Book Search</h2>
            <input  type="text" onChange={event => setInput(event.target.value)} placeholder="Search for a book" name="search" />
            <button type="submit" onClick= {handleClick}>Search</button>
        </div>
    )
}

export default SearchBar;