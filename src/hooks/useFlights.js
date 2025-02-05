import { useState, useEffect } from "react";
import axios from "axios";

/******************************************************************************
 * Custom hook to fetch flights data based on provided parameters.
 *
 * @param {Object} params - The parameters to be sent with the API request.
 * @returns {Object} An object containing the flights data, loading state, and error state.
 * @property {Array} flights - The fetched flights data.
 * @property {boolean} loading - The loading state of the API request.
 * @property {string|null} error - The error message if the API request fails.
 *****************************************************************************/
export default function useFlights(params) {
  const [flights, setFlights] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!params) return; // Prevent unnecessary API calls

    const fetchFlights = async () => {
      setLoading(true);
      setError(null);

      const options = {
        method: "GET",
        url: `https://${RAPIDAPI_HOST}/api/v1/flights/getNearByAirports`,
        params,
        headers: {
          "x-rapidapi-key": RAPIDAPI_KEY,
          "x-rapidapi-host": RAPIDAPI_HOST,
        },
      };

      try {
        const response = await axios.request(options);
        setFlights(response.data.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, [params]);

  return { flights, loading, error };
}
