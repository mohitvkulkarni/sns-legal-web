import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#c9a961", // Sophisticated gold
      light: "#d4b876",
      dark: "#b39447",
      contrastText: "#1a1a1a",
    },
    secondary: {
      main: "#7a9cc6", // Professional blue
      light: "#95b3d7",
      dark: "#5f7fa3",
      contrastText: "#ffffff",
    },
    background: {
      default: "#0f1419", // Deep charcoal
      paper: "#1a1f26", // Elevated dark
    },
    text: {
      primary: "#e8e8e8", // Soft white
      secondary: "#a0a0a0", // Medium gray
    },
    divider: "#2d3339",
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
      color: "#e8e8e8",
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "clamp(2rem, 6vw, 2.5rem)",
      fontWeight: 600,
      lineHeight: 1.3,
      color: "#e8e8e8",
      letterSpacing: "-0.01em",
    },
    h3: {
      fontSize: "clamp(1.5rem, 4vw, 2rem)",
      fontWeight: 600,
      lineHeight: 1.3,
      color: "#e8e8e8",
    },
    h4: {
      fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
      fontWeight: 500,
      lineHeight: 1.4,
      color: "#e8e8e8",
    },
    h5: {
      fontSize: "clamp(1.1rem, 2.5vw, 1.25rem)",
      fontWeight: 500,
      lineHeight: 1.4,
      color: "#e8e8e8",
    },
    h6: {
      fontSize: "clamp(1rem, 2vw, 1.125rem)",
      fontWeight: 500,
      lineHeight: 1.4,
      color: "#e8e8e8",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#a0a0a0",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
      color: "#a0a0a0",
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
          background: "linear-gradient(135deg, #c9a961 0%, #d4b876 100%)",
          color: "#1a1a1a",
          boxShadow: "0px 4px 14px rgba(201, 169, 97, 0.3)",
          "&:hover": {
            background: "linear-gradient(135deg, #d4b876 0%, #c9a961 100%)",
            boxShadow: "0px 6px 20px rgba(201, 169, 97, 0.4)",
            transform: "translateY(-2px)",
          },
        },
        outlined: {
          borderWidth: "2px",
          borderColor: "#7a9cc6",
          color: "#7a9cc6",
          "&:hover": {
            borderWidth: "2px",
            backgroundColor: "rgba(122, 156, 198, 0.12)",
            borderColor: "#95b3d7",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: "#1a1f26",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
          border: "1px solid #2d3339",
          "&:hover": {
            boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.4)",
            borderColor: "#c9a961",
            transform: "translateY(-2px)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(15, 20, 25, 0.95)",
          backdropFilter: "blur(10px)",
          color: "#e8e8e8",
          borderBottom: "1px solid #2d3339",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#1a1f26",
            borderRadius: 12,
            "& fieldset": {
              borderColor: "#2d3339",
            },
            "&:hover fieldset": {
              borderColor: "#c9a961",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#c9a961",
              borderWidth: "2px",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#a0a0a0",
            "&.Mui-focused": {
              color: "#c9a961",
            },
          },
          "& .MuiOutlinedInput-input": {
            color: "#e8e8e8",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#1a1f26",
          backgroundImage: "none",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#2d3339",
        },
      },
    },
  },
});

export default theme;
