import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../services/firebaseConfig";
export function useAuth() {
	const [user, setUser] = useState<User | null>(auth.currentUser);

	useEffect(() => {
		setTimeout(() => {
			setUser(auth.currentUser);
		}, 1000);
	}, []);

	return { user, setUser };
}
