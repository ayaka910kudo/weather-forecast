import { useEffect, useState } from "react";
import { WeatherApiResponse } from "../types/types";
import { weatherTranslation, weatherDescriptionTranslation } from "@/constants/translation";

const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(null);
  const ow_api_url = process.env.NEXT_PUBLIC_OW_API_URL ?? "";
  const ow_api_key = process.env.NEXT_PUBLIC_OW_API_KEY ?? "";

  useEffect(() => {
    fetch(`${ow_api_url}/weather?q=Tokyo&appid=${ow_api_key}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeatherData(result); // 取得した天気データをstateに保存
      })
      .catch((error) => {
        console.error("Error fetching the weather data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Tokyo Weather</h1>
      {weatherData ? (
        <div>
          <p>気温: {(weatherData.main.temp - 273.15).toFixed(1)}°C</p>
          {/* 摂氏に変換し、有効数字を小数点以下1位に */}
          <p>天気: {weatherTranslation[weatherData.weather[0].main]}</p>
          <p>詳細: {weatherDescriptionTranslation[weatherData.weather[0].description]}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
