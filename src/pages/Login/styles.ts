import { cssVar, shade } from "polished";
import styled from "styled-components";

export const Conteiner = styled.div`
	border: 2px solid var(--color-gray-secondary);
	border-radius: 24px 0px 0px 24px;
	margin: 10px auto;
	.login,
	.register {
		display: flex;
		justify-content: center;
		.col-1,
		.col-2,
		form {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 12px;

			fieldset {
				margin: 0px 10px;
				display: flex;
				flex-direction: column;
				> div {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 350px;
					margin: auto;
					display: flex;
					align-items: center;
					justify-content: flex-start;
				}
				input {
					width: 350px;
				}
				.iconPassword {
					margin: auto;
					align-self: flex-end;
					transform: translateX(-200%);
				}
			}
		}
		a {
			text-decoration: underline;
			cursor: pointer;
			&:hover {
				color: var(--color-light-blue);
			}
		}

		img {
			width: 200px;
			height: 100%;
			object-fit: cover;
		}
	}
	.login {
		.col-1 {
			padding: 5px 15px 5px 5px;
			margin-right: 2px;
			border-right: 2px solid var(--color-gray-secondary);
		}
	}
	.register {
		.col-2 {
			padding: 5px 5px 5px 15px;
			margin-left: 2px;
			border-left: 2px solid var(--color-gray-secondary);
		}
	}
	.register .col-1 img {
		border-radius: 24px 0px 0px 24px;
	}

	.btn {
		cursor: pointer;
		padding: 5px 15px;
		background-color: var(--color-bg);
		color: var(--color-white);
		text-transform: uppercase;
		border-radius: 15px;
		align-self: self-end;
		&:hover {
			background-color: ${() => shade(0.3, cssVar("--color-bg").toString())};
		}
	}
`;
