import { getInitialTheme } from "../components/ThemeContext";

const theme = (state = getInitialTheme(), action) => {
  switch (action.type) {
    case "SET_THEME":
      return (state = action.theme);
    default:
      return state;
  }
};

export default theme;
