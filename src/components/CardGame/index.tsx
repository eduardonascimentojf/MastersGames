import { useState } from "react";
import { ICardGame } from "../../types";
import { Conteiner } from "./styles";
import { BsPcDisplay } from "react-icons/bs";
import { auxDate } from "../utils";
import ReactCardFlip from "react-card-flip";
export function CardGame(props: ICardGame) {
	const [isFlipped, setIsFlipped] = useState(false);
	return (
		<Conteiner key={props.id}>
			<ReactCardFlip isFlipped={isFlipped}>
				<div onClick={() => setIsFlipped(!isFlipped)}>
					<img src={props.thumbnail} alt={props.title} />
					<div className="info">
						<h3>
							<strong>Titulo: </strong>
							{props.title}
						</h3>
						<p>
							<strong>Genero: </strong>
							{props.genre}
						</p>
						<p>
							<strong>Plataforma: </strong>
							{props.platform}
							<BsPcDisplay />
						</p>
					</div>
				</div>
				<div onClick={() => setIsFlipped(!isFlipped)}>
					<div className="info back">
						<h3>
							<strong>Titulo: </strong>
							{props.title}
						</h3>
						<p>
							<strong>Genero: </strong>
							{props.genre}
						</p>
						<p>
							<strong>Plataforma: </strong>
							{props.platform}
							<BsPcDisplay />
						</p>
						<p>
							<strong>Publicado por: </strong>
							{props.publisher}
						</p>
						<p>
							<strong>Data: </strong>
							{auxDate(props.release_date)}
						</p>
						<p>
							<strong>Free Game: </strong>
							<a href={props.freetogame_profile_url} target="_blank">
								Ir para freetogame
							</a>
						</p>
					</div>
				</div>
			</ReactCardFlip>
		</Conteiner>
	);
}
