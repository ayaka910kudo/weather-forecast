import { fetchCurrentWeather, fetchThreeHoursWeatherData } from "../services/weather";
import { useEffect, useState } from "react";
import type { Geolocation } from "@/types/types";

// APIからデータを取得する
// TODO 引数cityを緯度経度に変更、各fetchのurlを変更
export const useWeather = ({ lat, lon }: Geolocation) => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [threeHoursWeatherData, setThreeHoursWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const data = await fetchCurrentWeather({ lat: lat, lon: lon });
        setWeatherData(data);
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const getThreeHoursWeatherData = async () => {
      try {
        const data = await fetchThreeHoursWeatherData({ lat: lat, lon: lon });
        setThreeHoursWeatherData(data);
      } catch (err) {
        setError(err);
      }
    };

    getWeatherData();
    getThreeHoursWeatherData();
  }, [lat, lon]);

  return { weatherData, threeHoursWeatherData, loading, error };
};
