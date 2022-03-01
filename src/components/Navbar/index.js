import { cloneElement, useState } from "react";

import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Logo from "assets/images/logo.svg";

const routes = [
	{ name: "Home", section: "/#home" },
	{ name: "Projects", section: "/#projects" },
	{ name: "Services", section: "/#services" },
	{ name: "About Us", section: "/#about" },
	{ name: "Contact Us", section: "/#contact" },
];
function ElevationScroll(props) {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

ElevationScroll.propTypes = {
	children: PropTypes.element.isRequired,
};
const iOS =
	typeof navigator !== "undefined" &&
	/iPad|iPhone|iPod/.test(navigator.userAgent);

export default function Navbar() {
	const [activeTab, setActiveTab] = useState(0);
	const [open, setOpen] = useState(false);

	const handleChange = (event, newValue) => {
		setActiveTab(newValue);
	};

	return (
		<>
			<AppBar
				sx={{
					background: `linear-gradient(180deg, #1B9AAA 36.26%, #050505 100%)`,
				}}
				position="fixed"
			>
				<Toolbar>
					<Container>
						<Grid container direction="row" justifyContent="space-between">
							<Grid item xs={2}>
								<a href="/#">
									<img src={Logo} alt="Null Logo" />
								</a>
							</Grid>
							<Grid
								item
								container
								alignItems="center"
								xs
								justifyContent="flex-end"
							>
								<Tabs
									aria-label="nav tabs example"
									value={activeTab}
									onChange={handleChange}
									textColor="secondary"
									indicatorColor="secondary"
									sx={{ display: { xs: "none", md: "flex" } }}
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

								<IconButton
									size="large"
									edge="start"
									color="inherit"
									aria-label="open drawer"
									sx={{ display: { md: "none" } }}
									onClick={() => setOpen(!open)}
								>
									<MenuIcon />
								</IconButton>
							</Grid>
						</Grid>
					</Container>
				</Toolbar>
			</AppBar>
			<Toolbar sx={{mb: "3rem"}} />
			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				anchor="left"
				open={open}
				onClose={() => setOpen(false)}
				onOpen={() => setOpen(true)}
				sx={{ zIndex: 100 }}
			>
				<Tabs
					aria-label="nav tabs example"
					value={activeTab}
					onChange={handleChange}
					onClick={() => setOpen(false)}
					textColor="secondary"
					indicatorColor="secondary"
					orientation="vertical"
					sx={{
						display: { xs: "flex", md: "none" },
						background: `linear-gradient(15deg, #1B9AAA 36.26%, #050505 100%)`,
						height: "100%",
						pt: "6rem",
					}}
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
			</SwipeableDrawer>
		</>
	);
}
