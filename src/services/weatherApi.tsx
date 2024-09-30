import { useEffect, useState } from "react";
import { WeatherApiResponse } from "../types/types";

const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(null);
  const ow_api_url = process.env.NEXT_PUBLIC_OW_API_URL ?? "";
  const ow_api_key = process.env.NEXT_PUBLIC_OW_API_KEY ?? "";

  const weatherTranslation: { [key: string]: string } = {
    Clear: "晴れ",
    Clouds: "曇り",
    Rain: "雨",
    Drizzle: "霧雨",
    Thunderstorm: "雷雨",
    Snow: "雪",
    Mist: "霧",
    Haze: "靄",
    Fog: "霧",
    Smoke: "煙",
    Dust: "ほこり",
    Ash: "火山灰",
    Squall: "スコール",
    Tornado: "竜巻",
  };

  const weatherDescriptionTranslation: { [key: string]: string } = {
    "clear sky": "快晴",
    "few clouds": "少し曇り",
    "scattered clouds": "雲が点在",
    "broken clouds": "曇りがち",
    "overcast clouds": "厚い曇り",
    "light rain": "小雨",
    "moderate rain": "雨",
    "heavy intensity rain": "激しい雨",
    "very heavy rain": "非常に激しい雨",
    "extreme rain": "豪雨",
    "freezing rain": "氷雨",
    "light snow": "小雪",
    snow: "雪",
    "heavy snow": "大雪",
    thunderstorm: "雷雨",
    "thunderstorm with light rain": "雷雨と小雨",
    "thunderstorm with heavy rain": "雷雨と激しい雨",
    drizzle: "霧雨",
    mist: "霧",
    haze: "もや",
    fog: "霧",
    dust: "砂ぼこり",
    sand: "砂",
    smoke: "煙",
    tornado: "竜巻",
  };

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
