import React from "react";
import { PRACTICE_AREAS } from "../constants";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const PracticeAreasPage = () => {
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
            Our Practice Areas
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mt: 2, maxWidth: "750px", mx: "auto" }}
          >
            We provide comprehensive legal services across a wide spectrum of
            practice areas, addressing the complex needs of individuals,
            businesses, and institutions.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {PRACTICE_AREAS.map((area) => (
            <Grid item xs={12} sm={6} md={4} key={area.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-12px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    borderColor: "secondary.main",
                    "& .category-text": {
                      transform: "scale(1.05)",
                    },
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Typography
                    variant="h4"
                    component="h2"
                    className="category-text"
                    sx={{
                      color: "secondary.main",
                      mb: 2,
                      display: "block",
                      fontWeight: "bold",
                      fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                      lineHeight: 1.2,
                      transition: "transform 0.3s ease-in-out",
                    }}
                  >
                    {area.category.split(". ")[1]}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: "medium",
                      color: "text.primary",
                      mb: 2,
                      fontSize: { xs: "1.1rem", sm: "1.25rem" },
                    }}
                  >
                    {area.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.6,
                      fontSize: { xs: "0.95rem", sm: "1rem" },
                    }}
                  >
                    {area.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PracticeAreasPage;
