import { weatherTranslation } from "../constants/translation";
import { useWeather } from "../hooks/useWeather";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useGeolocation } from "@/hooks/useGeolocation";

const CurrentWeatherDisplay = () => {
  const { latitude, longitude } = useGeolocation(); //緯度と経度を取得
  const { weatherData, threeHoursWeatherData } = useWeather({ lat: latitude, lon: longitude });
  console.log(weatherData, "weatherData");
  console.log(threeHoursWeatherData);

  // 天気アイコンのURLを生成
  const iconCode = weatherData?.weather[0].icon; // 天気データのアイコンコード
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // アイコンURL

  console.log(latitude, "lat");
  console.log(longitude, "lon");
  return (
    <>
      <Box sx={{ p: 1 }}>
        <Typography variant="body1" sx={{ m: "10px" }}>
          {weatherData?.name}
        </Typography>
        <Typography variant="h2" sx={{ m: "10px" }}>
          {`${(weatherData?.main.temp - 273.15).toFixed(1)}°C`}
        </Typography>
        <Image
          src={iconUrl}
          alt="説明文"
          width={100} // 画像の幅
          height={100} // 画像の高さ
        />
        <Typography variant="body1" sx={{ m: "10px" }}>
          {weatherTranslation[weatherData?.weather[0].main]}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            m: "3px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              m: "10px",
            }}
          ></Box>

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
              {`${weatherData?.main["humidity"]}%`}
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
              {`${weatherData?.wind["speed"]}m`}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CurrentWeatherDisplay;
