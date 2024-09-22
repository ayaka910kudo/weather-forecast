"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const WeatherBox = () => {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(to right, #93a5cf, #e4efe9)",
          boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.15)", // 影を追加するときはその分
          color: "white", // テキストの色を白に設定
          margin: "10px",
          borderRadius: "10px", // 角を丸くする
          flexDirection: "column", // 縦並びに設定
          alignItems: "center", // 中央揃え
          textAlign: "center",
        }}
      >
        <div style={{ padding: "10px" }}>
          <Typography variant="body1" style={{ margin: "10px" }}>
            都市名
          </Typography>
          <Typography variant="h2" style={{ margin: "10px" }}>
            XX°
          </Typography>

          <Typography variant="body1" style={{ margin: "10px" }}>
            天気
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px",
              }}
            >
              <Typography
                variant="body2"
                style={{
                  // backgroundColor: "blue",
                  writingMode: "vertical-rl",
                }}
              >
                降水量
              </Typography>
              <Typography variant="body1" style={{ textAlign: "center" }}>
                mm
              </Typography>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px",
              }}
            >
              <Typography
                variant="body2"
                style={{
                  // backgroundColor: "blue",
                  writingMode: "vertical-rl",
                }}
              >
                湿度
              </Typography>
              <Typography variant="body1" style={{ textAlign: "center" }}>
                %
              </Typography>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px",
              }}
            >
              <Typography
                variant="body2"
                style={{
                  // backgroundColor: "blue",
                  writingMode: "vertical-rl",
                }}
              >
                風速
              </Typography>
              <Typography variant="body1" style={{ textAlign: "center" }}>
                m
              </Typography>
            </div>
            {/* <Typography variant="body1" style={{ backgroundColor: "green" ,margin: "10px"}}>湿度</Typography>
              <Typography variant="body1" style={{ backgroundColor: "green" ,margin: "10px"}}>風速</Typography> */}
          </div>
        </div>
      </Box>
    </>
  );
};

export default WeatherBox;
