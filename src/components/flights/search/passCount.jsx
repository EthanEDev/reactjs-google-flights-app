import UserIcon from "@mui/icons-material/PermIdentityRounded";
import { InputAdornment, MenuItem, Select } from "@mui/material";
import { useState } from "react";
/******************************************************************************
 * PassCount component renders a dropdown select menu for choosing the type of trip.
 * It uses Material-UI's Select component and manages its open/close state.
 *
 * @returns {JSX.Element} The rendered PassCount component.
 ******************************************************************************/
export default function PassCount() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenCount = () => {
    setIsOpen(true);
  };
  const handleCloseCount = () => {
    setIsOpen(false);
  };

  return (
    <Select
      open={isOpen}
      value={1}
      variant="standard"
      // onChange={handleChange}
      onOpen={handleOpenCount}
      onClose={handleCloseCount}
      sx={{color: "GrayText"}}
      startAdornment={
        <InputAdornment position="start">
          <UserIcon sx={{ fontSize: 20 }} />
        </InputAdornment>
      }
    >
      <MenuItem value={1}>1</MenuItem>
    </Select>
  );
}
