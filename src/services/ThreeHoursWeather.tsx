import { useEffect, useState } from "react";

const ThreeHoursWeather = () => {
  const [ThreeHoursWeatherData, setThreeHoursWeatherData] = useState(null);
  const ow_api_url = process.env.NEXT_PUBLIC_OW_API_URL ?? "";
  const ow_api_key = process.env.NEXT_PUBLIC_OW_API_KEY ?? "";

  useEffect(() => {
    fetch(`${ow_api_url}/forecast/?q=Tokyo&appid=${ow_api_key}`)
      .then((res) => res.json())
      .then((data) => {
        setThreeHoursWeatherData(data);
        console.log(ThreeHoursWeatherData);
      })
      .catch((error) => {
        console.error("Error fetching the forecast data:", error);
      });
  }, []);

  return (
    <div>
      <h1>3時間ごとの天気予報</h1>
    </div>
  );
};

export default ThreeHoursWeather;
