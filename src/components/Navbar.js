import React from "react";
import { connect } from "react-redux";
import { setTheme } from "../actions";

function Navbar({ dispatch, theme }) {
  const themeToggle = (theme) => {
    dispatch(setTheme(theme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-5 bg-green-600 dark:bg-gray-800">
        <div className="container px-4 mx-auto flex flex-wrap items-end justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex flex-row">
              <button
                className="text-white mr-10"
                onClick={() => themeToggle(theme)}
              >
                {theme === "dark" ? "DarkMode" : "LightMode"}
              </button>
              <button className="text-white" onClick={() => themeToggle(theme)}>
                Language
              </button>
            </div>

            <div className="flex flex-row">
              <div className="flex rounded-full h-[50px] w-[50px] lg:hidden items-center justify-center bg-gray-200">
                image
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <div className="hidden rounded-full h-[100px] w-[100px] lg:flex items-center justify-center bg-gray-200">
              image
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
  };
};

export default connect(mapStateToProps)(Navbar);
