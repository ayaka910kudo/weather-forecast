export type WeatherApiResponse = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  rain?: {
    "1h": number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

// 共通の型を定義
export type WeatherMainData = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level?: number;
  grnd_level?: number;
  humidity: number;
  temp_kf?: number;
};

export type WeatherDescription = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

// ThreeHoursWeatherDataList型を共通の型を使って定義
export type ThreeHoursWeatherDataList = {
  dt: number;
  main: WeatherMainData; // 共通の型を使用
  weather: WeatherDescription[]; // 共通の型を使用
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  visibility: number;
  pop: number;
  rain?: {
    "3h": number;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
};

// ThreeHoursWeatherApiResponse型を共通の型を使って定義
export type ThreeHoursWeatherApiResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: ThreeHoursWeatherDataList[]; // 共通の型を使用
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
};

export type Geolocation = {
  lat: number | null;
  lon: number | null;
};
