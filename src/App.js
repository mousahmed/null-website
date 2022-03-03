import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Navbar from "components/Navbar";
import Hero from "sections/Hero";
import Projects from "sections/Projects";
import Services from "sections/Services";
import About from "sections/About";
import Contact from "sections/Contact";

import Footer from "assets/images/footer.png";

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
	shape: {
		borderRadius: 15,
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
				<Contact />
			</Container>
			<Grid
				container
				component={Paper}
				sx={{ width: "100%", minHeight: "10rem", borderRadius: 0 }}
				justifyContent="flex-end"
				alignItems="stretch"

			>
				<Grid item component="img" src={Footer} sx={{ width: {xs: "70vw", md: "50vw"} }} />
			</Grid>
		</ThemeProvider>
	);
}

export default App;
