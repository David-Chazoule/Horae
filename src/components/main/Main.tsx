import { ChangeEvent } from "react";
import { optionType, MainDataItem } from "../../types";
import frFlag from "../../styles/img/franceFlag.png";
import enFlag from "../../styles/img/FlagUK.png";
import horae from "../../styles/img/Horae.jpg";

type Props = {
  term: string;
  options: optionType[];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (option: optionType) => void;
  onSubmit: () => void;
  language: boolean;
  dataMain: MainDataItem;
  handleStranslate: () => void;
};

export default function Main({
  term,
  dataMain,
  options,
  language,
  onInputChange,
  onOptionSelect,
  onSubmit,
  handleStranslate,
}: Props): JSX.Element {
  return (
    <main>
      <div className="title-box">
        <h1>HORAE </h1>

        <img className="horae-img" src={horae} alt="" />
      </div>
      <div className="description-box">
        <div>
          <h1>
            {language
              ? dataMain.weatherTitleFr.toUpperCase()
              : dataMain.weatherTitleEn.toUpperCase()}{" "}
            <span>
              {language
                ? dataMain.forecastTitlefr.toUpperCase()
                : dataMain.forecastTitleEn.toUpperCase()}{" "}
            </span>
          </h1>
          <img
            src={language ? frFlag : enFlag}
            onClick={handleStranslate}
            alt={language ? "french-flag" : "english-flag"}
            title={language ? "français" : "english"}
          />
        </div>
        <p>
          {language ? dataMain.mainDescriptionFr : dataMain.mainDescriptionEn}
        </p>
      </div>
      <div className="search-box">
        <div className="search">
          <input
            type="text"
            value={term}
            className=""
            onChange={onInputChange}
          />
          <ul>
            {Array.isArray(options) ? (
              options.map((option: optionType, index: number) => (
                <li key={option.name + "-" + index}>
                  <button className="" onClick={() => onOptionSelect(option)}>
                    {option.name} {option.country}
                  </button>
                </li>
              ))
            ) : (
              <li>
                {language ? "Aucune option disponible" : "No options available"}
              </li>
            )}
          </ul>
          <button className="btn-research" onClick={onSubmit}>
            {language ? dataMain.mainResearchFr : dataMain.mainResearchEn}
          </button>
        </div>
      </div>
    </main>
  );
}
