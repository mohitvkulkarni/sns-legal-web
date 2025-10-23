import React, { useState } from "react";
import { TEAM_MEMBERS } from "../constants";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";

const AboutPage = () => {
  const [expandedMembers, setExpandedMembers] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleExpanded = (memberName: string) => {
    setExpandedMembers((prev) => ({
      ...prev,
      [memberName]: !prev[memberName],
    }));
  };

  return (
    <Box sx={{ pt: { xs: 12, md: 14 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Meet Our Leadership
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mt: 2, maxWidth: "750px", mx: "auto" }}
          >
            A blend of deep experience, interdisciplinary knowledge, and a
            commitment to client-focused outcomes.
          </Typography>
        </Box>

        <Stack spacing={{ xs: 8, md: 12 }}>
          {TEAM_MEMBERS.map((member, index) => (
            <Grid
              container
              spacing={{ xs: 4, md: 8 }}
              key={member.name}
              direction={index % 2 === 0 ? "row" : "row-reverse"}
            >
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    src={member.imageUrl || undefined}
                    alt={member.name}
                    sx={{
                      width: 200,
                      height: 200,
                      mb: 2,
                      bgcolor: "grey.800",
                      border: "4px solid",
                      borderColor: "background.paper",
                      boxShadow: 5,
                    }}
                  >
                    {!member.imageUrl && <PersonIcon sx={{ fontSize: 100 }} />}
                  </Avatar>
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{ fontWeight: "bold" }}
                  >
                    {member.name}
                  </Typography>
                  {member.qualifications && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      {member.qualifications}
                    </Typography>
                  )}
                  <Typography variant="body1" color="secondary.main">
                    {member.title}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box>
                  {/* Show first paragraph */}
                  <Typography
                    paragraph
                    variant="body1"
                    sx={{ color: "text.secondary" }}
                  >
                    {member.bio[0]}
                  </Typography>

                  {/* Collapsible content for the rest */}
                  <Collapse
                    in={expandedMembers[member.name]}
                    timeout="auto"
                    unmountOnExit
                  >
                    {member.bio.slice(1).map((paragraph, i) => (
                      <Typography
                        key={`${member.name}-${i}`}
                        paragraph
                        variant="body1"
                        sx={{ color: "text.secondary" }}
                      >
                        {paragraph}
                      </Typography>
                    ))}
                  </Collapse>

                  {/* Show more/less button */}
                  {member.bio.length > 1 && (
                    <Button
                      onClick={() => toggleExpanded(member.name)}
                      variant="text"
                      sx={{ mt: 1 }}
                    >
                      {expandedMembers[member.name] ? "Show Less" : "Show More"}
                    </Button>
                  )}
                </Box>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </Container>

      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h6" color="text.secondary">
          Affiliations: Bar Council of India, Karnataka State Bar Council
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutPage;
