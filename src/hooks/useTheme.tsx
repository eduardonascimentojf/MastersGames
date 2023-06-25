import {
	useCallback,
	useState,
	useEffect,
	Dispatch,
	SetStateAction,
} from "react";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export function useTheme<T>(initialTheme: T): Response<T> {
	const [theme, setTheme] = useState(
		useCallback(() => {
			const storageValue = localStorage.getItem("theme");
			if (storageValue) return JSON.parse(storageValue);
			return initialTheme;
		}, [initialTheme])
	);

	useEffect(() => {
		localStorage.setItem("theme", JSON.stringify(theme));
	}, [theme]);

	return [theme, setTheme];
}
