import styled from "styled-components";
export const GridConteiner = styled.ul`
	padding: 24px;
	margin: 24px 0px;
	border-radius: 24px;
	display: grid;
	grid-template-columns: repeat(3, 360px);
	justify-content: center;
	border: 2px solid var(--color-gray-secondary);
	gap: 25px;

	.notFound {
		word-break: break-word;
		width: 100%;
		text-align: center;
		font-size: x-large;
		grid-column: 2;

		span {
			font-weight: 800;
			font-style: italic;
			text-decoration: underline;
			margin-left: 5px;
		}
	}
	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 350px);
		.notFound {
			grid-column: 1;
		}
	}
	@media (max-width: 850px) {
		grid-template-columns: repeat(1, 350px);
		.notFound {
			grid-column: 1;
		}
	}
	@media (max-width: 500px) {
		grid-template-columns: repeat(1, auto);
	}
`;
export const Conteiner = styled.div`
	padding: 8px;
	min-height: 450px;
	padding: 10px 25px;
	.headerOfGrid {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.numberOfGamesFound {
		margin-top: 15px;
		opacity: 0.85;
		font-style: italic;
	}
	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 5px 0;
		cursor: pointer;
	}

	.page-item {
		margin: 0px 5px;
		height: 30px;
		width: 30px;
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 2px;
		&:hover:not(.active) {
			background-color: var(--color-gray-secondary);
		}
	}
	.active {
		background-color: var(--color-bg);
		a {
			color: var(--color-white);
		}
		&:hover {
			background-color: var(--color-red);
		}
	}
	.previous,
	.next {
		width: 30px;
		height: 30px;
		border-radius: 100%;
		a {
			width: 30px;
			height: 30px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		&:hover {
			background-color: var(--color-gray-secondary);
		}
	}
	@media (max-width: 700px) {
		.headerOfGrid {
			flex-direction: column-reverse;
			width: 100%;
			> div {
				margin-top: 15px;
			}
			div,
			div input,
			div button {
				width: 100%;
			}
			div:first-child {
				p {
					width: max-content;
				}
				div:last-child {
					width: min-content;
					display: flex;
				}
				ul {
					width: 100%;
				}
			}
		}
	}
`;
