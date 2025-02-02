import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LocationProvider } from "./contexts/locationContext";
import theme from "./theme/theme";

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
