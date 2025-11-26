import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  Stack,
  Collapse,
  useTheme,
} from "@mui/material";
import {
  Security,
  AccountBalance,
  TrendingUp,
  Psychology,
  ArrowForward,
} from "@mui/icons-material";
import Carousel from "../components/Carousel";
import { PRACTICE_AREAS } from "../constants";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
};

const HomePage: React.FC = () => {
  const theme = useTheme();
  const [isIntroExpanded, setIntroExpanded] = useState(false);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -60]);

  // Intersection observers for animations
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [featuresRef, featuresInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [aboutRef, aboutInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [practiceRef, practiceInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: <AccountBalance />,
      title: "Expert Legal Counsel",
      description:
        "Comprehensive legal guidance across multiple practice areas with deep domain expertise.",
    },
    {
      icon: <Psychology />,
      title: "Strategic Thinking",
      description:
        "Forward-thinking approach that combines legal expertise with business acumen.",
    },
    {
      icon: <Security />,
      title: "Confidential & Secure",
      description:
        "Maintaining the highest standards of client confidentiality and data security.",
    },
    {
      icon: <TrendingUp />,
      title: "Growth-Oriented",
      description:
        "Solutions designed to support your long-term success and organizational growth.",
    },
  ];

  const stats = [
    { number: "45+", label: "Years Experience" },
    { number: "400+", label: "Cases Handled" },
    { number: "9", label: "Practice Areas" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <Box sx={{ overflow: "hidden" }}>
      {/* Hero Section */}
      <Box
        ref={heroRef}
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
          pt: { xs: 12, md: 14 },
          pb: { xs: 8, md: 12 },
          px: { xs: 2, md: 0 },
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 20% 30%, rgba(30, 58, 95, 0.03) 0%, transparent 50%),
                         radial-gradient(circle at 80% 70%, rgba(58, 124, 165, 0.03) 0%, transparent 50%)`,
            pointerEvents: "none",
          },
          "&::after": {
            content: '"SNS"',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: { xs: "15rem", sm: "20rem", md: "25rem", lg: "30rem" },
            fontWeight: 900,
            color: "rgba(30, 58, 95, 0.04)",
            letterSpacing: "-0.05em",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
          },

          "& .decorative-line-1": {
            position: "absolute",
            top: "20%",
            left: "0",
            width: "150px",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(30, 58, 95, 0.15) 100%)",
            pointerEvents: "none",
          },
          "& .decorative-line-2": {
            position: "absolute",
            bottom: "25%",
            right: "0",
            width: "200px",
            height: "2px",
            background:
              "linear-gradient(90deg, rgba(58, 124, 165, 0.15) 0%, transparent 100%)",
            pointerEvents: "none",
          },
        }}
      >
        {/* Decorative Elements */}
        <Box className="decorative-circle-1" />
        <Box className="decorative-circle-2" />
        <Box className="decorative-line-1" />
        <Box className="decorative-line-2" />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <motion.div
            style={{ y: heroY }}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            variants={staggerContainer}
          >
            <Box sx={{ textAlign: "center", maxWidth: "1000px", mx: "auto" }}>
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    mb: 3,
                    color: theme.palette.primary.main,
                    letterSpacing: "-0.03em",
                    fontWeight: 800,
                    fontSize: {
                      xs: "2.8rem",
                      sm: "3.5rem",
                      md: "4.5rem",
                      lg: "5rem",
                    },
                    lineHeight: 1.1,
                  }}
                >
                  SNS Legal
                </Typography>
                <Typography
                  variant="h4"
                  component="div"
                  sx={{
                    mb: 5,
                    color: theme.palette.secondary.main,
                    letterSpacing: "0.05em",
                    fontWeight: 600,
                    fontSize: {
                      xs: "1.25rem",
                      sm: "1.5rem",
                      md: "1.75rem",
                    },
                    textTransform: "uppercase",
                  }}
                >
                  Advocates & Solicitors
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 6,
                    lineHeight: 1.7,
                    fontWeight: 400,
                    fontSize: { xs: "1.15rem", sm: "1.3rem", md: "1.4rem" },
                    color: theme.palette.text.secondary,
                    maxWidth: "800px",
                    mx: "auto",
                  }}
                >
                  We navigate the law, so you can focus on growth. Reliable
                  support when it matters most.
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Grid
                    container
                    spacing={3}
                    sx={{
                      maxWidth: "900px",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    {stats.map((stat, index) => (
                      <Grid item xs={6} sm={6} md={3} key={index}>
                        <Box
                          sx={{
                            textAlign: "center",
                            p: 4,
                            borderRadius: 3,
                            background: "#ffffff",
                            border: "1px solid #e0e0e0",
                            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.06)",
                            transition: "all 0.3s ease",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            minHeight: { xs: "140px", sm: "160px" },
                            "&:hover": {
                              transform: "translateY(-4px)",
                              boxShadow: "0px 6px 20px rgba(30, 58, 95, 0.15)",
                              borderColor: theme.palette.primary.main,
                            },
                          }}
                        >
                          <Typography
                            variant="h3"
                            component="div"
                            sx={{
                              fontWeight: 700,
                              color: theme.palette.primary.main,
                              mb: 1,
                              fontSize: { xs: "2.5rem", md: "3rem" },
                            }}
                          >
                            {stat.number}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: theme.palette.text.secondary,
                              fontSize: { xs: "0.9rem", md: "1rem" },
                              fontWeight: 500,
                            }}
                          >
                            {stat.label}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Decorative Divider */}
      <Box
        sx={{
          height: "2px",
          background:
            "linear-gradient(90deg, transparent 0%, #1e3a5f 50%, transparent 100%)",
          opacity: 0.3,
        }}
      />

      {/* About Section */}
      <Box
        ref={aboutRef}
        component="section"
        sx={{
          py: { xs: 10, md: 14 },
          background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
          px: { xs: 2, md: 0 },
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(30, 58, 95, 0.03) 0%, transparent 70%)",
            pointerEvents: "none",
          },
          "& .about-decorative-square": {
            position: "absolute",
            bottom: "10%",
            left: "5%",
            width: "150px",
            height: "150px",
            border: "2px solid rgba(58, 124, 165, 0.1)",
            transform: "rotate(45deg)",
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="initial"
            animate={aboutInView ? "animate" : "initial"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h2"
                component="h2"
                align="center"
                sx={{
                  mb: { xs: 4, md: 6 },
                  fontSize: { xs: "2rem", md: "clamp(2rem, 6vw, 3.5rem)" },
                }}
              >
                SNS Legal
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Box
                sx={{
                  maxWidth: "900px",
                  mx: "auto",
                  textAlign: "left",
                }}
              >
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: { xs: "1.05rem", md: "1.15rem" },
                    mb: 4,
                    px: { xs: 1, md: 0 },
                    lineHeight: 1.8,
                  }}
                >
                  SNS Legal is a contemporary law firm based in Bangalore,
                  committed to delivering high-quality legal services across a
                  wide spectrum of practice areas. With a clear understanding of
                  the evolving legal, commercial, and technological landscape,
                  the firm integrates traditional legal knowledge with a modern,
                  research-driven approach.
                </Typography>

                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: { xs: "1.05rem", md: "1.15rem" },
                    mb: 4,
                    px: { xs: 1, md: 0 },
                    lineHeight: 1.8,
                  }}
                >
                  Our team is composed of legal professionals from
                  interdisciplinary backgrounds, including law, technology,
                  business, and public policy. With a combined experience of
                  over four decades, we bring a balanced mix of expertise,
                  strategic thinking, and adaptability.
                </Typography>
              </Box>
            </motion.div>

            <Collapse in={isIntroExpanded} timeout="auto" unmountOnExit>
              <motion.div variants={fadeInUp}>
                <Box
                  sx={{
                    maxWidth: "900px",
                    mx: "auto",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      fontSize: { xs: "1rem", md: "1.125rem" },
                      mb: 3,
                      px: { xs: 1, md: 0 },
                    }}
                  >
                    At SNS Legal, we offer legal services in civil and criminal
                    litigation, corporate and commercial law, data privacy and
                    compliance advisory, real estate and property matters,
                    family and matrimonial disputes, white-collar crime,
                    employment and labour law, startup and investment advisory,
                    intellectual property rights, data privacy and technology
                    law, cybercrime, consumer protection, and alternative
                    dispute resolution (ADR). We also remain actively engaged in
                    emerging sectors such as fintech, ESG compliance, digital
                    assets, artificial intelligence law, and cross-border
                    regulatory frameworks.
                  </Typography>

                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      fontSize: { xs: "1rem", md: "1.125rem" },
                      mb: 3,
                      px: { xs: 1, md: 0 },
                    }}
                  >
                    While the scope of our work is broad, our approach remains
                    focused and client-conscious. We understand that behind
                    every legal matter lies a unique concern—whether personal,
                    financial, or reputational. As a result, we approach each
                    case with a commitment to clarity, confidentiality, and
                    care, taking the time to understand the context as
                    thoroughly as we analyse the law.
                  </Typography>

                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      fontSize: { xs: "1rem", md: "1.125rem" },
                      mb: 3,
                      px: { xs: 1, md: 0 },
                    }}
                  >
                    Being a boutique practice allows us to remain agile and
                    attentive. We are selective in our engagements, allowing us
                    to deliver detailed, customised legal solutions rather than
                    adopting a one-size-fits-all approach. Whether it is guiding
                    a founder through the complexities of structuring an
                    early-stage company, supporting an individual during a
                    difficult family dispute, or advising a business on
                    regulatory compliance, we approach each matter with
                    professionalism and purpose.
                  </Typography>

                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      fontSize: { xs: "1rem", md: "1.125rem" },
                      mb: 3,
                      px: { xs: 1, md: 0 },
                    }}
                  >
                    Our firm's ethos is shaped not only by legal competence but
                    by our ongoing effort to stay relevant and responsible in a
                    changing world. Legal practice today requires more than just
                    knowledge of statutes and precedents—it demands awareness of
                    business realities, technological disruptions, and
                    socio-economic change. At SNS Legal, we actively engage in
                    continuing education, sectoral research, and policy
                    awareness to ensure that our advice remains practical,
                    contemporary, and effective.
                  </Typography>

                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      fontSize: { xs: "1rem", md: "1.125rem" },
                      mb: 4,
                      px: { xs: 1, md: 0 },
                    }}
                  >
                    We believe that strong legal counsel is not just about
                    representation—it is about informed guidance, strategic
                    foresight, and trusted partnership. Through a combination of
                    legal rigour and human understanding, SNS Legal remains
                    committed to upholding the integrity of the law while
                    assisting those who turn to it for resolution, direction, or
                    support.
                  </Typography>
                </Box>
              </motion.div>
            </Collapse>

            <motion.div variants={fadeInUp}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent="center"
                sx={{ px: { xs: 1, md: 0 } }}
              >
                <Button
                  variant="outlined"
                  onClick={() => setIntroExpanded(!isIntroExpanded)}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    width: { xs: "100%", sm: "auto" },
                    maxWidth: { xs: "280px", sm: "none" },
                    mx: { xs: "auto", sm: 0 },
                    borderColor: theme.palette.secondary.main,
                    color: theme.palette.primary.main,
                    borderWidth: "2px",
                    "&:hover": {
                      backgroundColor: theme.palette.secondary.light,
                      borderWidth: "2px",
                    },
                  }}
                >
                  {isIntroExpanded ? "Show Less" : "Know More"}
                </Button>
                <Button
                  variant="contained"
                  component={RouterLink}
                  to="/contact"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    width: { xs: "100%", sm: "auto" },
                    maxWidth: { xs: "280px", sm: "none" },
                    mx: { xs: "auto", sm: 0 },
                    bgcolor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    "&:hover": {
                      bgcolor: theme.palette.primary.light,
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Stack>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* Decorative Divider */}
      <Box
        sx={{
          height: "2px",
          background:
            "linear-gradient(90deg, transparent 0%, #3a7ca5 50%, transparent 100%)",
          opacity: 0.3,
        }}
      />

      {/* Practice Areas Section */}
      <Box
        ref={practiceRef}
        component="section"
        sx={{
          py: { xs: 10, md: 14 },
          background: "linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)",
          px: { xs: 2, md: 0 },
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="initial"
            animate={practiceInView ? "animate" : "initial"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h2"
                component="h2"
                align="center"
                sx={{
                  mb: 2,
                  fontSize: { xs: "2rem", md: "clamp(2rem, 6vw, 3.5rem)" },
                }}
              >
                Our Expertise
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="text.secondary"
                sx={{
                  mb: { xs: 6, md: 8 },
                  maxWidth: "700px",
                  mx: "auto",
                  px: { xs: 2, md: 0 },
                  fontSize: { xs: "1rem", md: "1.25rem" },
                }}
              >
                Dedicated counsel across a spectrum of legal domains, tailored
                to your unique needs.
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Carousel items={PRACTICE_AREAS} />
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* Features Section */}
      <Box
        ref={featuresRef}
        component="section"
        sx={{
          py: { xs: 10, md: 14 },
          bgcolor: "background.paper",
          px: { xs: 2, md: 0 },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(30, 58, 95, 0.03) 35px,
              rgba(30, 58, 95, 0.03) 70px
            )`,
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="initial"
            animate={featuresInView ? "animate" : "initial"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h2"
                component="h2"
                align="center"
                sx={{
                  mb: 2,
                  fontSize: { xs: "2rem", md: "clamp(2rem, 6vw, 3.5rem)" },
                }}
              >
                Why Choose SNS Legal
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="text.secondary"
                sx={{
                  mb: { xs: 6, md: 8 },
                  maxWidth: "600px",
                  mx: "auto",
                  px: { xs: 2, md: 0 },
                  fontSize: { xs: "1rem", md: "1.25rem" },
                }}
              >
                We combine legal expertise with innovative thinking to deliver
                exceptional results for our clients.
              </Typography>
            </motion.div>

            <Grid container spacing={{ xs: 3, md: 5 }}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <motion.div variants={fadeInUp}>
                    <Card
                      sx={{
                        height: "100%",
                        p: { xs: 4, md: 5 },
                        textAlign: "center",
                        border: "1px solid",
                        borderColor: theme.palette.divider,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                        "&:hover": {
                          "& .feature-icon": {
                            color: theme.palette.secondary.main,
                            transform: "scale(1.1)",
                          },
                        },
                      }}
                    >
                      <Box
                        className="feature-icon"
                        sx={{
                          fontSize: { xs: 64, md: 72 },
                          color: theme.palette.primary.main,
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: "1.35rem", md: "1.5rem" },
                          color: theme.palette.text.primary,
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: "1rem", md: "1.05rem" },
                          lineHeight: 1.7,
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 14 },
          background: "linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)",
          position: "relative",
          px: { xs: 2, md: 0 },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 20% 50%, rgba(30, 58, 95, 0.05) 0%, transparent 50%),
                         radial-gradient(circle at 80% 50%, rgba(58, 124, 165, 0.05) 0%, transparent 50%)`,
            pointerEvents: "none",
          },
          "& .cta-decorative-line": {
            position: "absolute",
            top: "30%",
            left: "0",
            width: "250px",
            height: "3px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(58, 124, 165, 0.2) 100%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box
            sx={{
              textAlign: "center",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                mb: 3,
                color: "#1a1a1a",
                fontSize: { xs: "2rem", md: "clamp(2rem, 4vw, 2.8rem)" },
                fontWeight: 700,
              }}
            >
              Ready to Get Started?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#666666",
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                mb: 5,
                px: { xs: 2, md: 0 },
                lineHeight: 1.6,
              }}
            >
              Let's discuss how we can help you navigate your legal challenges
              with confidence and clarity.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              justifyContent="center"
              sx={{ px: { xs: 2, md: 0 } }}
            >
              <Button
                variant="contained"
                size="large"
                component={RouterLink}
                to="/contact"
                sx={{
                  py: 2.5,
                  px: 6,
                  fontSize: { xs: "1.1rem", md: "1.15rem" },
                  borderRadius: 8,
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  fontWeight: 700,
                  width: { xs: "100%", sm: "auto" },
                  maxWidth: { xs: "320px", sm: "none" },
                  boxShadow: "0px 8px 25px rgba(45, 45, 61, 0.4)",
                  "&:hover": {
                    bgcolor: theme.palette.primary.light,
                    boxShadow: "0px 12px 35px rgba(45, 45, 61, 0.6)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={RouterLink}
                to="/about"
                sx={{
                  py: 2.5,
                  px: 6,
                  fontSize: { xs: "1.1rem", md: "1.15rem" },
                  borderRadius: 8,
                  borderColor: theme.palette.secondary.main,
                  color: theme.palette.secondary.main,
                  borderWidth: "2px",
                  fontWeight: 600,
                  width: { xs: "100%", sm: "auto" },
                  maxWidth: { xs: "320px", sm: "none" },
                  "&:hover": {
                    backgroundColor: "rgba(58, 124, 165, 0.08)",
                    borderColor: theme.palette.secondary.dark,
                    borderWidth: "2px",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                Learn More
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
