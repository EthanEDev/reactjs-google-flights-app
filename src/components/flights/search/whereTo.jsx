import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOnOutlined";

export default function WhereTo() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="whereTo">Where to?</InputLabel>
      <Select
        sx={{ width: "100%" }}
        labelId="whereTo"
        id="whereTo-helper"
        open={isOpen}
        value=""
        variant="outlined"
        // onChange={handleChange}
        label="Where to?"
        onOpen={handleOpen}
        onClose={handleClose}
        
        startAdornment={
          <InputAdornment position="start">
            <LocationOnIcon sx={{ fontSize: 20 }} />
          </InputAdornment>
        }
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem sx={{ py: 2 }} value={1}>
          Anywhere
        </MenuItem>
        <MenuItem sx={{ py: 2 }} value={2}>
          Europe
        </MenuItem>
      </Select>
    </FormControl>
  );
}
