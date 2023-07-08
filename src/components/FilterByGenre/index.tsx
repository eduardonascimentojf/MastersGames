import { useState } from "react";
import * as S from "./styles";
import { BsArrowDownShort, BsArrowUpShort, BsCheck, BsX } from "react-icons/bs";
import { useFilter } from "../../contexts/filter";

interface Props {
	genres: string[];
}
export function FilterByGenre(props: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const { filterGenre, setFilterGenre } = useFilter();

	function handleOpen() {
		setIsOpen((prev) => !prev);
	}

	function handleUpdateFilterGenre(genre: string) {
		setFilterGenre(genre);
		setIsOpen(false);
	}

	return (
		<S.FilterContainer>
			<button onClick={handleOpen} aria-label="Filtro">
				{filterGenre === "all" ? (
					<p>Selecionar gênero</p>
				) : (
					<p>{filterGenre}</p>
				)}
				<div>
					{isOpen ? <BsArrowUpShort /> : <BsArrowDownShort />}
					{filterGenre !== "all" && (
						<BsX
							className="removeFilter"
							onClick={() => handleUpdateFilterGenre("all")}
						/>
					)}
				</div>
			</button>
			{isOpen && (
				<S.PriorityFilter>
					{props.genres.map((genre, i) => (
						<li key={i} onClick={() => handleUpdateFilterGenre(genre)}>
							{genre} {filterGenre === genre && <BsCheck />}
						</li>
					))}
					{props.genres.length == 0 && <li>Nenhum gênero encontrado</li>}
				</S.PriorityFilter>
			)}
		</S.FilterContainer>
	);
}
