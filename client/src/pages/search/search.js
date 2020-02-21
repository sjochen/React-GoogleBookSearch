import React, { useState } from "react"
import SearchBar from "../../components/searchBar/searchBar"
import Results from "../../components/results/results"


function Search() {
    const [resultData, setResultData] = useState();
    console.log(resultData);


    return (
        <div>
            <SearchBar results = {setResultData} />
            <Results data = {resultData} name="Search Results" />
        </div>
    )
}

export default Search;