import { MenuItem, Select } from "@mui/material";
import { useState } from "react";

/******************************************************************************
 * FlightClass component renders a dropdown menu for selecting flight classes.
 * 
 * @returns {JSX.Element} The rendered component.
 * 
 * @description
 * This component uses the Material-UI Select component to create a dropdown menu.
 * The dropdown includes options for different flight classes: Economy, Premium economy, Business, and First.
 * Only the Economy option is enabled, while the others are disabled.
 * 
 * @hook
 * The component uses the useState hook to manage the open state of the dropdown menu.
 * 
 * @function handleOpenClass
 * Opens the dropdown menu by setting the isOpen state to true.
 * 
 * @function handleCloseClass
 * Closes the dropdown menu by setting the isOpen state to false.
 *****************************************************************************/
export default function FlightClass() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenClass = () => {
    setIsOpen(true);
  };
  const handleCloseClass = () => {
    setIsOpen(false);
  };

  return (
    <Select
      size="medium"
      open={isOpen}
      value={1}
      variant="standard"
      // onChange={handleChange}
      onOpen={handleOpenClass}
      onClose={handleCloseClass}
      sx={{color: "GrayText"}}
    >
      <MenuItem sx={{ py: 2 }} value={1}>
        Economy
      </MenuItem>
      <MenuItem sx={{ py: 2 }} disabled value={2}>
        Premium economy
      </MenuItem>
      <MenuItem sx={{ py: 2 }} disabled value={3}>
        Business
      </MenuItem>
      <MenuItem sx={{ py: 2 }} disabled value={4}>
        First
      </MenuItem>
    </Select>
  );
}
