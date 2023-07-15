import { useEffect, useState } from "react";
import { IGameFavorite } from "../types/IGameFavorite";
import { auth, db } from "../services/firebaseConfig";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

export function useFavorite() {
	const [favorites, setFavorites] = useState<IGameFavorite[] | null>(null);
	const db_favorite_ref = collection(db, "favorite");
	useEffect(() => {
		getAllFavorites();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	async function getAllFavorites() {
		const docRef = await addDoc(collection(db, "users"), {
			first: "Alan",
			middle: "Mathison",
			last: "Turing",
			born: 1912,
		});
		console.log("Document written with ID: ", docRef);
		const querySnapshot = await getDocs(collection(db, "users"));
		querySnapshot.forEach((doc) => {
			console.log(`${doc.id} => ${doc.data()}`);
		});
		if (auth.currentUser) {
			const q = query(
				collection(db, "favorite"),
				where("userEmail", "==", auth.currentUser.email)
			);

			const querySnapshot = await getDocs(q);

			querySnapshot.forEach((doc) => {
				console.log(doc.id, " => ", doc.data());
			});
		}
	}
	async function addFavorite(data: IGameFavorite) {
		addDoc(db_favorite_ref, data);
	}

	return { favorites, setFavorites, addFavorite };
}
