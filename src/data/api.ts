import axios from "axios";

export const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		"dev-email-address": import.meta.env.VITE_HEADER_EMAIL,
	},
});
