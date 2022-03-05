import { cloneElement, useState, useEffect } from "react";

import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import { scroller, Link } from "react-scroll";

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
	{ name: "Home", section: "home" },
	{ name: "Projects", section: "projects" },
	{ name: "Services", section: "services" },
	{ name: "About Us", section: "about" },
	{ name: "Contact Us", section: "contact" },
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
	const scrollTo = (route) => {
		scroller.scrollTo(route, {
			duration: 800,
			delay: 0,
			smooth: true,
			offset: -100,
		});
	};

	useEffect(() => {
		const projectsPosition = document.getElementById("home").clientHeight - 100;

		const servicesPosition =
			projectsPosition + document.getElementById("projects").clientHeight;

		const AboutPosition =
			servicesPosition + document.getElementById("services").clientHeight + 200;

		const ContactPosition =
			AboutPosition + document.getElementById("about").clientHeight + 200;

		window.addEventListener("scroll", () => {
			if (
				document.body.scrollTop > ContactPosition ||
				document.documentElement.scrollTop > ContactPosition
			) {
				setActiveTab(4);
			} else if (
				document.body.scrollTop > AboutPosition ||
				document.documentElement.scrollTop > AboutPosition
			) {
				setActiveTab(3);
			} else if (
				document.body.scrollTop > servicesPosition ||
				document.documentElement.scrollTop > servicesPosition
			) {
				setActiveTab(2);
			} else if (
				document.body.scrollTop > projectsPosition ||
				document.documentElement.scrollTop > projectsPosition
			) {
				setActiveTab(1);
			} else {
				setActiveTab(0);
			}
		});
	}, []);

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
						<Grid
							container
							direction="row"
							justifyContent="space-between"
							alignItems="center"
						>
							<Grid item xs={3}>
								<Link to="home" smooth offset={-100}>
									<img src={Logo} alt="Null Logo" />
								</Link>
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
											onClick={() => scrollTo(route.section)}
											sx={{ selected: { color: "#fff" } }}
											key={`navTab-${route.name}-${index}`}
											label={route.name}
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
			<Toolbar sx={{ mb: "1rem" }} />
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
							onClick={() => scrollTo(route.section)}
							key={`navDrawer-${route.name}-${index}`}
							label={route.name}
							
						/>
					))}
				</Tabs>
			</SwipeableDrawer>
		</>
	);
}
