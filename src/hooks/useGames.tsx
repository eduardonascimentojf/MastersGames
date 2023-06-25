import { useEffect, useState } from "react";
import { api } from "../data/api";
import { IGame } from "../types";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
export function useGames() {
	const [games, setGames] = useState<IGame[] | null>(null);
	useEffect(() => {
		api
			.get("/data/")
			.then((e) => {
				setTimeout(() => {
					setGames(e.data);
				}, 1000);
			})
			.catch((err: AxiosError) => {
				const statusCode = err.response?.status;
				const statusCodeError = [500, 502, 503, 504, 507, 508, 509];

				if (statusCode && statusCodeError.includes(statusCode)) {
					console.log(
						"O servidor fahou em responder, tente recarregar a página"
					);
					return toast.error(
						"O servidor fahou em responder, tente recarregar a página",
						{
							position: "top-right",
							autoClose: false,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "colored",
						}
					);
				} else {
					console.log(
						"O servidor não conseguirá responder por agora, tente voltar novamente mais tarde"
					);
					return toast.error(
						"O servidor não conseguirá responder por agora, tente voltar novamente mais tarde",
						{
							position: "top-right",
							autoClose: false,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "colored",
						}
					);
				}
			});
	}, []);

	return { games, setGames };
}
