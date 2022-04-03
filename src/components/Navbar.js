import React from "react";
import { connect } from "react-redux";
import { setTheme } from "../actions";

function Navbar({ dispatch, theme }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const themeToggle = (theme) => {
    if (theme === "dark") {
      dispatch(setTheme("light"));
      return localStorage.setItem("color-theme", "light");
    } else {
      dispatch(setTheme("dark"));
      return localStorage.setItem("color-theme", "dark");
    }
  };
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-5 bg-green-600 dark:bg-gray-700">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button className="text-white" onClick={() => themeToggle(theme)}>
              {theme === "dark" ? "DarkMode" : "LightMode"}
            </button>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <div className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <div className="rounded-full h-[100px] w-[100px] flex items-center justify-center bg-gray-200">
                Photos
              </div>
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
