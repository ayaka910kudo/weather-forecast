import { useEffect, useState } from "react";
import { ThreeHoursWeatherApiResponse } from "../types/types";

const ThreeHoursWeather = () => {
  const [ThreeHoursWeatherData, setThreeHoursWeatherData] = useState<ThreeHoursWeatherApiResponse | null>(null);
  const ow_api_url = process.env.NEXT_PUBLIC_OW_API_URL ?? "";
  const ow_api_key = process.env.NEXT_PUBLIC_OW_API_KEY ?? "";

  useEffect(() => {
    fetch(`${ow_api_url}/forecast/?q=Tokyo&appid=${ow_api_key}`)
      .then((res) => {
        console.log("Fetch response:", res); // レスポンスをログ出力
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // 取得したデータをログ出力
        setThreeHoursWeatherData(data);
      })
      .catch((error) => {
        console.error("Error fetching the forecast data:", error);
      });
  }, []);

  return (
    <div>
      <h1>3時間ごとの天気予報</h1>
      {ThreeHoursWeatherData ? (
        <div>
          <h2>{ThreeHoursWeatherData.city.name}の天気予報</h2>
          <ul>
            {ThreeHoursWeatherData.list.map((item: any, index: number) => (
              <li key={index}>
                時間: {new Date(item.dt * 1000).toLocaleString()} - 天気: {item.weather[0].description} - 気温:{" "}
                {(item.main.temp - 273.15).toFixed(1)}°C
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ThreeHoursWeather;
