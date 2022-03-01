import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { AnimationOnScroll } from "react-animation-on-scroll";

export default function SectionTitle({ title }) {
	return (
		<>
			<AnimationOnScroll animateIn="animate__fadeInDown">
				<Typography variant="h3" color="primary" gutterBottom>
					{title}
				</Typography>
			</AnimationOnScroll>
			<AnimationOnScroll animateIn="animate__fadeInRight" delay={300}>
				<Divider
					sx={{
						bgcolor: "primary.main",
						maxWidth: "6rem",
						minHeight: ".2rem",
					}}
				/>
			</AnimationOnScroll>
		</>
	);
}
