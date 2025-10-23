import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { submitContactForm, ContactFormData } from "../services/contactService";

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Partial<ContactFormData>>({});

  const validateForm = (): boolean => {
    const errors: Partial<ContactFormData> = {};

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (formErrors[name as keyof ContactFormData]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await submitContactForm(formData);

      if (response.success) {
        setSubmitStatus({
          type: "success",
          message: response.message,
        });
        // Reset form on success
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: response.message,
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        pt: { xs: 12, md: 14 },
        pb: { xs: 8, md: 12 },
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Get in Touch
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mt: 2, maxWidth: "750px", mx: "auto" }}
          >
            Have a legal question or need to schedule a consultation? We're here
            to help.
          </Typography>
        </Box>

        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} md={5}>
            <Card sx={{ height: "100%", borderRadius: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  Contact Information
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 4 }}>
                  Reach out to us through the following channels. We strive to
                  respond to all inquiries within 24 hours.
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="button" display="block">
                    Address
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    No 386, 1st A Cross, OMBR Layout, near CMR Law College,
                    Bangalore 560043
                  </Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="button" display="block">
                    Phone
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    +91 9663038407
                  </Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="button" display="block">
                    Email
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    contact@snslegalcounsellors.com
                  </Typography>
                </Box>
                <Box sx={{ mt: 4 }}>
                  <Typography
                    variant="h6"
                    component="h4"
                    gutterBottom
                    sx={{ color: "primary.main" }}
                  >
                    Our Experience
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    15+ years of combined experience
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    100+ cases handled
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={7}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  Send us a Message
                </Typography>

                {submitStatus.type && (
                  <Alert
                    severity={submitStatus.type}
                    sx={{ mb: 3 }}
                    onClose={() => setSubmitStatus({ type: null, message: "" })}
                  >
                    {submitStatus.message}
                  </Alert>
                )}

                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  autoComplete="off"
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="first_name"
                        name="first_name"
                        label="First Name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                        error={!!formErrors.first_name}
                        helperText={formErrors.first_name}
                        disabled={isSubmitting}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="last_name"
                        name="last_name"
                        label="Last Name"
                        value={formData.last_name}
                        onChange={handleInputChange}
                        error={!!formErrors.last_name}
                        helperText={formErrors.last_name}
                        disabled={isSubmitting}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        name="email"
                        label="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        error={!!formErrors.email}
                        helperText={formErrors.email}
                        disabled={isSubmitting}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="subject"
                        name="subject"
                        label="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        multiline
                        rows={4}
                        id="message"
                        name="message"
                        label="Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        error={!!formErrors.message}
                        helperText={formErrors.message}
                        disabled={isSubmitting}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        disabled={isSubmitting}
                        sx={{ position: "relative" }}
                      >
                        {isSubmitting ? (
                          <>
                            <CircularProgress size={20} sx={{ mr: 1 }} />
                            Sending...
                          </>
                        ) : (
                          "Submit Message"
                        )}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;
