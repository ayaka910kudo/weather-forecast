"use client";

import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import WeatherBox from "../components/WeatherBox";
import { customTheme } from "@/styles/theme";

const WeatherForecast = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Container maxWidth="sm">
        <WeatherBox />
      </Container>
    </ThemeProvider>
  );
};

export default WeatherForecast;
