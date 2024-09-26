"use client";

import axios from "axios";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import WeatherBox from "./components/WeatherBox"; // WeatherBoxコンポーネントのインポート
import Weather from "../services/weatherApi";
import { useEffect, useState } from "react"; // React Hooks のインポート

const theme = createTheme({
  typography: {
    // 全体のフォントサイズの基本値
    fontSize: 14, // ベースフォントサイズ
    h1: {
      fontSize: "5rem", // h1見出し用のフォントサイズ
    },
    h2: {
      fontSize: "4rem", // h2見出し用のフォントサイズ
    },
    body1: {
      fontSize: "1rem", // 通常の本文用のフォントサイズ
    },
    body2: {
      fontSize: "0.875rem", // 小さい文字用のフォントサイズ
    },
  },
});

const WeatherForecast = () => {
  // Weather();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <WeatherBox />
          <WeatherBox />
          <Weather />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default WeatherForecast;
