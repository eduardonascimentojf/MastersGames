import styled from "styled-components";
import { cssVar, shade, transparentize } from "polished";

export const Conteiner = styled.div`
	&:hover {
		border-radius: 0px 0px 24px 24px;
		box-shadow: var(--color-gray-secondary) 10px 3px 12px 0px;
	}
	div > {
		.react-card-front,
		.react-card-back {
			border-radius: 0px 0px 24px 24px;
			border: 1px solid var(--color-gray-secondary);
			background-color: var(--color-gray);

			transform-style: preserve-3d;
			transition: transform 0.4s;
		}

		img {
			width: 100%;
			height: 200px;
			border-radius: inherit;
			border-end-end-radius: 0px;
			border-end-start-radius: 0px;
			object-fit: cover;
		}
		.fav {
			position: absolute;
			top: 0px;
			right: 0px;
			border-radius: 0px 0px 24px 24px;
			background-color: ${() =>
				transparentize(0.1, cssVar("--color-gray-secondary") + "")};
			align-items: end;
			margin: auto;
			margin-right: 8px;
			width: auto;
			width: 30px;
			height: 45px;
			display: flex;
			align-items: center;
			justify-content: center;
			svg {
				width: 40px;
				height: 25px;
				fill: var(--color-bg);
				border-color: red;
			}
			&:hover {
				svg {
					fill: var(--color-red);
				}
			}
			&.back {
				top: 0px;
			}
		}
		.info {
			padding: 10px;
			strong {
				margin-right: 5px;
				font-weight: 500;
			}
			svg {
				margin-left: 15px;
			}
			a,
			.viewMore,
			.seeLess {
				padding: 5px 25px;
				background-color: var(--color-bg);

				border-radius: 24px;
				color: var(--color-white);
				&:hover {
					background-color: ${() => shade(0.3, cssVar("--color-bg") + "")};
				}
			}
			.viewMore {
				width: fit-content;
				margin: 5px auto;
			}
			&.back {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				height: 280px;
				.buttonsBack {
					display: flex;
					align-items: center;
					justify-content: space-between;
				}
			}
		}

		.react-card-front,
		.react-card-front > div,
		.react-card-back,
		.react-card-back > div {
			width: 100%;
			height: 340px;
		}
	}
`;
