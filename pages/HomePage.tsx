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
          background: theme.palette.background.default,
          pt: { xs: 12, md: 14 },
          pb: { xs: 8, md: 0 },
          px: { xs: 2, md: 0 },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <motion.div
            style={{ y: heroY }}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            variants={staggerContainer}
          >
            <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
              <Grid item xs={12} md={7}>
                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                      mb: { xs: 3, md: 3 },
                      color: theme.palette.primary.main,
                      letterSpacing: "-0.03em",
                      fontWeight: 800,
                      textAlign: { xs: "center", md: "left" },
                      fontSize: {
                        xs: "2.2rem",
                        sm: "2.8rem",
                        md: "clamp(2.5rem, 5vw, 3.5rem)",
                      },
                      lineHeight: { xs: 1.2, md: 1.1 },
                    }}
                  >
                    Integrating Law with Innovation
                  </Typography>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="h5"
                    color={theme.palette.text.secondary}
                    sx={{
                      mb: { xs: 4, md: 4 },
                      lineHeight: { xs: 1.5, md: 1.6 },
                      fontWeight: 400,
                      textAlign: { xs: "center", md: "left" },
                      fontSize: { xs: "1.15rem", sm: "1.3rem", md: "1.5rem" },
                      px: { xs: 1, md: 0 },
                    }}
                  >
                    Bridging tradition and transformation in legal practice to
                    provide clarity in a complex world.
                  </Typography>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 2, sm: 2 }}
                    sx={{
                      mb: { xs: 5, md: 6 },
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
                        py: { xs: 2, md: 2 },
                        px: { xs: 4, md: 4 },
                        fontSize: { xs: "1.05rem", md: "1.1rem" },
                        borderRadius: 3,
                        bgcolor: theme.palette.primary.main,
                        color: "#fff",
                        fontWeight: 700,
                        width: { xs: "100%", sm: "auto" },
                        maxWidth: { xs: "300px", sm: "none" },
                        boxShadow: "0px 8px 25px rgba(34, 48, 74, 0.3)",
                        "&:hover": {
                          bgcolor: theme.palette.primary.light,
                          boxShadow: "0px 12px 35px rgba(34, 48, 74, 0.4)",
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
                        py: { xs: 2, md: 2 },
                        px: { xs: 4, md: 4 },
                        fontSize: { xs: "1.05rem", md: "1.1rem" },
                        borderRadius: 3,
                        color: theme.palette.primary.main,
                        borderColor: theme.palette.secondary.main,
                        borderWidth: "2px",
                        fontWeight: 700,
                        width: { xs: "100%", sm: "auto" },
                        maxWidth: { xs: "300px", sm: "none" },
                        "&:hover": {
                          backgroundColor: theme.palette.secondary.light,
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
                  <Grid
                    container
                    spacing={{ xs: 3, md: 4 }}
                    sx={{ px: { xs: 1, md: 0 } }}
                  >
                    {stats.map((stat, index) => (
                      <Grid item xs={6} sm={3} key={index}>
                        <Box textAlign="center">
                          <Typography
                            variant="h4"
                            component="div"
                            sx={{
                              fontWeight: 700,
                              color: theme.palette.secondary.main,
                              mb: 1,
                              fontSize: { xs: "1.8rem", md: "2.125rem" },
                            }}
                          >
                            {stat.number}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.text.secondary,
                              opacity: 0.85,
                              fontSize: { xs: "0.875rem", md: "1rem" },
                            }}
                          >
                            {stat.label}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={5}>
                <motion.div variants={scaleIn}>
                  <Box
                    sx={{
                      position: "relative",
                      height: { xs: 240, sm: 300, md: 400 },
                      background: theme.palette.secondary.main,
                      borderRadius: 4,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0px 24px 80px rgba(34, 48, 74, 0.12)",
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
                        p: { xs: 3, md: 4 },
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
          py: { xs: 8, md: 12 },
          bgcolor: "background.paper",
          px: { xs: 2, md: 0 },
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

            <Grid container spacing={{ xs: 3, md: 4 }}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div variants={fadeInUp}>
                    <Card
                      sx={{
                        height: "100%",
                        p: { xs: 2.5, md: 3 },
                        textAlign: "center",
                        border: "1px solid",
                        borderColor: "rgba(0, 0, 0, 0.05)",
                        "&:hover": {
                          "& .feature-icon": {
                            color: theme.palette.secondary.main,
                            transform: "translateY(-4px)",
                          },
                        },
                      }}
                    >
                      <Box
                        className="feature-icon"
                        sx={{
                          fontSize: { xs: 40, md: 48 },
                          color: theme.palette.text.secondary,
                          mb: 2,
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          mb: 2,
                          fontWeight: 600,
                          fontSize: { xs: "1.25rem", md: "1.5rem" },
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: "0.95rem", md: "1.125rem" },
                          lineHeight: 1.6,
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

      {/* About Section */}
      <Box
        ref={aboutRef}
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          background: "linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%)",
          px: { xs: 2, md: 0 },
        }}
      >
        <Container maxWidth="md">
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
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  mb: 3,
                  px: { xs: 1, md: 0 },
                }}
              >
                SNS Legal is a contemporary law firm based in Bangalore,
                committed to delivering high-quality legal services across a
                wide spectrum of practice areas. With a clear understanding of
                the evolving legal, commercial, and technological landscape, the
                firm integrates traditional legal knowledge with a modern,
                research-driven approach.
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
                Our team is composed of legal professionals from
                interdisciplinary backgrounds, including law, technology,
                business, and public policy. With a combined experience of over
                a decade, we bring a balanced mix of expertise, strategic
                thinking, and adaptability.
              </Typography>
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
                    color: "#fff",
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

      {/* Practice Areas Section */}
      <Box
        ref={practiceRef}
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: "background.paper",
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
          py: { xs: 8, md: 12 },
          background: "linear-gradient(135deg, #22304a 0%, #3a4a6b 100%)",
          color: "white",
          position: "relative",
          overflow: "hidden",
          px: { xs: 2, md: 0 },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  mb: 2,
                  color: "white",
                  fontSize: { xs: "1.75rem", md: "clamp(1.5rem, 4vw, 2.5rem)" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Ready to Get Started?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  textAlign: { xs: "center", md: "left" },
                  px: { xs: 1, md: 0 },
                }}
              >
                Let's discuss how we can help you navigate your legal challenges
                with confidence and clarity.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{ textAlign: { xs: "center", md: "right" } }}
            >
              <Button
                variant="contained"
                size="large"
                component={RouterLink}
                to="/contact"
                sx={{
                  py: 2,
                  px: 4,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  borderRadius: 3,
                  bgcolor: theme.palette.secondary.main,
                  color: theme.palette.secondary.main,
                  fontWeight: 700,
                  width: { xs: "100%", md: "auto" },
                  maxWidth: { xs: "300px", md: "none" },
                  boxShadow: "0px 8px 25px rgba(200, 178, 153, 0.4)",
                  border: `2px solid ${theme.palette.secondary.main}`,
                  "&:hover": {
                    bgcolor: "#fff",
                    color: theme.palette.secondary.main,
                    borderColor: "#fff",
                    boxShadow: "0px 12px 35px rgba(255, 255, 255, 0.5)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                Schedule Consultation
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
