import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { FilterProvider } from "./contexts/filter.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<FilterProvider>
			<App />
		</FilterProvider>
	</React.StrictMode>
);
