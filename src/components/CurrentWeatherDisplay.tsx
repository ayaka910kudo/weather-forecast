import { weatherTranslation } from "../constants/translation";
import { useWeather } from "../hooks/useWeather";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HourlyWeatherItem from "./HourlyWeatherItem";
import { ThreeHoursWeatherDataList } from "@/types/types";

const CurrentWeatherDisplay = () => {
  const { weatherData, threeHoursWeatherData } = useWeather("Hiratsuka");
  console.log(weatherData, "weatherData");
  console.log(threeHoursWeatherData);
  return (
    <>
      <Box sx={{ p: 1 }}>
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
