import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "@mui/material/Link";

/******************************************************************************
 * BreadCrumbs component renders a breadcrumb navigation for the flights page.
 *
 * @param {string} props.currentCity - The current city from which the user is traveling.
 * @returns {JSX.Element} The rendered breadcrumb navigation.
 ******************************************************************************/
export default function BreadCrumbs({currentCity}) {
  return (
    <Breadcrumbs separator={<ArrowForwardIcon sx={{ fontSize: 13 }} />}>
      <Link
        variant="subtitle2"
        underline="hover"
        color="primary"
        href="/travel/flights"
      >
        Flights
      </Link>
      <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
        From {currentCity}
      </Typography>
    </Breadcrumbs>
  );
}
