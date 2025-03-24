import { weatherTranslation } from "../constants/translation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const CurrentWeatherDisplay = ({ weatherData }: any) => {
  return (
    <>
      <Box sx={{ p: 1 }}>
        <Typography variant="body1" sx={{ m: "10px" }}>
          {weatherData?.name}
        </Typography>
        <Typography variant="h2" sx={{ m: "10px" }}>
          {`${(weatherData?.main?.temp - 273.15).toFixed(1)}°C`}
        </Typography>
        <Image
          src={`https://openweathermap.org/img/wn/${weatherData?.weather?.[0]?.icon}@2x.png`}
          alt="説明文"
          width={100}
          height={100}
        />
        <Typography variant="body1" sx={{ m: "10px" }}>
          {weatherTranslation[weatherData?.weather?.[0]?.main]}
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
              {`${weatherData?.main?.["humidity"]}%`}
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
              {`${weatherData?.wind?.["speed"]}m`}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CurrentWeatherDisplay;
