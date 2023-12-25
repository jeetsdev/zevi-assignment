import { SearchIcon } from "../icons/Icons";
import "./SearchBar.css";
export const SearchBar = () => {
	return (
		<div className="search__bar">
			<input
				type="text"
				className="search__bar-input"
				placeholder="Search"
			/>
			<div className="search__bar-icon">
				<SearchIcon />
			</div>
		</div>
	);
};
