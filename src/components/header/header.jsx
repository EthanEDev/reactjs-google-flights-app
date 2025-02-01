import GridAppsIcon from "@mui/icons-material/Apps";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import HouseIcon from "@mui/icons-material/House";
import LuggageIcon from "@mui/icons-material/Luggage";
import MenuIcon from "@mui/icons-material/Menu";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Logo from "../../assets/googlelogo.svg";

const navigationProps = {
  sx: { textTransform: "capitalize", borderRadius: "50px" },
  variant: "outlined",
};

/******************************************************************************
 * Header component that renders the application's top navigation bar.
 *
 * return (
 *   <Header />
 * )
 *
 * @description
 * This component uses Material-UI's AppBar, Toolbar, Stack, IconButton, and Button components
 * to create a responsive header. It includes a logo, navigation buttons, and user action icons.
 * The navigation buttons are hidden on medium and smaller screens.
 *
 *****************************************************************************/
export default function Header() {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar variant="outlined" elevation={0} position="sticky" color="inherit">
      <Toolbar
        disableGutters
        sx={{ px: 0.5, display: "flex", justifyContent: "space-between" }}
      >
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap={5}
        >
          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            gap={0.5}
          >
            <IconButton size="large">
              <MenuIcon />
            </IconButton>
            <img src={Logo} alt="logo" width={74} height={30} />
          </Stack>
          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            gap={1}
            display={isMedium ? "none" : "flex"}
          >
            <Button {...navigationProps} startIcon={<LuggageIcon />}>
              Travel
            </Button>
            <Button {...navigationProps} startIcon={<TravelExploreIcon />}>
              Explore
            </Button>
            <Button
              {...navigationProps}
              variant="contained"
              startIcon={<FlightIcon />}
            >
              Flights
            </Button>
            <Button {...navigationProps} startIcon={<HotelIcon />}>
              Hotels
            </Button>
            <Button {...navigationProps} startIcon={<HouseIcon />}>
              Vacation rentals
            </Button>
          </Stack>
        </Stack>

        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap={0.5}
        >
          <IconButton size="small">
            <DarkModeIcon sx={{ fontSize: 20 }} />
          </IconButton>
          <IconButton size="medium">
            <GridAppsIcon />
          </IconButton>
          <IconButton size="small">
            <Avatar sx={{ width: 32, height: 32, bgcolor: lightBlue[700] }}>
              <Typography variant="body1">E</Typography>
            </Avatar>
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
