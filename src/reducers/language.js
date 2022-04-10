const language = (state = getInitialLanguage(), action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return (state = action.language);
    default:
      return state;
  }
};

const getInitialLanguage = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("lang");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }
  }
  return "bahasa";
};

export default language;
