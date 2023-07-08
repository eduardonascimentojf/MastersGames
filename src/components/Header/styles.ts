import styled from "styled-components";

export const Conteiner = styled.header`
	padding: 10px 25px;
	background: var(--color-bg);
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: var(--color-white);

	.logo {
		width: 250px;
		height: 70px;
	}
	ul {
		display: flex;
		height: 40px;
		align-items: center;

		li {
			padding: 5px 15px;
			border-radius: 8px;
			& + li {
				margin-left: 15px;
			}
			a,
			button {
				font-size: large;
				cursor: pointer;
				color: var(--color-white);
			}

			&:hover {
				background-color: rgba(var(--color-black-rgba), 0.3);
			}
			&.active {
				border-bottom: 2px solid var(--color-white);
				border-radius: 8px 8px 0px 0px;
			}
		}
	}
	@media (max-width: 600px) {
		flex-direction: column;
	}

	
`;
