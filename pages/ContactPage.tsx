import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactPage = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 2, maxWidth: '750px', mx: 'auto' }}>
            Have a legal question or need to schedule a consultation? We're here to help.
          </Typography>
        </Box>

        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} md={5}>
            <Card sx={{ height: '100%', borderRadius: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" component="h3" gutterBottom>Contact Information</Typography>
                <Typography color="text.secondary" sx={{ mb: 4 }}>
                  Reach out to us through the following channels. We strive to respond to all inquiries within 24 hours.
                </Typography>
                <Box>
                  <Typography variant="button" display="block">Address</Typography>
                  <Typography color="text.secondary" paragraph>123 Legal Lane, Bangalore, Karnataka, India</Typography>
                </Box>
                <Box>
                  <Typography variant="button" display="block">Phone</Typography>
                  <Typography color="text.secondary" paragraph>+91 (123) 456-7890</Typography>
                </Box>
                <Box>
                  <Typography variant="button" display="block">Email</Typography>
                  <Typography color="text.secondary" paragraph>contact@snslegal.example.com</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={7}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" component="h3" gutterBottom>Send us a Message</Typography>
                <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField required fullWidth id="first-name" label="First Name" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField required fullWidth id="last-name" label="Last Name" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField required fullWidth id="email" label="Email Address" type="email" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth id="subject" label="Subject" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField required fullWidth multiline rows={4} id="message" label="Message" />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" size="large" fullWidth>Submit Message</Button>
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