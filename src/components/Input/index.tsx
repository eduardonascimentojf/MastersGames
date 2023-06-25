import { InputHTMLAttributes } from "react";
import * as S from "./styles";
import { BsSearch } from "react-icons/bs";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	onChangeSearch: React.Dispatch<React.SetStateAction<string>>;
}

export function Input(props: InputProps) {
	return (
		<S.InputContainer>
			<S.Input
				onChange={(e) => props.onChangeSearch(e.target.value)}
				{...props}
			/>
			<BsSearch />
		</S.InputContainer>
	);
}
