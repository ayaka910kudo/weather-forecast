import { fetchCurrentWeather, fetchThreeHoursWeatherData } from "../services/weather";
import { useEffect, useState } from "react";

export const useWeather = (city: string) => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [threeHoursWeatherData, setThreeHoursWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const getWeatherData = async () => {
      console.log("getWeatherDataが呼ばれた");
      try {
        const data = await fetchCurrentWeather(city);
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
        const data = await fetchThreeHoursWeatherData(city);
        setThreeHoursWeatherData(data);
      } catch (err) {
        setError(err);
      }
    };

    getWeatherData();
    getThreeHoursWeatherData();
  }, [city]);

  return { weatherData, threeHoursWeatherData, loading, error };
};
