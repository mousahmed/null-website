import React, { useState, useEffect, useRef } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function Hero() {
	const [vantaEffect, setVantaEffect] = useState(0);
	const myRef = useRef(null);

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				window.VANTA.NET({
					el: myRef.current,
					color: 0x1b9aaa,
					backgroundColor: 0x050505,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					scale: 1.0,
					scaleMobile: 1.0,
					points: 18.0,
					spacing: 20.0,
					showDots: false,
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);

	return (
		<Grid id="home" container sx={{ minHeight: "40vw", mb:"6rem" }} alignItems="center" ref={myRef}>
			<Grid item container direction="column" alignItems="center" md>
				<Paper
					elevation={6}
					sx={{
						background: `rgba(0, 0,0, 0.5)`,
						px: { xs: 2, md: 10 },
						py: { xs: 20, md: 10 },
					}}
					align="center"
				>
					<Typography variant="h3" color="primary" gutterBottom>
						Null Cloud Solutions
					</Typography>
					<Typography variant="h4" color="secondary" gutterBottom>
						Bring out the best in you
					</Typography>
					<Typography variant="body1" color="#ADA8B6" paragraph sx={{ maxWidth: "42rem" }}>
						Let’s work together in developing your next idea. Bringing it to
						life and becomes scalable & resiliant on the cloud. Acessible to you
						and everyone you want in any place, at any time.
					</Typography>
				</Paper>
			</Grid>
		</Grid>
	);
}
