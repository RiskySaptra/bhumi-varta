const initialState = {
  status: "idle",
  data: [],
  pos: [],
};

const crowdPoint = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CROWD_POINT":
      return { ...state, data: action.data, pos: action.pos };
    default:
      return state;
  }
};

export default crowdPoint;
