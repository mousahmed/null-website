import { cloneElement, useState } from "react";

import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";

import Logo from "assets/images/logo.svg";

const routes = [
	{ name: "Brand", section: "/#brand" },
	{ name: "Quality", section: "/#quality" },
	{ name: "Company", section: "/#company" },
	{ name: "Products", section: "/#products" },
	{ name: "Contact Us", section: "/#contactUs" },
];
function ElevationScroll(props) {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return cloneElement(children, {
		elevation: trigger ? 4 : 0,
		color: trigger ? "primary" : "primary",
	});
}

ElevationScroll.propTypes = {
	children: PropTypes.element.isRequired,
};
const iOS =
	typeof navigator !== "undefined" &&
	/iPad|iPhone|iPod/.test(navigator.userAgent);

export default function Appbar(props) {
	const [open, setOpen] = useState(false);
	return (
		<>
			<AppBar
				sx={{
					background: `linear-gradient(180deg, #1B9AAA 36.26%, #050505 100%)`,
				}}
			>
				<Toolbar>
					<Container>
						<Grid container direction="row" justifyContent="space-between">
							<Grid item>
								<img src={Logo} alt="Null Logo" />
							</Grid>
							<Grid item container alignItems="center" sx={{ maxWidth: "50%" }}>
								<Tabs
									aria-label="nav tabs example"
									value={0}
									textColor="secondary"
									indicatorColor="secondary"
								>
									{routes.map((route, index) => (
										<Tab
											component="a"
											sx={{ selected: { color: "#fff" } }}
											key={`navTab-${route.name}-${index}`}
											label={route.name}
											
											href={route.section}
										/>
									))}
								</Tabs>
							</Grid>
						</Grid>
					</Container>
				</Toolbar>
			</AppBar>
			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				anchor="left"
				open={open}
				onClose={() => setOpen(false)}
				onOpen={() => setOpen(true)}
			></SwipeableDrawer>
		</>
	);
}
