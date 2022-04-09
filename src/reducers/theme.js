const theme = (state = getInitialTheme(), action) => {
  switch (action.type) {
    case "SET_THEME":
      return (state = action.theme);
    default:
      return state;
  }
};

const getInitialTheme = () => {
  const root = window.document.documentElement;
  const isDark = theme === "dark";
  root.classList.remove(isDark ? "light" : "dark");

  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      root.classList.add(storedPrefs);
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      root.classList.add("dark");
      return "dark";
    }
  }

  return "light";
};

export default theme;
