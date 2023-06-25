import { useMemo, useState } from "react";
import * as S from "./styles";
import { useGames } from "../../hooks/useGames";
import { CardGame } from "../CardGame";
import { Input } from "../Input";
import { Loading } from "../Loading/inde";
import { FilterByGenre } from "../FilterByGenre";
import { useFilter } from "../../contexts/filter";
import ReactPaginate from "react-paginate";

import { BiFirstPage, BiLastPage } from "react-icons/bi";
export function SearchGames() {
	const [search, setSearch] = useState("");
	const [currentPage, setCurrentPage] = useState(0);
	const itensPage = 12;
	const { games } = useGames();
	const [pages, setPages] = useState(1);

	const startIndex = currentPage * itensPage;
	const endIndex = startIndex + itensPage;

	const { filterGenre } = useFilter();
	const filteredList = useMemo(() => {
		const searchLower = search.toLowerCase();
		let result = [];
		const genres: string[] = [];

		if (games)
			for (let i = 0; i < games.length; i++) {
				if (
					games[i].title.toLowerCase().includes(searchLower.toLowerCase()) &&
					(games[i].genre == filterGenre || filterGenre == "all")
				) {
					result.push(games[i]);
					if (!genres.includes(games[i].genre)) {
						genres.push(games[i].genre);
					}
				}
			}
		result = result.splice(startIndex, endIndex);

		setPages(result.length);
		return { result, genres };
	}, [search, games, startIndex, endIndex, filterGenre]);

	return (
		<S.Conteiner>
			<div className="headerOfGrid">
				<FilterByGenre genres={filteredList.genres} />
				<Input
					value={search}
					onChangeSearch={setSearch}
					placeholder="Busque por jogos"
					type="search"
				/>
			</div>
			{games ? (
				<S.GridConteiner>
					{filteredList.result.length > 0 ? (
						<>
							{filteredList.result.map((game) => (
								<CardGame {...game} key={game.id} />
							))}
						</>
					) : (
						<h5 className="notFound">
							Nenhum jogo encontrado com o nome
							<span>{search}!</span>
						</h5>
					)}
				</S.GridConteiner>
			) : (
				<Loading />
			)}
			{pages > 1 && (
				<ReactPaginate
					containerClassName={"pagination"}
					activeClassName={"active"}
					pageClassName={"page-item"}
					onPageChange={(event) => setCurrentPage(event.selected)}
					breakLabel="..."
					pageCount={pages}
					previousLabel={<BiFirstPage />}
					nextLabel={<BiLastPage />}
				/>
			)}
		</S.Conteiner>
	);
}
