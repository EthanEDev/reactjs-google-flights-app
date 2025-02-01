import { Box, Container, Typography } from "@mui/material";
import FlightImage from "../assets/flights_nc.svg";
import FlightSearch from "../components/flightSearch";

/******************************************************************************
 * FlightsPage component renders the main page for flight searches.
 * It includes a header image and a search component.
 *
 * @returns {JSX.Element} The rendered component.
 *****************************************************************************/
export default function FlightsPage() {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Box
        sx={{
          backgroundImage: `url(${FlightImage})`,
          backgroundPosition: "center",
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          height: { xs: 320 }, // Responsive height
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "center",
          width: "100%", // Ensure the box takes full width
        }}
      >
        <Typography variant="h2">Flights</Typography>
      </Box>
      <Container sx={{ pt: 4 }} maxWidth="md">
        <FlightSearch />
      </Container>
    </Box>
  );
}
