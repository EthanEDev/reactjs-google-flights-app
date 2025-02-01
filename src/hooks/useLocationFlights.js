import { useContext } from "react";
import { LocationContext } from "../contexts/locationContext";

/******************************************************************************
 * Custom hook to access the LocationContext.
 *
 * @returns {Object} The current context value for LocationContext.
 *****************************************************************************/
export const useLocationFlights = () => useContext(LocationContext);