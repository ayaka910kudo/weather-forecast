import { weatherTranslation } from "../constants/translation";
import { useWeather } from "../hooks/useWeather";
import { useWeatherByCity } from "../hooks/useWeatherByCity";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useGeolocation } from "@/hooks/useGeolocation";
import { Button, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

const CurrentWeatherDisplay = () => {
  const { latitude, longitude } = useGeolocation(); // 現在地の緯度と経度を取得
  const [selectedCity, setSelectedCity] = useState<string>("Osaka"); // 選択された都市
  const [cityCoordinates, setCityCoordinates] = useState<{ lat: number; lon: number } | null>(null); // 都市の緯度経度

  const { weatherData } = useWeather(cityCoordinates || { lat: latitude, lon: longitude }); // 緯度経度に基づく天気データを取得

  const handleCityChange = (event: SelectChangeEvent<string>) => {
    const city = event.target.value as string;
    setSelectedCity(city);
    setCityCoordinates(null);
  };

  const handleCurrentLocation = () => {
    setCityCoordinates({ lat: latitude, lon: longitude });
  };

  useWeatherByCity(selectedCity);

  return (
    <>
      <Select value={selectedCity} onChange={handleCityChange}>
        <MenuItem value="Tokyo">Tokyo</MenuItem>
        <MenuItem value="Osaka">Osaka</MenuItem>
        {/* 他の都市を追加 */}
      </Select>
      <Button onClick={handleCurrentLocation}>現在地の天気</Button>
      <Box sx={{ p: 1 }}>
        <Typography variant="body1" sx={{ m: "10px" }}>
          {weatherData?.name}
        </Typography>
        <Typography variant="h2" sx={{ m: "10px" }}>
          {`${(weatherData?.main.temp - 273.15).toFixed(1)}°C`}
        </Typography>
        <Image
          src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
          alt="説明文"
          width={100}
          height={100}
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
