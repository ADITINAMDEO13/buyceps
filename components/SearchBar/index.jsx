import React, { useEffect, useState } from "react";

export default function SearchBar(props) {
	const { setTitle, setYear, setId } = props;

	const [titleInfo, setTitleInfo] = useState("");
	const [yearInfo, setYearInfo] = useState("");
	const [idInfo, setIdInfo] = useState("");

	const handleClick = (event) => {
		event.preventDefault();
		setTitle(titleInfo);
		setYear(yearInfo);
		setId(idInfo);
	}
	

	return (
		<div className="relative shadow-lg my-10 p-5 rounded-md mx-5">
			<form
				onSubmit={(event) => {
					event.preventDefault();
				}}>
				<div className="field-group grid grid-cols-2 md:grid-cols-4 gap-4 ">
					<input
						type="search"
						name="s"
						className="py-2 text-sm col-span-2 md:col-auto text-gray-600 bg-gray-100 rounded-md px-2  focus:outline-none focus:ring focus:border-purple-600 focus:bg-white focus:text-gray-900"
						placeholder="Search Title"
						autoComplete="off"
						onChange={e => setTitleInfo(e.target.value)}
					/>
					<input
		 				type="search"
						name="y"
						className="py-2 text-sm text-gray-600 bg-gray-100 rounded-md px-2  focus:outline-none focus:ring focus:border-purple-600 focus:bg-white focus:text-gray-900"
						placeholder="Year"
						autoComplete="off"
						onChange={e => setYearInfo(e.target.value)}
					/>
					<input
						type="search"
						name="i"
						className="py-2 text-sm  text-gray-600 bg-gray-100 rounded-md px-2  focus:outline-none focus:ring focus:border-purple-600 focus:bg-white focus:text-gray-900"
						placeholder="ID"
						autoComplete="off"
						onChange={e => setIdInfo(e.target.value)}
					/>
					<button
						type="submit"
						className=" search-btn text-white font-bold p-1 rounded col-span-2 md:col-auto bg-yellow-400 focus:outline-none focus:shadow-outline"
						onClick={handleClick}>
						Search
					</button>
				</div>
			</form>
		</div>
	);
}
