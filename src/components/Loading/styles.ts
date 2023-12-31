import styled from "styled-components";

export const Conteiner = styled.div`
	z-index: 10;
	background: rgba(var(--color-black-rgba), 0.4);
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: static;
	min-height: inherit;
	cursor: progress;
	.logo svg {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
		transition: filter 300ms;
		width: 100px;
		height: 100px;
		fill: var(--color-bg);
	}
	.logo svg:hover {
		filter: drop-shadow(0 0 2em var(--color-red));
	}

	@keyframes logo-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.logo svg {
			animation: logo-spin infinite 5s linear;
		}
	}
`;
