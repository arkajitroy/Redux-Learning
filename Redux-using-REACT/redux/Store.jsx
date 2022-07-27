// creating the redux store
import { createStore } from "redux";
import rootReducer from "./root_reducer";

// creating the redux-store by passing the reducer in it
const store = createStore(cakeReducer);
export default store;
