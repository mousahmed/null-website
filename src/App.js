import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import Navbar from "components/Navbar";
import Hero from "sections/Hero";
import Projects from "sections/Projects";
import Services from "sections/Services";
import About from "sections/About";

const nullPrimary = "#1B9AAA";
const nullSecondary = "#FFEEDB";
const nullBlack = "#050505";

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: nullPrimary,
		},
		secondary: {
			main: nullSecondary,
		},
		background: {
			default: nullBlack,
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navbar />

			<Hero />

			<Container>
				<Projects />
				<Services />
				<About />
			</Container>
		</ThemeProvider>
	);
}

export default App;
