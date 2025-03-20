import { fetchCurrentWeatherByCity, fetchThreeHoursWeatherDataByCity } from "../services/weather";
import { useEffect, useState } from "react";
// import type { Geolocation } from "@/types/types";

// APIからデータを取得する
// TODO 引数cityを緯度経度に変更、各fetchのurlを変更
export const useWeatherByCity = (cityName: string) => {
  const [weatherDataByCity, setWeatherDataByCity] = useState<any>(null);
  const [threeHoursWeatherDataByCity, setThreeHoursWeatherDataByCity] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const getWeatherDataByCity = async () => {
      try {
        const data = await fetchCurrentWeatherByCity(cityName);
        setWeatherDataByCity(data);
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const getThreeHoursWeatherDataByCity = async () => {
      try {
        const data = await fetchThreeHoursWeatherDataByCity(cityName);
        setThreeHoursWeatherDataByCity(data);
      } catch (err) {
        setError(err);
      }
    };

    getWeatherDataByCity();
    getThreeHoursWeatherDataByCity();
  }, [cityName]);
  console.log(weatherDataByCity, "wetherDataByCity");

  return { weatherDataByCity, threeHoursWeatherDataByCity, loading, error };
};
