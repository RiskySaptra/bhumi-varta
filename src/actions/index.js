import { locationApi, crowdPoint } from "./locationApi";

export const setTheme = (theme) => {
  const root = window.document.documentElement;
  const isDark = theme === "dark";
  root.classList.remove(isDark ? "light" : "dark");
  root.classList.add(theme);
  localStorage.setItem("color-theme", theme);

  return {
    type: "SET_THEME",
    theme: theme,
  };
};

export const setLocation = ({ data }) => {
  return {
    type: "SET_LOCATION",
    data: data,
  };
};

export const setCrowdPoint = ({ data }) => {
  const groupByPos = data.reduce((prev, curr) => {
    const data = {
      range: curr.range,
      totalUser: 0,
      longitude: curr.longitude,
      latitude: curr.latitude,
      position: `${curr.longitude}${curr.latitude}`,
      table: [],
    };
    const brand = { brand: curr.brand, total_user: curr.total_user };
    const isPosExist = prev.find(
      (pos) => pos.position === `${curr.longitude}${curr.latitude}`
    );
    if (!isPosExist) {
      data.table.push(brand);
      data.totalUser += curr.total_user;
      prev.push(data);
    } else if (isPosExist) {
      prev.map((dt) => {
        if (dt.position === `${curr.longitude}${curr.latitude}`) {
          dt.totalUser += curr.total_user;
          dt.table.push(brand);
        }
        return dt;
      });
    }
    return prev;
  }, []);
  return {
    type: "SET_CROWD_POINT",
    data: data,
    pos: groupByPos,
  };
};

// api action
export const fetchLocation = () => {
  return async (dispatch) => {
    const data = await locationApi();
    return dispatch(setLocation({ ...data }));
  };
};

export const fetchCrowdPoint = () => {
  return async (dispatch) => {
    const data = await crowdPoint();
    return dispatch(setCrowdPoint({ ...data }));
  };
};
