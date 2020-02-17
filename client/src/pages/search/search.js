import React from "react"
import SearchBar from "../../components/searchBar/searchBar"
import Results from "../../components/results/results"

function search() {
    return(
    <div>
        <div><SearchBar /></div>
        <div><Results /></div>
    </div>
    )
}

export default search;