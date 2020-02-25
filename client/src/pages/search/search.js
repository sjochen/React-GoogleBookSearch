import React, { useState } from "react"
import SearchBar from "../../components/searchBar/searchBar"
import Results from "../../components/results/results"
import DataMap from "../../components/DataMap/DataMpa";
import Buttons from "../../components/SaveButtons/SaveButtons";


function Search() {
    const [resultData, setResultData] = useState();
    console.log(resultData);


    return (
        <div>
            <SearchBar results = {setResultData} />
            <Results  />
            <DataMap data = {resultData} name="Search Results" />
            <Buttons />
            
        </div>
    )
}

export default Search;