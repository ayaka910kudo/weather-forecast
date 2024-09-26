import { useEffect, useState } from "react";
import { WeatherApiResponse } from "../types/types";

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
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
