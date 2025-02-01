import { useState, useEffect } from "react";

/******************************************************************************
 * Custom hook to fetch the user's IP-based location.
 *
 * @returns {Object} An object containing the following properties:
 * - location: { lat: number, lng: number } | null - The latitude and longitude of the user's location, or null if not yet fetched.
 * - loading: boolean - A boolean indicating whether the location is currently being fetched.
 * - error: string | null - An error message if the location fetch failed, or null if no error occurred.
 *****************************************************************************/
export default function useIPLocation() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIPLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) throw new Error("Failed to fetch location");

        const data = await response.json();
        setLocation({ lat: data.latitude, lng: data.longitude });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIPLocation();
  }, []);

  return { location, loading, error };
}