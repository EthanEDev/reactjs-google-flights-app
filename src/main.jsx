import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme/theme";
import App from "./App";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { LocationProvider } from "./contexts/locationContext";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

/******************************************************************************
 * Entry point of the React application.
 *
 * This file sets up the React application by rendering the root component
 * into the DOM. It uses the `ReactDOM.createRoot` method to create a root
 * and renders the application wrapped with `ThemeProvider` and `CssBaseline`
 * from Material-UI for consistent styling.
 *
 *****************************************************************************/
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <LocationProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </LocationProvider>
    </LocalizationProvider>
  </StrictMode>
);
