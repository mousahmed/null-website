import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Navbar from "components/Appbar";

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
		</ThemeProvider>
	);
}

export default App;
