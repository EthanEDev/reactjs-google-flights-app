import React, { createContext, useContext, useState, useEffect } from 'react';
import useIPLocation from '../hooks/useIPLocation';
import useFlights from '../hooks/useFlights';

export const LocationContext = createContext();

/******************************************************************************
 * LocationProvider component that provides location and flight data to its children.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components that will receive the context values.
 * @returns {JSX.Element} The LocationContext provider with location and flight data.
 *
 * @example
 * <LocationProvider>
 *   <YourComponent />
 * </LocationProvider>
 *
 * @context {Object} LocationContext - The context that provides location and flight data.
 * @context {Object} LocationContext.location - The current location data.
 * @context {boolean} LocationContext.locationLoading - The loading state of the location data.
 * @context {Error} LocationContext.locationError - The error state of the location data.
 * @context {Object} LocationContext.flights - The current flight data.
 * @context {boolean} LocationContext.flightsLoading - The loading state of the flight data.
 * @context {Error} LocationContext.flightsError - The error state of the flight data.
 * @context {Object} LocationContext.flightsParams - The parameters for the flight data.
 *****************************************************************************/
export const LocationProvider = ({ children }) => {
  const { location, loading: locationLoading, error: locationError } = useIPLocation();
  const [locationParams, setLocationParams] = useState(null);
  const { flights, loading: flightsLoading, error: flightsError } = useFlights(locationParams);
  const [flightsParams, setFlightsParams] = useState(null);

  useEffect(() => {
    if (location) {
      setLocationParams({ lat: location.lat, lng: location.lng });      
    }
  }, [location]);
  useEffect(() => {
    if (flights) {
      setFlightsParams(flights);      
    }
  }, [flights]);

  return (
    <LocationContext.Provider value={{ location, locationLoading, locationError, flights, flightsLoading, flightsError, flightsParams }}>
      {children}
    </LocationContext.Provider>
  );
};

