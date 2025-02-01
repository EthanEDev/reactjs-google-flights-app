import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Grid2, IconButton, Paper, Stack } from "@mui/material";
import FlightClass from "./search/flightClass";
import PassCount from "./search/passCount";
import TripType from "./search/tripType";
import WhereFrom from "./search/whereFrom";
import WhereTo from "./search/whereTo";
import Date from "./search/date";
import SwapIcon from "@mui/icons-material/SwapHorizOutlined";

/******************************************************************************
 * Search component renders a search interface for flights.
 *
 * @param {string} props.currentCity - The current city selected for the search.
 * @returns {JSX.Element} The rendered Search component.
 *****************************************************************************/
export default function Search({ currentCity }) {
  return (
    <Paper
      elevation={4}
      sx={{ p: 1.5, pb: 4, position: "relative", borderRadius: 2 }}
    >
      <Box display="flex" flexDirection="column" gap={3}>
        <Stack direction="row" gap={3} flexWrap="wrap">
          <TripType />
          <PassCount />
          <FlightClass />
        </Stack>

        <Stack flexWrap="wrap" direction="row" gap={3}>
          <Stack direction="row" gap={0} sx={{ width: "100%" }}>
            <WhereFrom current={currentCity} />
            <Box display="flex" alignItems="center">
              <IconButton size="small">
                <SwapIcon />
              </IconButton>
            </Box>
            <WhereTo />
          </Stack>

          <Stack direction="row" gap={3} sx={{ width: "100%" }}>
            <Date />
          </Stack>
        </Stack>
      </Box>
      <Button
        sx={{
          textTransform: "capitalize",
          fontWeight: "bold",
          borderRadius: "50px",
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
    </Paper>
  );
}
