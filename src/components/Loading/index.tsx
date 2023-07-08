import { BsController } from "react-icons/bs";
import { Conteiner } from "./styles";
export function Loading() {
	return (
		<Conteiner>
			<div className="logo">{<BsController />}</div>
		</Conteiner>
	);
}
