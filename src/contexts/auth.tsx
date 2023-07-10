/* eslint-disable react-refresh/only-export-components */
import React, { useEffect } from "react";
import { createContext, ReactNode, useState } from "react";
import { redirect } from "react-router-dom";
import { sendSignInLinkToEmail, User } from "firebase/auth";
import { actionCodeSettings, auth } from "../services/firebaseConfig";
import { errorNotification } from "../toastifyNotifications";

type AuthContextData = {
	user: User | null;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
	signOut: () => void;
	signIn: (user: User) => void;
};

export const AuthContext = createContext({} as AuthContextData);

type AuthProviderType = {
	children: ReactNode;
};

export function AuthProvider(props: AuthProviderType) {
	const [user, setUser] = useState<User | null>(null);
	function signOut() {
		setUser(null);
		localStorage.removeItem("@User:token");
		redirect("/");
	}
	function signIn(user: User) {
		setUser(user);
		localStorage.setItem("@User:token", JSON.stringify(user));
		redirect("/");
	}
	useEffect(() => {
		const fetchData = async () => {
			const token = localStorage.getItem("@User:token");
			if (token) {
				const user: User = JSON.parse(token);
				if (user.email) {
					sendSignInLinkToEmail(auth, user.email, actionCodeSettings)
						.then(() => {
							signIn(JSON.parse(token));
						})
						.catch((error) => {
							const errorMessage = error.message;
							errorNotification(errorMessage);
							signOut();
						});
				}
			}
		};
		fetchData();
	}, []);
	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
				signIn,
				signOut,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => React.useContext(AuthContext);
