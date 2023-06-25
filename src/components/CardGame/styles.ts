import styled from "styled-components";

export const Conteiner = styled.div`
	div > {
		.react-card-front,
		.react-card-back {
			border-radius: 0px 0px 24px 24px;
			border: 1px solid var(--color-gray-secondary);
			background-color: var(--color-gray);
			cursor: pointer;
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
		.info {
			padding: 10px;
			strong {
				margin-right: 5px;
				font-weight: 500;
			}
			svg {
				margin-left: 15px;
			}
			a {
				color: var(--color-light-blue);
			}
			&.back {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				height: 250px;
			}
		}

		.react-card-front,
		.react-card-back > div {
			width: 100%;
			height: 300px;
		}
	}
`;
