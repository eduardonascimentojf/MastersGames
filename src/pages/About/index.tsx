import { Conteiner } from "./styles";

export function About() {
	return (
		<Conteiner>
			<li className="text1">
				<h5>
					Desafio desenvolvido referente uma vaga de estágio frontend React na{" "}
					<a href="https://www.appmasters.io/" target="_blank">
						App Masters.
					</a>
				</h5>
			</li>
			<li className="text2">
				<h5>
					<a
						href="https://github.com/eduardonascimentojf/MastersGames"
						target="_blank"
					>
						Link do Repositório.
					</a>
				</h5>
			</li>
			<li className="text3">
				<h5>
					<a
						href="https://www.figma.com/file/k0xKmWHXSVeazOXMNf3ap7/App-Masters"
						target="_blank"
					>
						Link do Protótipo.
					</a>
				</h5>
			</li>
		</Conteiner>
	);
}
