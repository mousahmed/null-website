import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import SendIcon from "@mui/icons-material/Send";
import SectionTitle from "components/SectionTitle";

import AboutImage from "assets/images/moustafa_mansour.png";

import CV from "assets/files/cv.pdf";
export default function About() {
	return (
		<Grid
			id="about"
			container
			direction="column"
			sx={{ mb: "15rem" }}
			align="center"
			alignItems="center"
			spacing={4}
		>
			<Grid item sx={{ mb: "4rem" }}>
				<SectionTitle title="About Us" />
			</Grid>

			<Grid item container justifyContent="space-between">
				<Grid item xs={12} lg={6}>
					<Grid
						component="img"
						src={AboutImage}
						sx={{ maxHeight: { xs: "35rem", md: "45rem" } }}
						alt="Moustafa Mansour"
					/>
				</Grid>
				<Grid
					item
					container
					direction="column"
					justifyContent="space-between"
					xs={12}
					lg={6}
					align="left"
					spacing={6}
				>
					<Grid item>
						<Typography variant="h3" color="primary" gutterBottom>
							Moustafa Mansour
						</Typography>
						<Typography variant="h4" color="secondary" gutterBottom>
							Software Engineer
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="body1" color="#ADA8B6" paragraph>
							I am a passionate Software Engineer who enjoys developing new
							applications and solving problems.
						</Typography>
						<Typography variant="body1" color="#ADA8B6" paragraph>
							I enjoy learning new languages and frameworks to get a better
							understanding of how everything works.
						</Typography>
						<Typography variant="body1" color="#ADA8B6" paragraph>
							This allows me to make better use of my skills in various aspects
							of the development process - from planning and designing to
							testing and coding to deploying and monitoring.
						</Typography>
						<Typography variant="body1" color="#ADA8B6" paragraph>
							My main goal is to continue my development and work experience by
							creating new things and then helping the business succeed.
						</Typography>
						<Typography variant="body1" color="#ADA8B6" paragraph>
							My passion is to create something unique that will not only
							benefit the company itself but for the user as well.
						</Typography>
					</Grid>

					<Grid item container justifyContent="space-between">
						<Button
							variant="contained"
							sx={{ py: 2, px: {xs:2 , md:4} }}
							endIcon={<SendIcon />}
							color="primary"
						>
							Contact Me
						</Button>
						<Button
							variant="contained"
							component="a"
							href={CV}
							target="_blank"
							sx={{ py: 2, px: {xs:2 , md:4} }}
							endIcon={<DownloadIcon />}
							color="secondary"
						>
							Download CV
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
