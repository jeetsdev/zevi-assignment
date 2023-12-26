import React from "react";
import "./Home.css";

import shirt from "../../assets/shirt.jpg";
import { Logo, SearchBar, TrendCard } from "../../components/components";

export const Home = () => {
	return (
		<div className="main__home">
			<div className="home__search">
				<Logo />
				<SearchBar />
			</div>
			<div className="home__result-sec">
				<h2>Latest Trends</h2>
				<div className="result__sec-trends">
					{data.map((e) => {
						return (
							<TrendCard
								title={e.title}
								image={e.image}
								key={e.title}
							/>
						);
					})}
				</div>
				<div className="result__sec-suggestion">
					<h3>Popular Suggestions</h3>
					{data2.map((e) => {
						return <p key={e}> {e}</p>;
					})}
				</div>
			</div>
		</div>
	);
};

const data = [
	{
		title: "Test 1",
		image: shirt,
	},
	{
		title: "Test 2",
		image: shirt,
	},
	{
		title: "Test 3",
		image: shirt,
	},
	{
		title: "Test 4",
		image: shirt,
	},
	{
		title: "Test 5",
		image: shirt,
	},
];

const data2 = [
	"Striped shirt dress",
	"Satin shirt",
	"Denim Jumpsuit",
	"Leather Dress",
	"Solid t-shirt",
];
