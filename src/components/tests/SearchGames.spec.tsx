import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import { SearchGames } from "../SearchGames";

describe("SearchGames", () => {
	it("should render correctly", () => {
		render(
			<BrowserRouter>
				<SearchGames />
			</BrowserRouter>
		);

		expect(screen.getByText("Busque por jogos")).toBeInTheDocument();
		expect(screen.getByText("Selecionar gênero")).toBeInTheDocument();
	});
});
