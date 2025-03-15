import { useEffect, useState } from "react";

const INIT_LAT = 35.6852377; // 皇居の緯度
const INIT_LON = 139.7115998; // 皇居の経度

export const useGeolocation = () => {
  const [latitude, setLatitude] = useState<number>(INIT_LAT);
  const [longitude, setLongitude] = useState<number>(INIT_LON);
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
