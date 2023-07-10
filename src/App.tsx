import { DefaultTheme, ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { About } from "./pages/About";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { darkTheme, lightTheme } from "./styles/theme";
import { useTheme } from "./hooks/useTheme";

import GlobalStyle from "./styles/globalStyle";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

function App() {
	const [theme, setTheme] = useTheme<DefaultTheme>(darkTheme);
	function handleChangeTheme() {
		setTheme(theme === lightTheme ? darkTheme : lightTheme);
	}

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<GlobalStyle />

				<Header onChangeTheme={handleChangeTheme} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sobre" element={<About />} />
					<Route path="/auth" element={<Login />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
				<Footer />
			</BrowserRouter>
			<ToastContainer />
		</ThemeProvider>
	);
}

export default App;
