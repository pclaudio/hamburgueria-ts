import { Theme } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme: Theme = createTheme({
  palette: {
    primary: {
      dark: "#1b7942",
      light: "#93d7af",
      main: "#27ae60",
      contrastText: "#ffffff",
    },
    secondary: {
      dark: "#a43d3d",
      light: "#ef7676",
      main: "#eb5757",
      contrastText: "#ffffff",
    },
    success: {
      dark: "#0f5f17",
      light: "#349f3f",
      main: "#168821",
      contrastText: "#ffffff",
    },
    warning: {
      dark: "#b39005",
      light: "#ffd739",
      main: "#ffcd07",
      contrastText: "#ffffff",
    },
    error: {
      dark: "#a10000",
      light: "#eb2f2f",
      main: "#e60000",
      contrastText: "#ffffff",
    },
    info: {
      dark: "#0e408f",
      light: "#3c77d6",
      main: "#155bcb",
      contrastText: "#ffffff",
    },
    grey: {
      "50": "#f5f5f5",
      "100": "#e0e0e0",
      "200": "#999999",
      "300": "#828282",
      "600": "#333333",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontFamily: "'Inter', sans-serif",
      fontSize: "26px",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Inter', sans-serif",
      fontSize: "22px",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Inter', sans-serif",
      fontStyle: "normal",
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "24px",
    },
    subtitle1: {
      fontFamily: "'Inter', sans-serif",
      fontSize: "16px",
      fontWeight: 400,
    },
    body1: {
      fontFamily: "'Inter', sans-serif",
      fontStyle: "normal",
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "22px",
    },
    body2: {
      fontFamily: "'Inter', sans-serif",
      fontStyle: "normal",
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "24px",
    },
    caption: {
      fontFamily: "'Inter', sans-serif",
      fontStyle: "normal",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "16px",
    },
    button: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
