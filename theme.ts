import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#22304a", // Deep navy
      light: "#3a4a6b",
      dark: "#101a2b",
      contrastText: "#fff",
    },
    secondary: {
      main: "#c8b299", // Warm beige
      light: "#e5dccf",
      dark: "#9a8770",
      contrastText: "#22304a",
    },
    background: {
      default: "#f8f9fa", // Off-white
      paper: "#fff",
    },
    text: {
      primary: "#22304a",
      secondary: "#5a5a5a",
    },
    divider: "#e0e0e0",
  },
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"SF Pro Display"',
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
      fontWeight: 700,
      lineHeight: 1.1,
      color: "#22304a",
    },
    h2: {
      fontSize: "clamp(2rem, 6vw, 3.5rem)",
      fontWeight: 600,
      lineHeight: 1.2,
      color: "#22304a",
    },
    h3: {
      fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
      fontWeight: 600,
      lineHeight: 1.3,
      color: "#22304a",
    },
    h4: {
      fontSize: "clamp(1.25rem, 3vw, 2rem)",
      fontWeight: 500,
      lineHeight: 1.4,
      color: "#22304a",
    },
    h5: {
      fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
      fontWeight: 500,
      lineHeight: 1.4,
      color: "#22304a",
    },
    h6: {
      fontSize: "clamp(1rem, 2vw, 1.25rem)",
      fontWeight: 500,
      lineHeight: 1.4,
      color: "#22304a",
    },
    body1: {
      fontSize: "1.125rem",
      lineHeight: 1.7,
      color: "#5a5a5a",
      fontWeight: 400,
    },
    body2: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#7a7a7a",
      fontWeight: 400,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
      fontSize: "1rem",
      letterSpacing: "0.01em",
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          fontFamily: [
            "Inter",
            "-apple-system",
            "BlinkMacSystemFont",
            '"SF Pro Display"',
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
          ].join(","),
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: "12px 32px",
          fontSize: "1rem",
          fontWeight: 500,
          textTransform: "none",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "none",
        },
        contained: {
          background: "linear-gradient(135deg, #22304a 0%, #3a4a6b 100%)",
          color: "#fff",
          "&:hover": {
            background: "linear-gradient(135deg, #3a4a6b 0%, #22304a 100%)",
          },
        },
        outlined: {
          borderWidth: "2px",
          borderColor: "#c8b299",
          color: "#22304a",
          "&:hover": {
            borderWidth: "2px",
            backgroundColor: "rgba(200, 178, 153, 0.12)",
            borderColor: "#9a8770",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: "0px 4px 20px rgba(34, 48, 74, 0.08)",
          border: "1px solid #e0e0e0",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255,255,255,0.95)",
          color: "#22304a",
          borderBottom: "1px solid #e0e0e0",
        },
      },
    },
  },
});

export default theme;
