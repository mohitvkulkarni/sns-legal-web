import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1e3a5f", // Navy blue
      light: "#2d5a8f",
      dark: "#0f1f3f",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#3a7ca5", // Lighter blue
      light: "#5a9cc5",
      dark: "#2a5c85",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f5f5f5", // Light gray background
      paper: "#ffffff", // White paper/card background
    },
    text: {
      primary: "#1a1a1a", // Near-black for primary text
      secondary: "#666666", // Medium gray for secondary text
    },
    divider: "#e0e0e0",
    success: {
      main: "#4caf50",
    },
    warning: {
      main: "#ff9800",
    },
    error: {
      main: "#f44336",
    },
    info: {
      main: "#2196f3",
    },
  },
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: "clamp(2.5rem, 8vw, 3.5rem)",
      fontWeight: 700,
      lineHeight: 1.2,
      color: "#1a1a1a",
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "clamp(2rem, 6vw, 2.5rem)",
      fontWeight: 600,
      lineHeight: 1.3,
      color: "#1a1a1a",
      letterSpacing: "-0.01em",
    },
    h3: {
      fontSize: "clamp(1.5rem, 4vw, 2rem)",
      fontWeight: 600,
      lineHeight: 1.3,
      color: "#1a1a1a",
    },
    h4: {
      fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
      fontWeight: 500,
      lineHeight: 1.4,
      color: "#1a1a1a",
    },
    h5: {
      fontSize: "clamp(1.1rem, 2.5vw, 1.25rem)",
      fontWeight: 500,
      lineHeight: 1.4,
      color: "#1a1a1a",
    },
    h6: {
      fontSize: "clamp(1rem, 2vw, 1.125rem)",
      fontWeight: 500,
      lineHeight: 1.4,
      color: "#1a1a1a",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#666666",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
      color: "#666666",
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
    borderRadius: 12,
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
          borderRadius: 8,
          padding: "12px 32px",
          fontSize: "1rem",
          fontWeight: 600,
          textTransform: "none",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "none",
        },
        contained: {
          background: "linear-gradient(135deg, #1e3a5f 0%, #2d5a8f 100%)",
          color: "#ffffff",
          boxShadow: "0px 2px 8px rgba(30, 58, 95, 0.25)",
          "&:hover": {
            background: "linear-gradient(135deg, #2d5a8f 0%, #1e3a5f 100%)",
            boxShadow: "0px 4px 16px rgba(30, 58, 95, 0.35)",
            transform: "translateY(-2px)",
          },
        },
        outlined: {
          borderWidth: "2px",
          borderColor: "#5f7fa3",
          color: "#5f7fa3",
          "&:hover": {
            borderWidth: "2px",
            backgroundColor: "rgba(95, 127, 163, 0.08)",
            borderColor: "#4a6382",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: "#ffffff",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
          border: "1px solid #e0e0e0",
          "&:hover": {
            boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.12)",
            borderColor: "#1e3a5f",
            transform: "translateY(-2px)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          color: "#1a1a1a",
          borderBottom: "1px solid #e0e0e0",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#ffffff",
            borderRadius: 12,
            "& fieldset": {
              borderColor: "#e0e0e0",
            },
            "&:hover fieldset": {
              borderColor: "#1e3a5f",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#1e3a5f",
              borderWidth: "2px",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#666666",
            "&.Mui-focused": {
              color: "#1e3a5f",
            },
          },
          "& .MuiOutlinedInput-input": {
            color: "#1a1a1a",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          backgroundImage: "none",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#e0e0e0",
        },
      },
    },
  },
});

export default theme;
