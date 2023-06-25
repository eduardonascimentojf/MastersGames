import { Conteiner } from "./styles";
import Logo from "../../assets/mastersgames.svg";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { darkTheme } from "../../styles/theme";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

interface IProps {
	onChangeTheme: () => void;
}

export function Header({ onChangeTheme }: IProps) {
	const theme = useContext(ThemeContext);
	const location = useLocation();
	const { pathname } = location;
	const splitLocation = pathname.split("/");
	return (
		<Conteiner>
			<div className="logo">
				<Link to="/">
					<img src={Logo} alt="Masters Games" />
				</Link>
			</div>
			<ul>
				<li className={splitLocation[1] == "" ? "active" : " "}>
					<Link to="/">
						<p>Home</p>
					</Link>
				</li>
				<li className={splitLocation[1] == "sobre" ? "active" : " "}>
					<Link to="/sobre">
						<p>Sobre</p>
					</Link>
				</li>
				<li onClick={() => onChangeTheme()}>
					<button>
						{theme === darkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
					</button>
				</li>
			</ul>
		</Conteiner>
	);
}
