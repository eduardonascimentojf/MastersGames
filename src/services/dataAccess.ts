import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { IGameFavorite } from "../types/IGameFavorite";
import { db } from "./firebaseConfig";

export async function getAllFavoriteGames(userEmail: string) {
	const q = query(
		collection(db, "favorite"),
		where("userEmail", "==", userEmail)
	);

	return await getDocs(q);
}

export async function createFavoriteGame(data: IGameFavorite) {
	return await addDoc(collection(db, "favorite"), data);
}
