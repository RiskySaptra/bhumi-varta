const initialState = {
  status: "idle",
  data: [],
};

const locations = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOCATION":
      return { ...state, data: action.data };
    default:
      return state;
  }
};

export default locations;
