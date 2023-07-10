import { BsArrowUpShort } from "react-icons/bs";
import { Conteiner } from "./styles";
import { useEffect, useState } from "react";

export function PageUp() {
	const [showTopBtn, setShowTopBtn] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<Conteiner>{showTopBtn && <BsArrowUpShort onClick={goToTop} />}</Conteiner>
	);
}
