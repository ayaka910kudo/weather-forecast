import { Box, Typography } from "@mui/material";

type HourlyWeatherItem = {
  hour: number;
  weather: string;
  temperature: number;
};

const HourlyWeatherItem = ({ hour, weather, temperature }: HourlyWeatherItem) => {
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
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        {`${temperature}°C`}
      </Typography>
    </Box>
  );
};

export default HourlyWeatherItem;
