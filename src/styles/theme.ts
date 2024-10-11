import { createTheme } from "@mui/material";

export const customTheme = createTheme({
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
