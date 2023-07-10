import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../services/firebaseConfig";
export function useAuth() {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		setTimeout(() => {
			setUser(auth.currentUser);
		}, 700);
	}, []);

	return { user, setUser };
}
