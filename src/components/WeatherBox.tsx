"use client";

import { weatherTranslation } from "../constants/translation";
import { useWeather } from "../hooks/useWeather";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HourlyWeatherItem from "./HourlyWeatherItem";
import { ThreeHoursWeatherDataList } from "@/types/types";
import CurrentWeatherDisplay from "./CurrentWeatherDisplay";

const WeatherBox = () => {
  const { weatherData, threeHoursWeatherData } = useWeather("Hiratsuka");
  // console.log(weatherData, "weatherData");
  // console.log(threeHoursWeatherData);
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(to right, #93a5cf, #e4efe9)",
          boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)", // 影を追加するときはその分
          color: "white", // テキストの色を白に設定
          m: "10px",
          borderRadius: "10px", // 角を丸くする
          flexDirection: "column", // 縦並びに設定
          alignItems: "center", // 中央揃え
          textAlign: "center",
        }}
      >
        <CurrentWeatherDisplay />

        {/* ここから予報 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            m: "10px",
          }}
        >
          {threeHoursWeatherData?.list &&
            threeHoursWeatherData.list.slice(1, 5).map((item: ThreeHoursWeatherDataList, index: number) => (
              <HourlyWeatherItem
                key={index}
                hour={new Date(item.dt * 1000).getHours()} // UNIXタイムスタンプを時間に変換
                weather={weatherTranslation[item.weather[0].main]}
                temperature={(item.main.temp - 273.15).toFixed(1)} // ケルビンから摂氏に変換
              />
            ))}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              m: "10px",
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
};

export default WeatherBox;
