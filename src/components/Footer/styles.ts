import styled from "styled-components";

export const Conteiner = styled.footer`
	padding: 15px 0px;
	display: flex;
	width: 100%;
	align-self: self-end;
	align-items: center;
	justify-content: center;
	background: var(--color-bg);
	color: var(--color-white);
	margin-top: auto;
	a {
		border-bottom: 1px solid transparent;
		margin-left: 2px;
		padding: 0px 2px;
		color: var(--color-white);
		&:hover {
			border-bottom: 1px solid var(--color-white);
			opacity: 0.8;
		}
	}
`;
