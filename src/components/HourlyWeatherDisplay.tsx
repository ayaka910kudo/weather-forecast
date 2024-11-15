import { weatherTranslation } from "../constants/translation";
import { useWeather } from "../hooks/useWeather";
import Box from "@mui/material/Box";
import HourlyWeatherItem from "./HourlyWeatherItem";
import { ThreeHoursWeatherDataList } from "@/types/types";
import { useGeolocation } from "@/hooks/useGeolocation";

const HourlyWeatherDisplay = () => {
  const { latitude, longitude } = useGeolocation(); //緯度と経度を取得

  const { weatherData, threeHoursWeatherData } = useWeather({ lat: latitude, lon: longitude });
  console.log(weatherData, "weatherData");
  console.log(threeHoursWeatherData, "ThreeHoursWeatherData");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          m: "10px",
          p: "5px",
          borderRadius: "10px",
          bgcolor: `rgba(0,0,0,0.05)`,
        }}
      >
        {threeHoursWeatherData?.list &&
          threeHoursWeatherData.list.slice(0, 5).map((item: ThreeHoursWeatherDataList, index: number) => (
            <HourlyWeatherItem
              key={index}
              hour={new Date(item.dt * 1000).getHours()} // UNIXタイムスタンプを時間に変換、ブラウザが自動的にローカルタイムゾーンで表示
              weather={weatherTranslation[item.weather[0].main]}
              iconCode={item.weather[0].icon}
              temperature={(item.main.temp - 273.15).toFixed(1)} // ケルビンから摂氏に変換
            />
          ))}
      </Box>
    </>
  );
};

export default HourlyWeatherDisplay;
