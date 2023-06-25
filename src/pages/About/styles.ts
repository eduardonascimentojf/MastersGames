import styled from "styled-components";

export const Conteiner = styled.ul`
	height: 80%;
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
	padding: 10px 25px;
	li + li {
		margin-top: 15px;
	}
	h5 {
		width: 100%;
		font-size: x-large;
		font-weight: 600;
		overflow-wrap: break-word;
		
		a {
			font-weight: 800;
			text-decoration: underline;
			text-underline-offset: 6px;
			&:hover {
				color: var(--color-light-blue);
			}
		}
	}
`;
