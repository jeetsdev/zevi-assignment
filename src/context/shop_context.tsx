import { Dispatch, ReactNode, createContext } from "react";
import { useContext, useEffect, useReducer } from "react";
import { faker } from "@faker-js/faker";

import {
	ACTION_TYPE,
	IShopDispatchType,
	IShopContextType,
	shopReducer,
} from "../helpers/helpers";

type IProps = {
	children: React.ReactNode;
};
const shopData: IShopContextType = {
	trends: [],
	suggestions: [],
};

type UpdatedShopContextType = IShopContextType & {
	shopReducer?: Dispatch<() => void>;
};

export const ShopContext = createContext<UpdatedShopContextType>(shopData);

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }: IProps) => {
	const [state, dispatch] = useReducer(shopReducer, shopData);

	useEffect(() => {
		try {
			(async () => {
				const randomName = faker.image.urlLoremFlickr({
					category: "pullover",
				});
				console.log(randomName);
			})();
		} catch (error) {
			console.error(error);
		}
	}, []);
	return (
		<ShopContext.Provider
			value={{
				suggestions: state.suggestions,
				trends: state.trends,
				shopReducer: dispatch,
			}}
		>
			{children}
		</ShopContext.Provider>
	);
};
