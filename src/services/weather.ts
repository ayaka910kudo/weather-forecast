import axios from "axios";

const ow_api_url = process.env.NEXT_PUBLIC_OW_API_URL ?? "";
const ow_api_key = process.env.NEXT_PUBLIC_OW_API_KEY ?? "";

/** 天気情報を取得する関数 */
export const fetchCurrentWeather = async (city: string) => {
  try {
    const response = await axios.get(`${ow_api_url}/weather?q=${city}&appid=${ow_api_key}`);
    return response.data; // 取得したデータを返す
  } catch (error: any) {
    throw new Error("Error fetching weather data: " + error.message);
  }
};

/** ３時間ごとの天気情報を取得する関数 */
export const fetchThreeHoursWeatherData = async (city: string) => {
  try {
    const response = await axios.get(`${ow_api_url}/forecast/?q=${city}&appid=${ow_api_key}`);
    return response.data; // 取得したデータを返す
  } catch (error: any) {
    throw new Error("Error fetching weather data: " + error.message);
  }
};
