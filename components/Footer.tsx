import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "primary.main", color: "background.paper", py: 8 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              sx={{ fontFamily: "'Inter', 'sans-serif'", lineHeight: 1.4 }}
            >
              SNS Legal
              <br />
              Advocates and Solicitors
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={5}>
              <Grid item xs={6} sm={3}>
                <Typography variant="button" display="block" gutterBottom>
                  Navigate
                </Typography>
                <Link
                  component={RouterLink}
                  to="/"
                  color="inherit"
                  sx={{
                    display: "block",
                    mb: 1,
                    textDecoration: "none",
                    "&:hover": { color: "secondary.light" },
                  }}
                >
                  Home
                </Link>
                <Link
                  component={RouterLink}
                  to="/about"
                  color="inherit"
                  sx={{
                    display: "block",
                    mb: 1,
                    textDecoration: "none",
                    "&:hover": { color: "secondary.light" },
                  }}
                >
                  About Us
                </Link>
                <Link
                  component={RouterLink}
                  to="/practice-areas"
                  color="inherit"
                  sx={{
                    display: "block",
                    mb: 1,
                    textDecoration: "none",
                    "&:hover": { color: "secondary.light" },
                  }}
                >
                  Practice Areas
                </Link>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="button" display="block" gutterBottom>
                  Resources
                </Typography>
                <Link
                  component={RouterLink}
                  to="/blog"
                  color="inherit"
                  sx={{
                    display: "block",
                    mb: 1,
                    textDecoration: "none",
                    "&:hover": { color: "secondary.light" },
                  }}
                >
                  Blog
                </Link>
                <Link
                  component={RouterLink}
                  to="/contact"
                  color="inherit"
                  sx={{
                    display: "block",
                    mb: 1,
                    textDecoration: "none",
                    "&:hover": { color: "secondary.light" },
                  }}
                >
                  Contact
                </Link>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="button" display="block" gutterBottom>
                  Legal
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mb: 1, color: "rgba(255,255,255,0.5)" }}
                >
                  Disclaimer
                </Typography>
                <Link
                  component={RouterLink}
                  to="/terms"
                  color="inherit"
                  sx={{
                    display: "block",
                    mb: 1,
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.7)",
                    "&:hover": { color: "secondary.light" },
                  }}
                >
                  Terms of Use
                </Link>
                <Link
                  component={RouterLink}
                  to="/privacy"
                  color="inherit"
                  sx={{
                    display: "block",
                    mb: 1,
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.7)",
                    "&:hover": { color: "secondary.light" },
                  }}
                >
                  Privacy Policy
                </Link>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="button" display="block" gutterBottom>
                  Connect
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mb: 1, color: "rgba(255,255,255,0.5)" }}
                >
                  LinkedIn
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mb: 1, color: "rgba(255,255,255,0.5)" }}
                >
                  Twitter
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 6,
            borderTop: 1,
            borderColor: "rgba(255,255,255,0.2)",
            pt: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)" }}>
            &copy; {new Date().getFullYear()} SNS Legal. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
