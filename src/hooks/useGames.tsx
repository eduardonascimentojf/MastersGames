import { useEffect, useState } from "react";
import { api } from "../data/api";
import { IGame } from "../types";
import { AxiosError } from "axios";
import { errorNotification } from "../utils/toastifyNotifications";
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
					const statusCode = err.response?.status;
					const statusCodeError = [500, 502, 503, 504, 507, 508, 509];
					if (err.code === "ECONNABORTED") {
						setIsLoading(false);
						setMessageError(
							"O servidor demorou para responder, tente mais tarde"
						);
						return errorNotification(
							"O servidor demorou para responder, tente mais tarde"
						);
					}
					if (statusCode && statusCodeError.includes(statusCode)) {
						setIsLoading(false);
						setMessageError(
							"O servidor fahou em responder, tente recarregar a página"
						);
						return errorNotification(
							"O servidor fahou em responder, tente recarregar a página"
						);
					} else {
						setIsLoading(false);
						setMessageError(
							"O servidor não conseguirá responder por agora, tente voltar novamente mais tarde"
						);
						return errorNotification(
							"O servidor não conseguirá responder por agora, tente voltar novamente mais tarde"
						);
					}
				});
		};
		if (messageError === "initialize") fetchData();
	}, [messageError]);

	return { games, setGames, isLoading, messageError };
}
