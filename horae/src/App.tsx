import "./App.css";
import Forecast from "./components/forecast/Forecast";
import Main from "./components/main/Main";
import useForeCast from "./hooks/useForecast";

import {
  dataMain,
  dataWeatherTitle,
  dataWindDetail,
  dataHumidityDetail,
  dataVisibilityDetail,
  dataFeelsDetail,
} from "./components/data/data";

function App() {
  const {
    term,
    options,
    forecast,
    setForecast,
    onInputChange,
    onOptionSelect,
    onSubmit,
    handleStranslate,
    language,
  } = useForeCast();

  

  return (
    <div className="App">
      {forecast ? (
        <Forecast
          data={forecast}
          setForecast={setForecast}
          language={language}
          dataWeatherTitle={dataWeatherTitle}
          dataWindDetail={dataWindDetail}
          dataHumidityDetail={dataHumidityDetail}
          dataVisibilityDetail={dataVisibilityDetail}
          dataFeelsDetail={dataFeelsDetail}
        />
      ) : (
        <Main
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
          language={language}
          handleStranslate={handleStranslate}
          dataMain={dataMain}
        />
      )}
    </div>
  );
}

export default App;

