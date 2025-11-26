import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

const Header: React.FC = () => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "Expertise", path: "/practice-areas" },
    { label: "Knowledge Repository", path: "/blog" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActivePath = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const NavButton = ({ item }: { item: { label: string; path: string } }) => {
    const isActive = isActivePath(item.path);

    return (
      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button
          component={RouterLink}
          to={item.path}
          sx={{
            color: isActive
              ? theme.palette.secondary.main
              : theme.palette.text.primary,
            fontWeight: isActive ? 600 : 500,
            fontSize: "1rem",
            textTransform: "none",
            px: 2,
            py: 1,
            borderRadius: 2,
            position: "relative",
            "&:hover": {
              backgroundColor: "rgba(30, 58, 95, 0.08)",
              color: theme.palette.primary.main,
            },
            "&::after": isActive
              ? {
                  content: '""',
                  position: "absolute",
                  bottom: -4,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  backgroundColor: theme.palette.secondary.main,
                }
              : {},
          }}
        >
          {item.label}
        </Button>
      </motion.div>
    );
  };

  const MobileMenu = () => (
    <Drawer
      anchor="top"
      open={mobileMenuOpen}
      onClose={handleMobileMenuToggle}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${theme.palette.divider}`,
          paddingTop: "80px",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <List sx={{ py: 4 }}>
          {navigationItems.map((item) => (
            <ListItem
              key={item.path}
              component={RouterLink}
              to={item.path}
              onClick={handleMobileMenuToggle}
              sx={{
                borderRadius: 2,
                mb: 1,
                "&:hover": {
                  backgroundColor: "rgba(30, 58, 95, 0.08)",
                },
              }}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: "1.25rem",
                    fontWeight: isActivePath(item.path) ? 600 : 500,
                    color: isActivePath(item.path)
                      ? theme.palette.secondary.main
                      : theme.palette.text.primary,
                  },
                }}
              />
            </ListItem>
          ))}
          <ListItem sx={{ pt: 4 }}>
            <Button
              variant="contained"
              component={RouterLink}
              to="/contact"
              onClick={handleMobileMenuToggle}
              fullWidth
              sx={{
                py: 2,
                fontSize: "1.1rem",
                borderRadius: 3,
              }}
            >
              Get Legal Consultation
            </Button>
          </ListItem>
        </List>
      </Container>
    </Drawer>
  );

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            backgroundColor: isScrolled
              ? "rgba(255, 255, 255, 0.98)"
              : "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px)",
            borderBottom: isScrolled
              ? `1px solid ${theme.palette.divider}`
              : "none",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <Container maxWidth="lg">
            <Toolbar
              sx={{ px: { xs: 2, md: 0 }, minHeight: { xs: 70, md: 80 } }}
            >
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Box
                  component={RouterLink}
                  to="/"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <Box
                    component="img"
                    src="/logo-updated.png"
                    alt="SNS Legal"
                    sx={{
                      height: { xs: 50, md: 65 },
                      width: "auto",
                    }}
                  />
                </Box>
              </motion.div>

              <Box sx={{ flexGrow: 1 }} />

              {/* Desktop Navigation */}
              {!isMobile && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {navigationItems.map((item) => (
                    <NavButton key={item.path} item={item} />
                  ))}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ marginLeft: 16 }}
                  >
                    <Button
                      variant="contained"
                      component={RouterLink}
                      to="/contact"
                      sx={{
                        ml: 2,
                        px: 3,
                        py: 1.5,
                        borderRadius: 3,
                        fontSize: "0.95rem",
                        fontWeight: 600,
                      }}
                    >
                      Get Consultation
                    </Button>
                  </motion.div>
                </Box>
              )}

              {/* Mobile Menu Button */}
              {isMobile && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    onClick={handleMobileMenuToggle}
                    sx={{
                      color: theme.palette.text.primary,
                      p: 1.5,
                    }}
                  >
                    <AnimatePresence mode="wait">
                      {mobileMenuOpen ? (
                        <motion.div
                          key="close"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CloseIcon />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="menu"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <MenuIcon />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </IconButton>
                </motion.div>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </motion.div>

      {/* Mobile Menu */}
      <MobileMenu />
    </>
  );
};

export default Header;
