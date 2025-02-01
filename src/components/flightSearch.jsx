import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import Search from "./flights/search";
import PopularTrips from "./flights/popularTrips";
import BreadCrumbs from "./flights/breadcrumbs";
import { useLocationFlights } from "../hooks/useLocationFlights";

export default function FlightSearch() {
  /****************************************************************************
   * Destructures the return values from the useLocationFlights hook.
   *
   * @property {Object} location - The location data.
   * @property {boolean} locationLoading - Indicates if the location data is loading.
   * @property {Error} locationError - The error object if there is an error loading the location data.
   * @property {Array} flights - The list of flights.
   * @property {boolean} flightsLoading - Indicates if the flights data is loading.
   * @property {Error} flightsError - The error object if there is an error loading the flights data.
   *
   * @type {LocationFlights}
   ***************************************************************************/
  const {
    location,
    locationLoading,
    locationError,
    flights,
    flightsLoading,
    flightsError,
  } = useLocationFlights();

  if (locationError)
    return <Typography color="error">{locationError}</Typography>;
  if (flightsError)
    return <Typography color="error">{flightsError}</Typography>;
  if (locationLoading || flightsLoading || Object.keys(flights).length === 0)
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );

  const currentCity =
    flights.current.navigation.relevantHotelParams.localizedName;

  const nearbyCities = flights.nearby;

  return (
    <Box display="flex" flexDirection="column" gap={5} mb={10}>
      <Search currentCity={currentCity} />
      <BreadCrumbs currentCity={currentCity} />
      <Typography variant="h5">Cheap flights from {currentCity}</Typography>
      <PopularTrips currentCity={currentCity} nearbyCities={nearbyCities} />

      <Typography variant="body1" fontWeight="bold">
        Find flights from {currentCity} to anywhere
      </Typography>
      <Paper elevation={4} sx={{ p: 1.25, height: 150, position: "relative" }}>
        map
      </Paper>
    </Box>
  );
}
