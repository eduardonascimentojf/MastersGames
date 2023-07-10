import { useMemo, useState } from "react";
import * as S from "./styles";
import { useGames } from "../../hooks/useGames";
import { CardGame } from "../CardGame";
import { InputSearch } from "../InputSearch";
import { Loading } from "../Loading";
import { FilterByGenre } from "../FilterByGenre";
import { useFilter } from "../../contexts/filter";
import ReactPaginate from "react-paginate";

import { BiFirstPage, BiLastPage } from "react-icons/bi";
export function SearchGames() {
	const [search, setSearch] = useState("");
	const [currentPage, setCurrentPage] = useState(0);
	const itensPage = 12;
	const { games, isLoading, messageError } = useGames();
	const [pages, setPages] = useState(1);

	const startIndex = currentPage * itensPage;
	const endIndex = startIndex + itensPage;

	const { filterGenre } = useFilter();
	const filteredList = useMemo(() => {
		const searchLower = search.toLowerCase();
		const result = [];
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

		setPages(Math.ceil(result.length / 12));
		return { result, genres };
	}, [search, games, filterGenre]);

	return (
		<S.Conteiner>
			{!isLoading ? (
				<>
					<div className="headerOfGrid">
						<FilterByGenre genres={filteredList.genres} />
						<InputSearch
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							placeholder="Busque por jogos"
							type="search"
							name="Busque por jogos"
						/>
					</div>
					<div className="numberOfGamesFound">
						{filteredList.result.length > 1 ? (
							<p>{filteredList.result.length} jogos encontrados!</p>
						) : (
							<p>{filteredList.result.length} jogo encontrado!</p>
						)}
					</div>
					<S.GridConteiner>
						{filteredList.result.length > 0 ? (
							<>
								{filteredList.result.slice(startIndex, endIndex).map((game) => (
									<CardGame {...game} key={game.id} />
								))}
							</>
						) : (
							<S.GridConteiner>
								{search.length > 0 ? (
									<h5 className="notFound">
										Nenhum jogo encontrado com o nome
										<span>{search}!</span>
									</h5>
								) : (
									<h5 className="notFound">{messageError}</h5>
								)}
							</S.GridConteiner>
						)}
					</S.GridConteiner>
				</>
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
