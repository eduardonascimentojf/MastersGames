import { useEffect, useState } from "react";
import { api } from "../data/api";
import { IGame } from "../types";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
export function useGames() {
	const [games, setGames] = useState<IGame[] | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [messageError, setMessageError] = useState("initialize");
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			await api
				.get("/data/")
				.then((e) => {
					setIsLoading(false);
					setGames(e.data);
				})
				.catch((err: AxiosError) => {
					console.log(err);
					const statusCode = err.response?.status;
					const statusCodeError = [500, 502, 503, 504, 507, 508, 509];
					if (err.code === "ECONNABORTED") {
						setIsLoading(false);
						setMessageError(
							"O servidor demorou para responder, tente mais tarde"
						);
						return toast.error(
							"O servidor demorou para responder, tente mais tarde",
							{
								position: "top-right",
								autoClose: 3000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined,
								theme: "colored",
							}
						);
					}
					if (statusCode && statusCodeError.includes(statusCode)) {
						setIsLoading(false);
						setMessageError(
							"O servidor fahou em responder, tente recarregar a página"
						);
						return toast.error(
							"O servidor fahou em responder, tente recarregar a página",
							{
								position: "top-right",
								autoClose: 3000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined,
								theme: "colored",
							}
						);
					} else {
						setIsLoading(false);
						setMessageError(
							"	O servidor não conseguirá responder por agora, tente voltar novamente mais tarde"
						);
						return toast.error(
							"O servidor não conseguirá responder por agora, tente voltar novamente mais tarde",
							{
								position: "top-right",
								autoClose: 3000,
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
		};
		if (messageError === "initialize") fetchData();
	}, [messageError]);

	return { games, setGames, isLoading, messageError };
}
