import { styled } from "styled-components";

export const Input = styled.input`
	width: 352px;
	border-radius: 8px;
	border: none;
	padding: 10px 16px;
	border: 2px solid var(--color-gray-secondary);
	font-family: inherit;
	font-weight: 400;
	font-size: 14px;
	line-height: 22px;
`;

export const InputContainer = styled.div`
	position: relative;
	width: 352px;
	svg {
		position: absolute;
		right: 20px;
		top: 50%;
		transform: translateY(-50%);
		&:hover {
			fill: var(--color-red);
		}
	}
	:hover,
	:focus-within {
		box-shadow: var(--color-gray-secondary) 0px 1px 6px 0px;
	}
`;
