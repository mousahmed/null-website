import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import SectionTitle from "components/SectionTitle";
import ProjectCard from "components/ProjectCard";

export default function Projects() {
	return (
		<Grid
			container
			direction="column"
			sx={{ mb: "8rem" }}
			align="center"
			alignItems="center"
			spacing={4}
		>
			<Grid id="projects" item sx={{ mb: "4rem" }}>
				<SectionTitle title="Projects" />
			</Grid>

			<Grid
				item
				container
				direction="row"
				justifyContent="space-between"
				spacing={4}
			>
				<Grid item md={4} xs={12}>
					<ProjectCard title="E-Commerce" />
				</Grid>
				<Grid item md={4} xs={12}>
					<ProjectCard title="Dashboard" />
				</Grid>
				<Grid item container direction="column" md={4} xs={12} spacing={4}>
					<Grid item>
						<ProjectCard title="APIs" />
					</Grid>
					<Grid item>
						<ProjectCard title="Iac" />
					</Grid>
				</Grid>
			</Grid>

			<Grid
				item
				container
				direction="row"
				justifyContent="space-between"
				spacing={4}
			>
				<Grid item md={4} xs={12}>
					<ProjectCard title="POS" />
				</Grid>
				<Grid item md={8} xs={12}>
					<ProjectCard title="Taxi Web App" />
				</Grid>
			</Grid>

			<Grid
				item
				container
				direction="row"
				justifyContent="space-between"
				spacing={4}
			>
				<Grid item md={8} xs={12}>
					<ProjectCard title="Web RTC" />
				</Grid>
				<Grid item md={4} xs={12}>
					<ProjectCard title="Mobile Apps" />
				</Grid>
			</Grid>
		</Grid>
	);
}
