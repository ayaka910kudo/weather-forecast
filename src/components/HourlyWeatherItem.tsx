import { Box, Typography } from "@mui/material";
import { useWeather } from "../hooks/useWeather";
import Image from "next/image";

type HourlyWeatherItem = {
  hour: number;
  weather: string;
  temperature: number;
};

const HourlyWeatherItem = ({ hour, weather, temperature }: HourlyWeatherItem) => {
  // TODO 天気のアイコンが現在の天気のものになってるから、予報のものに書き換える
  const { weatherData } = useWeather("Hiratsuka");
  const iconCode = weatherData?.weather[0].icon; // 天気データのアイコンコード
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // アイコンURL
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        m: "10px",
        flexDirection: "column", //縦向きに組む
      }}
    >
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        {`${hour}時間後`}
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        {weather}
      </Typography>
      <Image
        src={iconUrl}
        alt="説明文"
        width={50} // 画像の幅
        height={50} // 画像の高さ
      />
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        {`${temperature}°C`}
      </Typography>
    </Box>
  );
};

export default HourlyWeatherItem;
