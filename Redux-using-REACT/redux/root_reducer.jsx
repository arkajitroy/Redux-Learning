import { combineReducers } from "redux";
import cakeReducer from "./cakes/Cake-Reducer";
import iceCreamReducer from "./IceCream/IceCream-Reducer";

const rootReducer = combineReducers({
  Cake: cakeReducer,
  iceCream: iceCreamReducer,
});

export default rootReducer;
