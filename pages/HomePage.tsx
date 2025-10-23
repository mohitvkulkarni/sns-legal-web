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
    { number: "15+", label: "Years Experience" },
    { number: "100+", label: "Cases Handled" },
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
          background:
            "linear-gradient(180deg, #0f1419 0%, #1a1f26 50%, #0f1419 100%)",
          pt: { xs: 12, md: 14 },
          pb: { xs: 8, md: 0 },
          px: { xs: 2, md: 0 },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 10% 20%, rgba(201, 169, 97, 0.08) 0%, transparent 40%),
                         radial-gradient(circle at 90% 80%, rgba(122, 156, 198, 0.08) 0%, transparent 40%)`,
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <motion.div
            style={{ y: heroY }}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            variants={staggerContainer}
          >
            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div variants={fadeInUp}>
                  <Box>
                    <Typography
                      variant="h1"
                      component="h1"
                      sx={{
                        mb: { xs: 1, md: 1 },
                        color: theme.palette.primary.main,
                        letterSpacing: "-0.03em",
                        fontWeight: 800,
                        textAlign: { xs: "center", md: "left" },
                        fontSize: {
                          xs: "2.5rem",
                          sm: "3rem",
                          md: "clamp(2.8rem, 5vw, 4rem)",
                        },
                        lineHeight: { xs: 1.15, md: 1.1 },
                      }}
                    >
                      SNS Legal
                    </Typography>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        mb: { xs: 4, md: 4 },
                        color: theme.palette.text.secondary,
                        letterSpacing: "0.02em",
                        fontWeight: 500,
                        textAlign: { xs: "center", md: "left" },
                        fontSize: {
                          xs: "1.1rem",
                          sm: "1.25rem",
                          md: "1.5rem",
                        },
                      }}
                    >
                      Advocates and Solicitors
                    </Typography>
                  </Box>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="h5"
                    color={theme.palette.text.secondary}
                    sx={{
                      mb: { xs: 5, md: 5 },
                      lineHeight: { xs: 1.6, md: 1.7 },
                      fontWeight: 400,
                      textAlign: { xs: "center", md: "left" },
                      fontSize: { xs: "1.2rem", sm: "1.35rem", md: "1.4rem" },
                      px: { xs: 1, md: 0 },
                    }}
                  >
                    We navigate the law, so you can focus on growth. Reliable
                    support when it matters most.
                  </Typography>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 3, sm: 3 }}
                    sx={{
                      mb: { xs: 6, md: 8 },
                      alignItems: { xs: "center", sm: "flex-start" },
                      px: { xs: 1, md: 0 },
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      component={RouterLink}
                      to="/contact"
                      endIcon={<ArrowForward />}
                      sx={{
                        py: { xs: 2.5, md: 2.5 },
                        px: { xs: 5, md: 5 },
                        fontSize: { xs: "1.1rem", md: "1.15rem" },
                        borderRadius: 8,
                        bgcolor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        fontWeight: 600,
                        width: { xs: "100%", sm: "auto" },
                        maxWidth: { xs: "320px", sm: "none" },
                        boxShadow: "0px 8px 25px rgba(155, 135, 196, 0.3)",
                        "&:hover": {
                          bgcolor: theme.palette.primary.light,
                          boxShadow: "0px 12px 35px rgba(155, 135, 196, 0.4)",
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      Get Legal Consultation
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      component={RouterLink}
                      to="/about"
                      sx={{
                        py: { xs: 2.5, md: 2.5 },
                        px: { xs: 5, md: 5 },
                        fontSize: { xs: "1.1rem", md: "1.15rem" },
                        borderRadius: 8,
                        color: theme.palette.secondary.main,
                        borderColor: theme.palette.secondary.main,
                        borderWidth: "2px",
                        fontWeight: 600,
                        width: { xs: "100%", sm: "auto" },
                        maxWidth: { xs: "320px", sm: "none" },
                        "&:hover": {
                          backgroundColor: "rgba(244, 166, 184, 0.1)",
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
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: { xs: 3, md: 4 },
                      justifyContent: { xs: "center", md: "flex-start" },
                      px: { xs: 1, md: 0 },
                    }}
                  >
                    {stats.map((stat, index) => (
                      <Box
                        key={index}
                        sx={{
                          textAlign: { xs: "center", md: "left" },
                          minWidth: { xs: "140px", md: "160px" },
                          p: 3,
                          borderRadius: 4,
                          background: "rgba(26, 31, 38, 0.8)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(201, 169, 97, 0.2)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-4px)",
                            boxShadow: "0px 8px 24px rgba(201, 169, 97, 0.2)",
                          },
                        }}
                      >
                        <Box>
                          <Typography
                            variant="h4"
                            component="div"
                            sx={{
                              fontWeight: 700,
                              color: theme.palette.primary.main,
                              mb: 0.5,
                              fontSize: { xs: "2rem", md: "2.5rem" },
                            }}
                          >
                            {stat.number}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.text.secondary,
                              fontSize: { xs: "0.9rem", md: "1rem" },
                              fontWeight: 500,
                            }}
                          >
                            {stat.label}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.div variants={scaleIn}>
                  <Box
                    sx={{
                      position: "relative",
                      height: { xs: 280, sm: 350, md: 450 },
                      background: `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 100%)`,
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0px 20px 60px rgba(244, 166, 184, 0.25)",
                      overflow: "hidden",
                      mt: { xs: 4, md: 0 },
                      mx: { xs: 1, md: 0 },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        zIndex: 2,
                        textAlign: "center",
                        p: { xs: 4, md: 5 },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="/logo.png"
                        alt="SNS Legal Logo"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          width: "auto",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
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
              rgba(201, 169, 97, 0.02) 35px,
              rgba(201, 169, 97, 0.02) 70px
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

      {/* Decorative Divider */}
      <Box
        sx={{
          height: "2px",
          background:
            "linear-gradient(90deg, transparent 0%, #c9a961 50%, transparent 100%)",
          opacity: 0.3,
        }}
      />

      {/* About Section */}
      <Box
        ref={aboutRef}
        component="section"
        sx={{
          py: { xs: 10, md: 14 },
          background: "linear-gradient(135deg, #1a1f26 0%, #0f1419 100%)",
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
              "radial-gradient(circle, rgba(201, 169, 97, 0.05) 0%, transparent 70%)",
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
                About SNS Legal
              </Typography>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Box
                sx={{
                  maxWidth: "900px",
                  mx: "auto",
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
                  over a decade, we bring a balanced mix of expertise, strategic
                  thinking, and adaptability.
                </Typography>
              </Box>
            </motion.div>

            <Collapse in={isIntroExpanded} timeout="auto" unmountOnExit>
              <motion.div variants={fadeInUp}>
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
                  litigation, corporate and commercial law, real estate and
                  property matters, family and matrimonial disputes,
                  white-collar crime, employment and labour law, startup and
                  investment advisory, intellectual property rights, data
                  privacy and technology law, cybercrime, consumer protection,
                  and alternative dispute resolution (ADR). We also remain
                  actively engaged in emerging sectors such as fintech, ESG
                  compliance, digital assets, artificial intelligence law, and
                  cross-border regulatory frameworks.
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
                  focused and client-conscious. We understand that behind every
                  legal matter lies a unique concern—whether personal,
                  financial, or reputational. As a result, we approach each case
                  with a commitment to clarity, confidentiality, and care,
                  taking the time to understand the context as thoroughly as we
                  analyse the law.
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
                  attentive. We are selective in our engagements, allowing us to
                  deliver detailed, customised legal solutions rather than
                  adopting a one-size-fits-all approach. Whether it is guiding a
                  founder through the complexities of structuring an early-stage
                  company, supporting an individual during a difficult family
                  dispute, or advising a business on regulatory compliance, we
                  approach each matter with professionalism and purpose.
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
                  Our firm's ethos is shaped not only by legal competence but by
                  our ongoing effort to stay relevant and responsible in a
                  changing world. Legal practice today requires more than just
                  knowledge of statutes and precedents—it demands awareness of
                  business realities, technological disruptions, and
                  socio-economic change. At SNS Legal, we actively engage in
                  continuing education, sectoral research, and policy awareness
                  to ensure that our advice remains practical, contemporary, and
                  effective.
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
            "linear-gradient(90deg, transparent 0%, #7a9cc6 50%, transparent 100%)",
          opacity: 0.3,
        }}
      />

      {/* Practice Areas Section */}
      <Box
        ref={practiceRef}
        component="section"
        sx={{
          py: { xs: 10, md: 14 },
          background: "linear-gradient(180deg, #0f1419 0%, #1a1f26 100%)",
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

      {/* CTA Section */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 14 },
          background: "linear-gradient(135deg, #1a1f26 0%, #2d3339 100%)",
          position: "relative",
          overflow: "hidden",
          px: { xs: 2, md: 0 },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 20% 50%, rgba(201, 169, 97, 0.1) 0%, transparent 50%),
                         radial-gradient(circle at 80% 50%, rgba(122, 156, 198, 0.1) 0%, transparent 50%)`,
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
                color: "#e8e8e8",
                fontSize: { xs: "2rem", md: "clamp(2rem, 4vw, 2.8rem)" },
                fontWeight: 700,
              }}
            >
              Ready to Get Started?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#a0a0a0",
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
                  borderColor: "white",
                  color: "white",
                  borderWidth: "2px",
                  fontWeight: 600,
                  width: { xs: "100%", sm: "auto" },
                  maxWidth: { xs: "320px", sm: "none" },
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "white",
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
