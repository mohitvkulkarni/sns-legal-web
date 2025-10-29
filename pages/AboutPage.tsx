import { useState } from "react";
import { TEAM_MEMBERS } from "../constants";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
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
    <Box sx={{ overflow: "hidden" }}>
      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 14, md: 16 },
          pb: { xs: 4, md: 6 },
          background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 30% 50%, rgba(30, 58, 95, 0.03) 0%, transparent 50%)`,
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Box sx={{ textAlign: "center", maxWidth: "800px", mx: "auto" }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                mb: 3,
                fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                fontWeight: 800,
                color: "primary.main",
              }}
            >
              Meet Our Leadership
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                lineHeight: 1.7,
                fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.3rem" },
              }}
            >
              A blend of deep experience, interdisciplinary knowledge, and a
              commitment to client-focused outcomes.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Team Members Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "#fafafa" }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Grid container spacing={{ xs: 4, md: 6 }}>
            {TEAM_MEMBERS.map((member) => (
              <Grid item xs={12} key={member.name}>
                <Box
                  sx={{
                    bgcolor: "#ffffff",
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.08)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0px 6px 24px rgba(30, 58, 95, 0.12)",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Grid container>
                    <Grid item xs={12} md={4}>
                      <Box
                        sx={{
                          p: { xs: 3, md: 4 },
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                          bgcolor: "rgba(30, 58, 95, 0.02)",
                        }}
                      >
                        <Avatar
                          src={member.imageUrl || undefined}
                          alt={member.name}
                          sx={{
                            width: { xs: 160, md: 180 },
                            height: { xs: 160, md: 180 },
                            mb: 3,
                            bgcolor: "primary.main",
                            border: "4px solid",
                            borderColor: "#ffffff",
                            boxShadow: "0px 4px 16px rgba(30, 58, 95, 0.15)",
                          }}
                        >
                          {!member.imageUrl && (
                            <PersonIcon sx={{ fontSize: 80 }} />
                          )}
                        </Avatar>
                        <Typography
                          variant="h4"
                          component="h2"
                          sx={{
                            fontWeight: 700,
                            mb: 1,
                            textAlign: "center",
                            color: "primary.main",
                          }}
                        >
                          {member.name}
                        </Typography>
                        {member.qualifications && (
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              mb: 1,
                              textAlign: "center",
                              fontSize: "0.9rem",
                            }}
                          >
                            {member.qualifications}
                          </Typography>
                        )}
                        <Typography
                          variant="h6"
                          sx={{
                            color: "secondary.main",
                            textAlign: "center",
                            fontWeight: 600,
                          }}
                        >
                          {member.title}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Box sx={{ p: { xs: 3, md: 4 } }}>
                        <Typography
                          paragraph
                          variant="body1"
                          sx={{
                            color: "text.secondary",
                            lineHeight: 1.8,
                            fontSize: "1.05rem",
                          }}
                        >
                          {member.bio[0]}
                        </Typography>

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
                              sx={{
                                color: "text.secondary",
                                lineHeight: 1.8,
                                fontSize: "1.05rem",
                              }}
                            >
                              {paragraph}
                            </Typography>
                          ))}
                        </Collapse>

                        {member.bio.length > 1 && (
                          <Button
                            onClick={() => toggleExpanded(member.name)}
                            variant="outlined"
                            sx={{ mt: 2 }}
                          >
                            {expandedMembers[member.name]
                              ? "Show Less"
                              : "Read More"}
                          </Button>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Affiliations Section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          bgcolor: "#ffffff",
          borderTop: "1px solid #e0e0e0",
        }}
      ></Box>
    </Box>
  );
};

export default AboutPage;
