import React from "react";
import { connect } from "react-redux";
import { setTheme } from "../actions";
import { getTranslation } from "../helpers/helpers";
import DropDown from "./DropDown";

function Navbar({ dispatch, theme, language }) {
  const themeToggle = (theme) => {
    dispatch(setTheme(theme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-5 bg-green-600 dark:bg-gray-800">
        <div className="container px-4 mx-auto flex flex-wrap items-end justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="mr-5 flex flex-row">
              <button
                className="text-white mr-10 text-sm lg:text-base"
                onClick={() => themeToggle(theme)}
              >
                {getTranslation(
                  language,
                  theme === "dark" ? "dark-mode" : "light-mode"
                )}
              </button>
              <div className="self-center lg:self-end">
                <DropDown />
              </div>
            </div>

            <div className="flex flex-row">
              <div className="flex text-sm rounded-full h-[50px] w-[50px] lg:hidden items-center justify-center bg-gray-200">
                {getTranslation(language, "picture")}
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <div className="hidden text-sm rounded-full h-[100px] w-[100px] lg:flex items-center justify-center bg-gray-200">
              {getTranslation(language, "picture")}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = function (state) {
  return {
    theme: state.theme,
    language: state.language,
  };
};

export default connect(mapStateToProps)(Navbar);
