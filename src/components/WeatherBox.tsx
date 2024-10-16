"use client";

import { weatherTranslation } from "../constants/translation";
import { useWeather } from "../hooks/useWeather";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HourlyWeatherItem from "./HourlyWeatherItem";
import { ThreeHoursWeatherDataList } from "@/types/types";

const WeatherBox = () => {
  const { weatherData, threeHoursWeatherData } = useWeather("Hiratsuka");
  console.log(weatherData);
  console.log(threeHoursWeatherData);
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
        <Box sx={{ p: 3 }}>
          <Typography variant="body1" sx={{ m: "10px" }}>
            {weatherData?.name}
          </Typography>
          <Typography variant="h2" sx={{ m: "10px" }}>
            {`${(weatherData?.main.temp - 273.15).toFixed(1)}°C`}
          </Typography>

          <Typography variant="body1" sx={{ m: "10px" }}>
            {weatherTranslation[weatherData?.weather[0].main]}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              m: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                m: "10px",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  // backgroundColor: "blue",
                  writingMode: "vertical-rl",
                }}
              >
                降水量
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                mm
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                m: "10px",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  // backgroundColor: "blue",
                  writingMode: "vertical-rl",
                }}
              >
                湿度
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                %
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                m: "10px",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  // backgroundColor: "blue",
                  writingMode: "vertical-rl",
                }}
              >
                風速
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                m
              </Typography>
            </Box>
            {/* <Typography variant="body1" sx={{ backgroundColor: "green", m: "10px" }}>
              湿度
            </Typography>
            <Typography variant="body1" sx={{ backgroundColor: "green", m: "10px" }}>
              風速
            </Typography> */}
          </Box>
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
            {/* {threeHoursWeatherData.list.map((item, index) => (
              <HourlyWeatherItem key={index} hour={item.hour} weather={item.weather} temperature={item.temperature} />
            ))} */}
            {/* <HourlyWeatherItem hour={3} weather="晴れ" temperature={20} />
            <HourlyWeatherItem hour={6} weather="曇り" temperature={13} />
            <HourlyWeatherItem hour={9} weather="雷" temperature={5} />
            <HourlyWeatherItem hour={12} weather="雨" temperature={2} /> */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                m: "10px",
              }}
            ></Box>
            {/* <Typography variant="body1" sx={{ backgroundColor: "green", m: "10px" }}>
              湿度
            </Typography>
            <Typography variant="body1" sx={{ backgroundColor: "green", m: "10px" }}>
              風速
            </Typography> */}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WeatherBox;
