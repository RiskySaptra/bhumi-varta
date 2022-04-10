import { getTranslation } from "../helpers/helpers";
import { connect } from "react-redux";
import { setLanguage } from "../actions";
import { languages } from "../helpers/constants";

const DropDown = ({ dispatch, language }) => {
  const languageToggle = (language) => {
    dispatch(setLanguage(language));
  };

  return (
    <div className="flex flex-row ">
      <h2 className="text-white self-center mr-2">
        {getTranslation(language, "lang-choice")}
      </h2>
      <select
        className="form-select appearance-none block px-3 lg:py-0.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white dark:bg-gray-400 dark:text-white focus:outline-none"
        value={language}
        onChange={(e) => languageToggle(e.target.value)}
      >
        {languages.map((c) => (
          <option value={c.value}>{c.name}</option>
        ))}
      </select>
    </div>
  );
};

const mapStateToProps = function (state) {
  return {
    language: state.language,
  };
};

export default connect(mapStateToProps)(DropDown);
