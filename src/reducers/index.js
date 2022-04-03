import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import locations from "./locations";
import crowdPoint from "./crowdPoint";

const rootReducer = combineReducers({
  locations,
  crowdPoint,
});

let stores = createStore(rootReducer, applyMiddleware(thunk));

export default stores;
