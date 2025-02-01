import { createTheme } from "@mui/material/styles";

/******************************************************************************
 * Creates a custom theme for the application.
 * MUI theme
 *****************************************************************************/
const theme = createTheme({
  palette: {
    mode: "light", // or "dark"
    primary: { main: "#1976d2" },
    secondary: { main: "#f50057" },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default theme;
