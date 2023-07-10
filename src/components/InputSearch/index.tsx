import { InputHTMLAttributes } from "react";
import * as S from "../Input/styles";
import { BsSearch } from "react-icons/bs";

export function InputSearch(props: InputHTMLAttributes<HTMLInputElement>) {
	return (
		<S.InputContainer>
			<S.Input {...props} />
			<BsSearch />
		</S.InputContainer>
	);
}
