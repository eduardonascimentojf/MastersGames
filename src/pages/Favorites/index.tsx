import { useFavorite } from "../../hooks/useFavorite";
import { Conteiner } from "./styles";

export function Favorites() {
	const { favorites } = useFavorite();
	return (
		<Conteiner>
			<p>Favoritos</p>
			{favorites?.map((favorite) => (
				<p>{favorite.gameId}</p>
			))}
		</Conteiner>
	);
}
