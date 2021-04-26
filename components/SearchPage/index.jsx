import React,{useState, useEffect} from "react";
import dynamic from "next/dynamic";
import Data from '../../public/sampleData.json'
import { data } from "autoprefixer";
const SearchBar = dynamic(() => import("../SearchBar"));

export default function SearchPage(props) {
	const [title, setTitle] = useState("kick");
	const [year, setYear] = useState(2015);
	const [id, setId] = useState("t2372222");
	const [mydata, setMydata] = useState([]);
	const fetchInfo = async() => {
        const result = await fetch(
            `http://www.omdbapi.com/?apikey=592b0ff4&s=${title}&y=${year}&i=${id}`
        );
        const data = await result.json();
		setMydata(data.Search)
		console.log(data.Search)
        
    }
	console.log(Data.Search)
	useEffect(() => {
		fetchInfo();
	},[year,title,id])
	return (
		<>
			<p className="text-center my-10 text-3xl font-medium">Explore movies</p>
			<div className="boxed">
				<SearchBar />
				{mydata.map((items) => {
					return (
						<h1>{ items.Title }</h1>
					)
				})}

			</div>
		</>
	);
} 
