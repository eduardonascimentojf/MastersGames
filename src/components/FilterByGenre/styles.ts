import { styled } from "styled-components";

export const FilterContainer = styled.div`
	display: flex;
	align-items: center;
	position: relative;

	button {
		width: 250px;
		padding: 12px 16px;
		background: transparent;
		border: 2px solid var(--color-gray-secondary);
		border-radius: 8px 8px 0px 0px;
		cursor: pointer;
		font-family: inherit;
		font-weight: 400;
		font-size: 14px;
		line-height: 22px;
		display: flex;
		align-items: center;
		justify-content: space-between;

		svg {
			margin-left: 16px;
			width: 25px;
			height: 25px;
		}
		.removeFilter {
			fill: var(--color-red);
			cursor: pointer;
		}
	}
`;

export const PriorityFilter = styled.ul`
	position: absolute;
	width: 250px;
	background: var(--color-gray);
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
	border-radius: 0px 0px 8px 8px;
	border: 2px solid var(--color-gray-secondary);
	box-sizing: border-box;

	border-top: none;
	padding: 12px 16px;
	z-index: 99;
	top: 100%;

	li {
		color: var(--text-dark);
		font-weight: 400;
		font-size: 14px;
		line-height: 22px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: space-between;
		svg {
			width: 20px;
			height: 20px;
		}
		border-bottom: 2px solid transparent;
		&:hover {
			border-bottom-color: var(--color-gray-secondary);
		}
	}

	li + li {
		margin-top: 4px;
	}
`;
