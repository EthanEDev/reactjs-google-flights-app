import { InputAdornment, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import RoundTripIcon from "@mui/icons-material/SyncAlt";

/******************************************************************************
 * TripType component renders a dropdown select for choosing the type of trip.
 * It includes options for "Round trip", "One way", and "Multi-city".
 * 
 * @returns {JSX.Element} The TripType component.
 *****************************************************************************/
export default function TripType() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenType = () => {
    setIsOpen(true);
  };
  const handleCloseType = () => {
    setIsOpen(false);
  };

  return (
    <Select
      open={isOpen}
      value={1}
      variant="standard"
      // onChange={handleChange}
      onOpen={handleOpenType}
      onClose={handleCloseType}
      sx={{color: "GrayText"}}
      startAdornment={
        <InputAdornment position="start">
          <RoundTripIcon sx={{ fontSize: 20 }} />
        </InputAdornment>
      }
    >
      <MenuItem sx={{ py: 2 }} value={1}>
        Round trip
      </MenuItem>
      <MenuItem sx={{ py: 2 }} disabled value={2}>
        One way
      </MenuItem>
      <MenuItem sx={{ py: 2 }} disabled value={3}>
        Multi-city
      </MenuItem>
    </Select>
  );
}
