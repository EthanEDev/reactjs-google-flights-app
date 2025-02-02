import OriginIcon from "@mui/icons-material/TripOriginOutlined";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

/******************************************************************************
 * Component for selecting the origin location in a flight search form.
 *
 * @param {string} props.current - The current selected origin location.
 * @returns {JSX.Element} The rendered component.
 *****************************************************************************/
export default function WhereFrom({ current }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="whereFrom">Where from?</InputLabel>
      <Select
        labelId="whereFrom"
        id="whereFrom-helper"
        open={isOpen}
        value={1}
        variant="outlined"
        // onChange={handleChange}
        label="Where from?"
        onOpen={handleOpen}
        onClose={handleClose}
        startAdornment={
          <InputAdornment position="start">
            <OriginIcon sx={{ fontSize: 15 }} />
          </InputAdornment>
        }
      >
        <MenuItem sx={{ py: 2 }} value={1}>
          {current}
        </MenuItem>
      </Select>
    </FormControl>
  );
}

WhereFrom.propTypes = {
  current: PropTypes.string.isRequired,
};
