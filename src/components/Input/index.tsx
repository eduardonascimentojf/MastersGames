import { InputHTMLAttributes } from "react";
import * as S from "./styles";
import { BsSearch } from "react-icons/bs";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
	return (
		<S.InputContainer>
			<S.Input {...props} />
			<BsSearch />
		</S.InputContainer>
	);
}
