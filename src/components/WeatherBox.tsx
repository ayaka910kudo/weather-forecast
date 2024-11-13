"use client";

import { weatherTranslation } from "../constants/translation";
import { useWeather } from "../hooks/useWeather";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HourlyWeatherItem from "./HourlyWeatherItem";
import { ThreeHoursWeatherDataList } from "@/types/types";
import CurrentWeatherDisplay from "./CurrentWeatherDisplay";
import HourlyWeatherDisplay from "./HourlyWeatherDisplay";
import { useEffect, useState } from "react";

const WeatherBox = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  useEffect(() => {
    //現在地の緯度と軽度を取得
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            console.error("Geolocation error:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  console.log(latitude, "lat");
  console.log(longitude, "lon");

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
      <CurrentWeatherDisplay />

      <HourlyWeatherDisplay />
    </Box>
  );
};

export default WeatherBox;
