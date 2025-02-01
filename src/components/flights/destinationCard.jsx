import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import PopularTrips from "./../../assets/pop-trips.jpg";

/******************************************************************************
 * A functional component that renders a destination card with flight details.
 *
 * @returns {JSX.Element} The rendered destination card component.
 *****************************************************************************/
export default function DestinationCard({city}) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        cursor: "pointer"
      }}
      elevation={0}
    >
      <CardMedia
        sx={{
          width: { xs: "250px", md: "134px", xl: "192px" },
          height: "134px",
          borderRadius: 4,
        }}
        image={PopularTrips}
      />
      <Stack display="flex">
        <CardHeader
          title={city.presentation.title}
          action="$120"
          sx={{p: 1}}
          slotProps={{
            title: {
              variant: "subtitle2",
              p: 0,
              m: 0,
              sx: { fontWeight: "bold" },
            },
            action: {
              sx: { m: 0, fontWeight: "bold", lineHeight: "32px" },
            },
          }}
        />
        <CardContent sx={{p: 1}}>
          <Typography color="textSecondary" variant="subtitle2">
            Mar 27 - Apr 3
          </Typography>
          <Typography color="textSecondary" variant="subtitle2">
            Nonstop . 2 hr 50 minAir . Europa
          </Typography>
        </CardContent>
      </Stack>
    </Card>
  );
}
