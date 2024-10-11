"use client";

import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import WeatherBox from "../components/WeatherBox";
import { useEffect } from "react";
import { fetchCurrentWeather } from "@/services/weather";
import { customTheme } from "@/styles/theme";

const WeatherForecast = () => {
  // useEffect(() => {
  //   fetchCurrentWeather("Tokyo")
  //     .then((res) => console.log(res))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <ThemeProvider theme={customTheme}>
      <Container maxWidth="sm">
        <WeatherBox />
      </Container>
    </ThemeProvider>
  );
};

export default WeatherForecast;
