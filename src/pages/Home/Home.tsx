import React from "react";
import "./Home.css";
import { Logo, SearchBar } from "../../components/components";

export const Home = () => {
	return (
		<div className="main__home">
			<div className="home__search">
				<Logo />
				<SearchBar />
			</div>
		</div>
	);
};
