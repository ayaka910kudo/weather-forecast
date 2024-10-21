import { weatherTranslation } from "../constants/translation";
import { useWeather } from "../hooks/useWeather";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HourlyWeatherItem from "./HourlyWeatherItem";
import { ThreeHoursWeatherDataList } from "@/types/types";

const HourlyWeatherDisplay = () => {
  const { weatherData, threeHoursWeatherData } = useWeather("Hiratsuka");
  console.log(weatherData, "weatherData");
  console.log(threeHoursWeatherData);
  return (
    <>
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
      </Box>
    </>
  );
};

export default HourlyWeatherDisplay;
