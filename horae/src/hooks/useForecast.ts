import { useEffect, useState, ChangeEvent } from "react";
import { optionType } from "../types";
import { forecastType } from "../types/index";

const useForeCast = () => {
  const [term, setTerm] = useState<string>("");
  const [options, setOptions] = useState<[]>([]);
  const [city, setCity] = useState<optionType | null>(null);
  const [forecast, setForecast] = useState<forecastType | null>(null);
  const [languages, setLanguages] = useState<string>("");
  const [language, setLanguage] = useState<boolean>(false);

  const { REACT_APP_API_KEY } = process.env;

  const getSearchOptions = (value: string) => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&lang=${languages}&limit=6&appid=${REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data));
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTerm(value);

    if (value === "") return;

    getSearchOptions(value);
  };

  const getForecast = (city: optionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&lang=${languages}&appid=${REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 16),
        };

        setForecast(forecastData);
      });
  };

  const onSubmit = () => {
    if (!city) return;

    getForecast(city);
  };

  const onOptionSelect = (option: optionType) => {
    setCity(option);
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);

  const getClose = () => {
    setForecast(null);
  };

  const handleStranslate = () => {
    setLanguage(!language);
    if (language) setLanguages("en");
    else setLanguages("fr");
  };

  return {
    term,
    options,
    forecast,
    setForecast,
    onInputChange,
    onOptionSelect,
    onSubmit,
    languages,
    setLanguages,
    getClose,
    handleStranslate,
    language,
  };
};

export default useForeCast;
