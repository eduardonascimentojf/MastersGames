/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { createContext, ReactNode, useState } from "react";

type FilterContextData = {
	filterGenre: string;
	setFilterGenre: React.Dispatch<React.SetStateAction<string>>;
};

export const FilterContext = createContext({} as FilterContextData);

type FilterProviderType = {
	children: ReactNode;
};

export function FilterProvider(props: FilterProviderType) {
	const [filterGenre, setFilterGenre] = useState("all");

	return (
		<FilterContext.Provider
			value={{
				filterGenre,
				setFilterGenre,
			}}
		>
			{props.children}
		</FilterContext.Provider>
	);
}

export const useFilter = () => React.useContext(FilterContext);
