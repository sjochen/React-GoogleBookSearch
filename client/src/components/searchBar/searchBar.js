import React from "react"

function searchBar() {
    return(
        <div>
            <h2>Book Search</h2>
            <p>Book</p>
            <input type="text" placeholder="Search for a book" name="search" />
            <button type="submit">Search</button>
        </div>
    )
}

export default searchBar;