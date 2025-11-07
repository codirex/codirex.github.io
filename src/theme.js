import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#C7EF00",
      light: "#D9F84A",
      dark: "#A1C000",
      contrastText: "#1E1E1E",
    },
    secondary: {
      main: "#B2E100",
      light: "#D3F95C",
      dark: "#8FB700",
      contrastText: "#1E1E1E",
    },
    background: {
      default: "#FDFEF9",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#222222",
      secondary: "#555555",
    },
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: "'Poppins', 'Cairo', sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
});

export default theme;
