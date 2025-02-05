import { Container } from "@mui/material";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Header from "./components/header/header";
import FlightsPage from "./pages/flights";

/******************************************************************************
 * The main application component.
 *
 * This component sets up the routing for the application using React Router.
 * It redirects the home path ("/") to the flights page ("/travel/flights").
 *
 * return (
 *   <App />
 * )
 *****************************************************************************/
export default function App() {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Router>
          <Routes>
            {/* Force to redirect from home ("/") to "/travel/flights" */}
            <Route path="/" element={<Navigate to="/travel/flights" />} />
            <Route path="/travel/flights" element={<FlightsPage />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}
