import { BUY_CAKES } from "./Cake-Types";

// creating objects as initial state
const initialState = {
  numOfCakes: 10,
};

// defining the reducer function
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKES:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
