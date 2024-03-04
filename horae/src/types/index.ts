export type optionType = {
  name: string;
  country: string;
  lat: number;
  lon: number;
};

export type forecastType = {
  name: string;
  country: string;
  lat: number;
  lon: number;
  sunrise: number;
  sunset: number;
  list: [
    {
      dt: number;
      dt_txt: string;
      main: {
        feels_like: number;
        grnd_level: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
      };
      visibility: number;
      weather: [
        {
          main: string;
          icon: string;
          description: string;
        }
      ];

      wind: {
        speed: number;
        gust: number;
        deg: number;
      };
      clouds: {
        all: number;
      };

      pop: number;
    }
  ];
};

export interface MainDataItem {
  weatherTitleFr: string;
  weatherTitleEn: string;
  forecastTitlefr: string;
  forecastTitleEn: string;
  mainDescriptionFr: string;
  mainDescriptionEn: string;
  mainResearchFr: string;
  mainResearchEn: string;
}

export type dataWeatherTitleItem = {
  dayfr: string;
  day: string;
  sunriseFr: string;
  sunrise: string;
  sunsetFr: string;
  sunset: string;
  windFr: string;
  wind: string;
  feelsFr: string;
  feels: string;
  humidityFr: string;
  humidity: string;
  precipitationFr: string;
  precipitation: string;
  pressurefr: string;
  pressure: string;
  visibilityfr: string;
  visibility: string;
};

export type dataWindDetailItem = {
  gustFr: string;
  gust: string;
  northFr: string;
  north: string;
  northWFr: string;
  northW: string;
  northEFr: string;
  northE: string;
  southFr: string;
  south: string;
  southWFr: string;
  southW: string;
  southEFr: string;
  southE: string;
  westFr: string;
  west: string;
  eastFr: string;
  east: string;
};

export type dataHumidityDetailItem = {
  lowHumidityFr: string;
  lowHumidity: string;
  mediumHumidityFr: string;
  mediumHumibity: string;
  hardHumidityFr: string;
  hardHumidity: string;
};

export type dataVisibilityDetailItem = {
  veryBadVisibilityFr: string;
  veryBadVisibility: string;
  badVisibilityFr: string;
  badVisibility: string;
  mediumVisibilityFr: string;
  mediumVisibility: string;
  goodVisibilityFr: string;
  goodVisibility: string;
  clearVisibilityFr: string;
  clearVisibility: string;
};

export type dataFeelDetailItem = {
  icyFr: string;
  icy: string;
  coldFr: string;
  cold: string;
  costsFr: string;
  costs: string;
  sweetFr: string;
  sweet: string;
  pleasantFr: string;
  pleasant: string;
  hotFr: string;
  hot: string;
  scorchingFr: string;
  scorching: string;
};
