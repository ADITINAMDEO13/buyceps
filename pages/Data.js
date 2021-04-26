import React from 'react';
const Data = () => {
    const fetchData = async(pageNumber) => {
        const result = await fetch(
            `http://www.omdbapi.com/?apikey=592b0ff4&s=${serachTitle}&y=${searchYear}&i=${searchId}&page=${pageNumber}&per_page=9`
        );
        const data = await result.json();
        console.log("hehh", data.Search);
        
    }
    return (<div>
        </div>);
}
export default Data;