import { useEffect, useState } from "react";

export const useGeolocation = () => {
  const [latitude, setLatitude] = useState<number>(35.6852377);
  const [longitude, setLongitude] = useState<number>(139.7115998);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            console.error("Geolocation error:", error);
            setError(error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  return { latitude, longitude, error };
};
