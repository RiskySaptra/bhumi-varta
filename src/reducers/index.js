import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import locations from "./locations";
import crowdPoint from "./crowdPoint";
import theme from "./theme";
import language from "./language";

const rootReducer = combineReducers({
  locations,
  crowdPoint,
  theme,
  language,
});

let stores = createStore(rootReducer, applyMiddleware(thunk));

export default stores;
