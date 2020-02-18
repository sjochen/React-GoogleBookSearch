import React, { useEffect } from "react"
import axios from "axios"

function SearchBar() {

    useEffect(() => {
        axios(
            {
                method: "GET",
                url: 'https://www.googleapis.com/books/v1/volumes?q=flowers'
                
            }
        ).then(res => console.log(res.data))

    })
    return (
        <div>
            <h2>Book Search</h2>
            <input type="text" placeholder="Search for a book" name="search" />
            <button type="submit">Search</button>
        </div>
    )
}

export default SearchBar;