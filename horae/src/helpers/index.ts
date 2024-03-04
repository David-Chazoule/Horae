import {
  dataPopsDetails,
  dataFeelsDetail,
  dataVisibilityDetail,
  dataHumidityDetail,
  dataWeatherTitle,
  dataPressureDetails,
} from "../components/data/data";

// convert sunrise and sunset to hourly timestamp

export const getSunTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();

  if (hours.length <= 1) hours = `0${hours}`;
  if (minutes.length <= 1) minutes = `0${minutes}`;

  return `${hours}:${minutes}`;
};

// retrieves only the current date and puts it into a French order model

export const Dates = (dates: string) => {
  let newDate = dates.split("").slice(0, 10).join("");
  let finalDate = newDate.split("-").reverse().join("-");

  return finalDate;
};

// retrieves only the day and month of the date

export const DayHours = (dates: string) => {
  let newDate = dates.split("").slice(5, 10).join("");
  let finalDate = newDate.split("-").reverse().join("-");

  return finalDate;
};

// retrieve and convert into time every hour of the day

export const getDayHours = (
  i: number,
  item: number,
  language: boolean
): string | number => {
  if (i === 0 && language) {
    return dataWeatherTitle.dayfr;
  } else if (i === 0 && !language) {
    return dataWeatherTitle.day;
  } else {
    return new Date(item * 1000).getHours() + `h`;
  }
};

// using precipitation probability data and cloud percentage data, provides written details

export const getPop = (
  value: number,
  language: boolean,
  clouds: number
): string | number => {
  if (value <= 0.33)
    return language
      ? dataPopsDetails.lowProbFr + dataPopsDetails.cloudFr + clouds + " %"
      : dataPopsDetails.lowProb + dataPopsDetails.cloud + clouds + " %";
  if (value > 0.33 && value <= 0.66)
    return language
      ? dataPopsDetails.moderateProbFr + dataPopsDetails.cloudFr + clouds + " %"
      : dataPopsDetails.moderateProb + dataPopsDetails.cloud + clouds + " %";

  return language
    ? dataPopsDetails.HighProbFr + dataPopsDetails.cloudFr + clouds + " %"
    : dataPopsDetails.HighProb + dataPopsDetails.cloud + clouds + " %";
};

// gives written precision on the feeling from the data

export const getFeels = (value: number, language: boolean): string => {
  if (value < 0) return language ? dataFeelsDetail.icyFr : dataFeelsDetail.icy;
  if (value <= 10)
    return language ? dataFeelsDetail.coldFr : dataFeelsDetail.cold;
  if (value <= 15)
    return language ? dataFeelsDetail.costsFr : dataFeelsDetail.costs;
  if (value <= 26)
    return language ? dataFeelsDetail.sweetFr : dataFeelsDetail.sweet;
  if (value <= 32)
    return language ? dataFeelsDetail.pleasantFr : dataFeelsDetail.pleasant;
  if (value > 32)
    return language ? dataFeelsDetail.scorchingFr : dataFeelsDetail.scorching;
  else return "";
};

// gives written details based on visibility data

export const getVisibilityValue = (
  number: number,
  language: boolean
): string => {
  if (number <= 50)
    return language
      ? dataVisibilityDetail.veryBadVisibilityFr
      : dataVisibilityDetail.veryBadVisibility;
  if (number > 50 && number <= 500)
    return language
      ? dataVisibilityDetail.badVisibilityFr
      : dataVisibilityDetail.badVisibility;
  if (number > 500 && number <= 2000)
    return language
      ? dataVisibilityDetail.mediumVisibilityFr
      : dataVisibilityDetail.mediumVisibility;
  if (number > 2000 && number <= 9000)
    return language
      ? dataVisibilityDetail.goodVisibilityFr
      : dataVisibilityDetail.goodVisibility;
  return language
    ? dataVisibilityDetail.clearVisibilityFr
    : dataVisibilityDetail.clearVisibility;
};

// gives written details based on humidity data

export const getHumidityValue = (level: number, language: boolean): string => {
  if (level <= 55)
    return language
      ? dataHumidityDetail.lowHumidityFr
      : dataHumidityDetail.lowHumidity;

  if (level > 55 && level <= 65)
    return language
      ? dataHumidityDetail.mediumHumidityFr
      : dataHumidityDetail.mediumHumibity;

  return language
    ? dataHumidityDetail.hardHumidityFr
    : dataHumidityDetail.hardHumidity;
};

// gives written details based on prssure data

export const GetPressureValue = (
  pressure: number,
  language: boolean
): string => {
  if (pressure < 1013 && language)
    return dataPressureDetails.lowerFr + " " + dataPressureDetails.standardFr;
  else if (pressure < 1013 && !language)
    return dataPressureDetails.lower + " " + dataPressureDetails.standard;
  else
    return language
      ? dataPressureDetails.higherFr + " " + dataPressureDetails.standardFr
      : dataPressureDetails.higher + " " + dataPressureDetails.standard;
};
