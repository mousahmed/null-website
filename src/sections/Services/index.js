import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

import SectionTitle from "components/SectionTitle";

import DesignIcon from "@mui/icons-material/DesignServices";
import FrontIcon from "assets/images/frontIcon.svg";
import BackIcon from "assets/images/backIcon.svg";
import CloudIcon from "assets/images/cloudIcon.svg";

import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Services() {
	return (
		<Grid
			id="services"
			container
			direction="column"
			sx={{ mb: "20rem" }}
			align="center"
			alignItems="center"
			spacing={4}
		>
			<Grid item sx={{ mb: "4rem" }}>
				<SectionTitle title="Services" />
			</Grid>

			<Grid item container spacing={8}>
				<Grid
					item
					container
					direction="column"
					alignItems="center"
					align="center"
					sm={12}
					md={3}
				>
					<AnimationOnScroll animateIn="animate__fadeInLeft" delay={200}>
						<DesignIcon sx={{ fontSize: "4rem" }} color="primary" />
						<Typography variant="h5" color="secondary" gutterBottom>
							UI / UX Design
						</Typography>
						<Typography variant="body2" color="#ADA8B6">
							Designing Wireframes and High Fidelity Prototypes in Adobe Xd for
							web & mobile apps
						</Typography>
					</AnimationOnScroll>
				</Grid>
				<Grid
					item
					container
					direction="column"
					alignItems="center"
					align="center"
					sm={12}
					md={3}
				>
					<AnimationOnScroll animateIn="animate__fadeInUp" delay={200}>
						<Icon sx={{ fontSize: "4rem" }}>
							<img
								src={FrontIcon}
								style={{ maxWidth: "100%", maxHeight: "100%" }}
								alt="Front End Coding"
							/>
						</Icon>

						<Typography variant="h5" color="secondary" gutterBottom>
							Front-End
						</Typography>
						<Typography variant="body2" color="#ADA8B6">
							Building the best and seamless user interfaces using React, Redux
							& MUI
						</Typography>
					</AnimationOnScroll>
				</Grid>
				<Grid
					item
					container
					direction="column"
					alignItems="center"
					align="center"
					sm={12}
					md={3}
				>
					<AnimationOnScroll animateIn="animate__fadeInUp" delay={200}>
						<Icon sx={{ fontSize: "4rem" }}>
							<img
								style={{ maxWidth: "100%", maxHeight: "100%" }}
								src={BackIcon}
								alt="Back End Coding"
							/>
						</Icon>
						<Typography variant="h5" color="secondary" gutterBottom>
							Back-End
						</Typography>
						<Typography variant="body2" color="#ADA8B6">
							Developing & Testing the APIs essential for your business logic
							and database using Django & PostgreSQL
						</Typography>
					</AnimationOnScroll>
				</Grid>
				<Grid
					item
					container
					direction="column"
					alignItems="center"
					align="center"
					sm={12}
					md={3}
				>
					<AnimationOnScroll animateIn="animate__fadeInRight" delay={200}>
						<Icon sx={{ fontSize: "4rem" }}>
							<img
								style={{ maxWidth: "100%", maxHeight: "100%" }}
								src={CloudIcon}
								alt="Cloud Services"
							/>
						</Icon>
						<Typography variant="h5" color="secondary" gutterBottom>
							Cloud
						</Typography>
						<Typography variant="body2" color="#ADA8B6">
							Deploying your software in secure enviroments to be highly
							scalable, resilient and cost efficent In AWS
						</Typography>
					</AnimationOnScroll>
				</Grid>
			</Grid>
		</Grid>
	);
}
