import { Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Date() {
  return (
    <Stack width="100%" flexDirection="row" justifyContent="center">
      <DatePicker label="Departure" />
      <DatePicker label="Return" />
    </Stack>
  );
}
