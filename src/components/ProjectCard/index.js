import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function ProjectCard({ title }) {
	return (
		<Paper sx={{ height: "100%" }}>
			<Grid
				container
				alignItems="flex-end"
				justifyContent="center"
				sx={{ minHeight: 200, height: "100%" }}
			>
				<Typography variant="h5" gutterBottom>
					{title}
				</Typography>
			</Grid>
		</Paper>
	);
}
