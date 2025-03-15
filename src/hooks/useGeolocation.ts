import { useEffect, useState } from "react";

const initGeolocation = { lat: 35.6852377, lon: 139.7115998 }; // 皇居

export const useGeolocation = () => {
  const [latitude, setLatitude] = useState<number>(initGeolocation.lat);
  const [longitude, setLongitude] = useState<number>(initGeolocation.lon);
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
