import { useState } from "react";
import { ICardGame } from "../../types";
import { Conteiner } from "./styles";
import { BsFillHeartFill, BsHeart, BsPcDisplay } from "react-icons/bs";
import { auxDate } from "../utils";
import ReactCardFlip from "react-card-flip";
import ReactStars from "react-stars";
export function CardGame(props: ICardGame) {
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<Conteiner key={props.id}>
			<ReactCardFlip isFlipped={isFlipped}>
				<div>
					<img src={props.thumbnail} alt={props.title} />
					<div className="fav">
						<BsFillHeartFill />
						<ReactStars count={5} size={24} color2={"#ffd700"} half={false} />
					</div>
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
						<p className="viewMore" onClick={() => setIsFlipped(!isFlipped)}>
							Ver Mais ↓
						</p>
					</div>
				</div>
				<div>
					<div className="fav back">
						<BsHeart />
						<ReactStars count={5} size={24} color2={"#ffd700"} half={false} />
					</div>
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
						<div className="buttonsBack">
							<a
								href={props.freetogame_profile_url}
								target="_blank"
								className="link_redirect"
							>
								Free Game
							</a>
							<p className="seeLess" onClick={() => setIsFlipped(!isFlipped)}>
								Ver Menos ↑
							</p>
						</div>
					</div>
				</div>
			</ReactCardFlip>
		</Conteiner>
	);
}
