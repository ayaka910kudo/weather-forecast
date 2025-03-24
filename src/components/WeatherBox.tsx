"use client";

import { useWeather } from "../hooks/useWeather";
import Box from "@mui/material/Box";
import CurrentWeatherDisplay from "./CurrentWeatherDisplay";
import HourlyWeatherDisplay from "./HourlyWeatherDisplay";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { useGeolocation } from "@/hooks/useGeolocation";
import { useWeatherByCity } from "@/hooks/useWeatherByCity";

const WeatherBox = () => {
  const [selectedCity, setSelectedCity] = useState<string>("現在地"); // 選択された都市
  const { latitude, longitude } = useGeolocation(); // 現在地の緯度と経度を取得
  const { weatherData, threeHoursWeatherData } = useWeather({ lat: latitude, lon: longitude });
  const [currentWeatherData, setCurrentWeatherData] = useState(weatherData);
  const [hourlyWeatherData, setHourlyWeatherData] = useState(threeHoursWeatherData);

  /** 都市名が選択された時の処理 */
  const handleCityChange = (event: SelectChangeEvent<string>) => {
    const city = event.target.value as string;
    setSelectedCity(city);
  };

  const { weatherDataByCity, threeHoursWeatherDataByCity } = useWeatherByCity(selectedCity);

  useEffect(() => {
    if (selectedCity === "現在地") {
      setCurrentWeatherData(weatherData);
      setHourlyWeatherData(threeHoursWeatherData);
    } else {
      setCurrentWeatherData(weatherDataByCity);
      setHourlyWeatherData(threeHoursWeatherDataByCity);
    }
  }, [selectedCity, weatherData, threeHoursWeatherData, weatherDataByCity, threeHoursWeatherDataByCity]);

  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #93a5cf, #e4efe9)",
        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)", // 影を追加するときはその分
        color: "white", // テキストの色を白に設定
        m: "10px",
        p: "15px",
        borderRadius: "10px", // 角を丸くする
        flexDirection: "column", // 縦並びに設定
        alignItems: "center", // 中央揃え
        textAlign: "center",
      }}
    >
      {/* 都市名の選択 */}
      <Select value={selectedCity} onChange={handleCityChange}>
        <MenuItem value="現在地">現在地</MenuItem>
        <MenuItem value="Tokyo">東京都</MenuItem>
        <MenuItem value="Osaka">大阪府</MenuItem>
        {/* 他の都市を追加 */}
      </Select>

      {/* この2つには天気情報だけを渡して、表示するだけ */}
      <CurrentWeatherDisplay weatherData={currentWeatherData} />
      <HourlyWeatherDisplay threeHoursWeatherData={hourlyWeatherData} />
    </Box>
  );
};

export default WeatherBox;
