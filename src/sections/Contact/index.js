import { useState } from "react";
import { useFormik } from "formik";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

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
			resetForm();
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
					sx={{ my: 4, px: { xs: 2, md: 8 } }}
					container
					direction="column"
					justifyContent="space-between"
					spacing={4}
				>
					<Grid item>
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
								formik.touched.name && formik.errors.name
									? formik.errors.name
									: null
							}
						/>
					</Grid>
					<Grid item>
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
								formik.touched.email && formik.errors.email
									? formik.errors.email
									: null
							}
						/>
					</Grid>
					<Grid item>
						<TextField
							id="subject-form"
							label="Subject"
							variant="outlined"
							name="subject"
							fullWidth
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.subject}
							error={
								formik.touched.subject && formik.errors.subject ? true : false
							}
							helperText={
								formik.touched.subject && formik.errors.subject
									? formik.errors.subject
									: null
							}
						/>
					</Grid>
					<Grid item>
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
							error={
								formik.touched.message && formik.errors.message ? true : false
							}
							helperText={
								formik.touched.message && formik.errors.message
									? formik.errors.message
									: null
							}
						/>
					</Grid>
					<Grid item>
						<Button
							variant="contained"
							color="primary"
							size="large"
							type="submit"
							fullWidth
							disabled={
								(formik.errors.message &&
									formik.errors.name &&
									formik.errors.email &&
									formik.errors.subject) ||
								formik.submitting ||
								formik.values.name === "" ||
								formik.values.email === "" ||
								formik.values.subject === "" ||
								formik.values.message === ""
							}
						>
							Send
						</Button>
					</Grid>
				</Grid>

				<Grid
					xs={12}
					md={6}
					item
					sx={{
						backgroundImage: `url(${ContactImage})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						minHeight: "40rem",
					}}
				>
					Hello
				</Grid>
			</Grid>
		</Grid>
	);
}
