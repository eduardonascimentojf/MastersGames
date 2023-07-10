import { BsEyeFill, BsEyeSlashFill, BsGithub, BsGoogle } from "react-icons/bs";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";

import { Conteiner } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { ILogin, IRegister } from "../../types";
import { Input, InputContainer } from "../../components/Input/styles";
import { auth } from "../../services/firebaseConfig";
import { useAuth } from "../../contexts/auth";
import {
	errorNotification,
	sucessNotification,
} from "../../toastifyNotifications";
import { Navigate } from "react-router-dom";

export function Login() {
	const [passwordType, setPasswordType] = useState(true);
	const [isLogin, setIsLogin] = useState(true);
	const { user, signIn } = useAuth();

	const {
		register,
		formState: { errors },
		watch,
		handleSubmit,
	} = useForm<IRegister>();
	const registerSubmit: SubmitHandler<IRegister> = (data) => {
		createUserWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				const user = userCredential.user;
				sucessNotification("Conta criada com sucesso!");
				signIn(user);
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
				errorNotification(errorMessage);
			});
	};
	const loginSubmit: SubmitHandler<ILogin> = (data) => {
		signInWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				const user = userCredential.user;
				sucessNotification("Logado com sucesso!");
				signIn(user);
			})
			.catch((error) => {
				const errorMessage = error.message;
				errorNotification(errorMessage);
			});
	};
	return (
		<Conteiner>
			{user && <Navigate to="/" replace={true} />}
			{isLogin ? (
				<div className="login">
					<div className="col-1">
						<h2>Logar</h2>
						<div className="social">
							<button>
								<BsGoogle />
							</button>
							<button>
								<BsGithub />
							</button>
						</div>
						<span>ou</span>
						<form
							id="form"
							className="flex flex-col"
							onSubmit={handleSubmit(loginSubmit)}
						>
							<fieldset>
								<label htmlFor="email">Email</label>
								<Input
									type="email"
									{...register("email", { required: true })}
									placeholder="email"
								/>
								{errors.email && <span>Email inválido</span>}
							</fieldset>
							<fieldset>
								<label htmlFor="password">Senha</label>
								<InputContainer>
									<Input
										type={passwordType ? "password" : "text"}
										{...register("password", {
											required: true,
											minLength: 3,
										})}
										placeholder="password"
									/>
									<div onClick={() => setPasswordType(!passwordType)}>
										{passwordType ? <BsEyeFill /> : <BsEyeSlashFill />}
									</div>
								</InputContainer>
								{errors.email && <span>Senha obrigatória</span>}
							</fieldset>
							<button className="btn">Entrar</button>
						</form>
						<p>
							Não tem uma conta?{" "}
							<a onClick={() => setIsLogin(!isLogin)}>Criar uma agora</a>
						</p>
					</div>
					<div className="col-2">
						<img
							src="https://noticias.maisesports.com.br/wp-content/uploads/2022/07/valorant-chamber.jpg"
							alt=""
						/>
					</div>
				</div>
			) : (
				<div className="register">
					<div className="col-1">
						<img
							src="https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/download-pubg-battlegrounds-offer-1er5e.jpg"
							alt=""
						/>
					</div>
					<div className="col-2">
						<h2>Registra-se</h2>
						<div className="social">
							<button>
								<BsGoogle />
							</button>
							<button>
								<BsGithub />
							</button>
						</div>
						<span>ou</span>
						<form
							id="form"
							className="flex flex-col"
							onSubmit={handleSubmit(registerSubmit)}
						>
							<fieldset>
								<label htmlFor="name">Nome</label>
								<Input
									type="text"
									{...register("name", { required: true })}
									placeholder="Nome"
								/>
								{errors.name && <span>Nome é obrigatório</span>}
							</fieldset>
							<fieldset>
								<label htmlFor="email">Email</label>
								<Input
									type="email"
									{...register("email", { required: true })}
									placeholder="email"
								/>
								{errors.email && <span>Email inválido</span>}
							</fieldset>
							<fieldset>
								<label htmlFor="password">Senha</label>
								<InputContainer>
									<Input
										type={passwordType ? "password" : "text"}
										{...register("password", {
											required: true,
											minLength: 3,
										})}
										placeholder="password"
									/>
									<div onClick={() => setPasswordType(!passwordType)}>
										{passwordType ? <BsEyeFill /> : <BsEyeSlashFill />}
									</div>
								</InputContainer>
							</fieldset>
							<fieldset>
								<label htmlFor="confirmpwd">Confirme a senha</label>
								<InputContainer>
									<Input
										type={passwordType ? "password" : "text"}
										{...register("confirmpwd", {
											required: true,
											minLength: 3,
											validate: (val: string) => {
												if (watch("password") != val) {
													return "As Senhas são diferentes";
												}
											},
										})}
										placeholder="Confirme a senha"
									/>
									<div onClick={() => setPasswordType(!passwordType)}>
										{passwordType ? <BsEyeFill /> : <BsEyeSlashFill />}
									</div>
								</InputContainer>

								{errors.confirmpwd && <span>Senhas diferentes</span>}
							</fieldset>

							<button className="btn">Criar conta</button>
						</form>
						<p>
							Tem uma conta?{" "}
							<a onClick={() => setIsLogin(!isLogin)}>Entrar agora</a>
						</p>
					</div>
				</div>
			)}
		</Conteiner>
	);
}
