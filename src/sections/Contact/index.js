import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import SectionTitle from "components/SectionTitle";

import ContactImage from "assets/images/contact.png";

const validate = (values) => {
	const errors = {};

	if (!values.name) {
		errors.name = "Required";
	}

	if (!values.subject) {
		errors.subject = "Required";
	}
	if (!values.message) {
		errors.message = "Required";
	}

	if (!values.email) {
		errors.email = "Required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = "Invalid email address";
	}

	return errors;
};

export default function Contact() {
	const [alert, setAlert] = useState({
		open: false,
		message: "",
		color: "",
	});

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
		validate,
		onSubmit: (values, { setSubmitting, resetForm }) => {
			setSubmitting(true);

			axios
				.get(
					"https://us-central1-null-cloud-solutions.cloudfunctions.net/sendMail",
					{ params: { ...values } }
				)
				.then((res) => {
					resetForm();
					setSubmitting(false);
					setAlert({
						open: true,
						message: "Your message was sent successfully!",
						color: "success",
					});
				})
				.catch((err) => {
					setSubmitting(false);
					setAlert({
						open: true,
						message: "Something went wrong, please try again later!",
						color: "error",
					});
				});
		},
	});
	return (
		<Grid
			id="contact"
			container
			direction="column"
			sx={{ mb: "15rem" }}
			align="center"
			alignItems="center"
		>
			<Grid item sx={{ mb: "4rem" }}>
				<SectionTitle title="Contact Us" />
			</Grid>

			<Grid
				item
				container
				component={Paper}
				direction="row"
				justifyContent="space-between"
				sx={{ overflow: "hidden" }}
			>
				<Grid
					component="form"
					onSubmit={formik.handleSubmit}
					item
					xs={12}
					md={6}
					sx={{ my: 4, px: { xs: 3, md: 8 } }}
					container
					direction="column"
					justifyContent="space-between"
					
					spacing={4}
				>
					<Grid item sx={{width: "100%" }}>
						<TextField
							id="name-form"
							label="Name"
							variant="outlined"
							fullWidth
							name="name"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.name}
							error={formik.touched.name && formik.errors.name ? true : false}
							helperText={
								formik.touched.name && formik.errors.name ? formik.errors.name : null
							}
						/>
					</Grid>
					<Grid item sx={{width: "100%" }}>
						<TextField
							id="email-form"
							label="Email"
							variant="outlined"
							type="email"
							fullWidth
							name="email"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
							error={formik.touched.email && formik.errors.email ? true : false}
							helperText={
								formik.touched.email && formik.errors.email ? formik.errors.email : null
							}
						/>
					</Grid>
					<Grid item sx={{width: "100%" }}>
						<TextField
							id="subject-form"
							label="Subject"
							variant="outlined"
							name="subject"
							fullWidth
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.subject}
							error={formik.touched.subject && formik.errors.subject ? true : false}
							helperText={
								formik.touched.subject && formik.errors.subject
									? formik.errors.subject
									: null
							}
						/>
					</Grid>
					<Grid item sx={{width: "100%" }}>
						<TextField
							id="message-form"
							label="Message"
							variant="outlined"
							name="message"
							fullWidth
							maxRows={8}
							minRows={8}
							multiline
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.message}
							error={formik.touched.message && formik.errors.message ? true : false}
							helperText={
								formik.touched.message && formik.errors.message
									? formik.errors.message
									: null
							}
						/>
					</Grid>
					<Grid item sx={{width: "100%" }}>
						<Button
							variant="contained"
							color="primary"
							size="large"
							type="submit"
							fullWidth
							endIcon={formik.isSubmitting ? "" : <SendIcon sx={{ mt: -0.5 }} />}
							disabled={
								(formik.errors.message &&
									formik.errors.name &&
									formik.errors.email &&
									formik.errors.subject) ||
								formik.isSubmitting ||
								formik.values.name === "" ||
								formik.values.email === "" ||
								formik.values.subject === "" ||
								formik.values.message === ""
							}
						>
							{formik.isSubmitting ? <CircularProgress /> : "Send"}
						</Button>
					</Grid>
				</Grid>

				<Grid
					xs={12}
					md={6}
					item
					container
					direction="column"
					justifyContent="center"
					sx={{
						background: ` linear-gradient(0deg , rgba(5,5,5,.5) , rgba(5,5,5,.5) ), url(${ContactImage})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						minHeight: "40rem",
						pl: { xs: 2, sm: 15 },
					}}
				>
					<Grid item sx={{ mb: 4, width: "100%" }}>
						<Typography
							component="a"
							href="tel:+201000314365"
							sx={{ textDecoration: "none", fontSize: "h6.fontSize" }}
							variant="h5"
							color="secondary"
						>
							<Box sx={{ display: "flex" }}>
								<PhoneIcon sx={{ fontSize: 30, mr: 1 }} />
								+20 1000 314 365
							</Box>
						</Typography>
					</Grid>
					<Grid item sx={{ mb: 4, width: "100%" }}>
						<Typography
							component="a"
							href="mailto:info@nullcloudsolutions.com"
							sx={{ textDecoration: "none", fontSize: "h6.fontSize" }}
							variant="h5"
							color="secondary"
						>
							<Box sx={{ display: "flex" }}>
								<EmailIcon sx={{ fontSize: 30, mr: 1 }} />
								info@nullcloudsolutions.com
							</Box>
						</Typography>
					</Grid>

					<Grid item sx={{ width: "100%" }}>
						<Typography
							component="a"
							href="https://www.linkedin.com/in/moustafa-m-ahmed/"
							target="_blank"
							rel="noopener noreferrer"
							sx={{ textDecoration: "none", fontSize: "h6.fontSize" }}
							variant="h5"
							color="secondary"
						>
							<Box sx={{ display: "flex" }}>
								<LinkedInIcon sx={{ fontSize: 30, mr: 1 }} />
								moustafa-m-ahmed
							</Box>
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Snackbar
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				open={alert.open}
				autoHideDuration={5000}
				onClose={() => setAlert({ ...alert, open: false })}
			>
				<Alert
					onClose={() => setAlert({ ...alert, open: false })}
					severity={alert.color}
					variant="filled"
					sx={{ width: "100%" }}
				>
					{alert.message}
				</Alert>
			</Snackbar>
		</Grid>
	);
}
