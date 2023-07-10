import { Conteiner } from "./styles";
import Logo from "../../assets/mastersgames.svg";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { darkTheme } from "../../styles/theme";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { Link, redirect, useLocation } from "react-router-dom";
import { ImExit } from "react-icons/im";
import { signOut } from "firebase/auth";
import {
	errorNotification,
	sucessNotification,
} from "../../utils/toastifyNotifications";
import { useAuth } from "../../hooks/useAuth";
import { auth } from "../../services/firebaseConfig";

interface IProps {
	onChangeTheme: () => void;
}

export function Header({ onChangeTheme }: IProps) {
	const theme = useContext(ThemeContext);
	const location = useLocation();
	const { pathname } = location;
	const splitLocation = pathname.split("/");
	const { user, setUser } = useAuth();
	function sign_out() {
		redirect("/");

		signOut(auth)
			.then(() => {
				sucessNotification("Deslogado com sucesso!");
				setUser(null);
			})
			.catch((error) => {
				errorNotification(error.message);
			});
	}
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
				{user ? (
					<>
						<li className={splitLocation[1] == "favoritos" ? "active" : " "}>
							<Link to="/favoritos">
								<p>Favoritos</p>
							</Link>
						</li>
						<li onClick={sign_out}>
							<button>
								<ImExit />
							</button>
						</li>
					</>
				) : (
					<li className={splitLocation[1] == "auth" ? "active" : " "}>
						<Link to="/auth">
							<p>Login</p>
						</Link>
					</li>
				)}

				<li onClick={() => onChangeTheme()}>
					<button>
						{theme === darkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
					</button>
				</li>
			</ul>
		</Conteiner>
	);
}
