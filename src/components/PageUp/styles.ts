import styled from "styled-components";

export const Conteiner = styled.div`
	position: relative;

	svg {
		position: fixed;
		bottom: 40px;
		right: 25px;
		z-index: 100;
		background-color: var(--color-bg);
		border: 1px solid var(--color-white);
		border-radius: 50%;
		height: 50px;
		width: 50px;
		fill: var(--color-white);
		cursor: pointer;
	}
`;
