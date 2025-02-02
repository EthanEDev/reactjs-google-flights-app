import InfoIcon from "@mui/icons-material/InfoOutlined";
import { Box, Grid2, IconButton, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import DestinationCard from "./destinationCard";

/******************************************************************************
 * PopularTrips component displays a list of popular trips from the current city.
 *
 * @param {string} props.currentCity - The name of the current city.
 * @returns {JSX.Element} The PopularTrips component.
 *****************************************************************************/
export default function PopularTrips({ currentCity, nearbyCities }) {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Stack display="flex" flexDirection="row" alignItems="center" gap={1}>
        <Typography variant="body1" fontWeight="bold">
          Popular trips from {currentCity}
        </Typography>
        <IconButton size="small">
          <InfoIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </Stack>
      <Grid2 container spacing={2}>
        {nearbyCities.map((city, index) => (
          <Grid2 key={index} xs={6} md={6}>
            <DestinationCard city={city} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

PopularTrips.propTypes = {
  currentCity: PropTypes.string.isRequired,
  nearbyCities: PropTypes.string.isRequired,
};
