const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

// -------------------------- REDUX ACTION -----------------------------

// Initializing Action as a constant
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAMS";

// action creater -- Buy Cake
function buyCake() {
  return {
    // actions defined
    type: BUY_CAKE,
    info: "First Redux Action",
  };
}

// action creater -- Buy IceCreams
function buyIceCream() {
  return {
    // actions defined
    type: BUY_ICECREAM,
    info: "Second Redux Action",
  };
}

// REDUCER
// (previousState, action) => newState

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20,
// };

// -------------------------- REDUCERS -----------------------------

// Initializing seperate states for each items
const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

// Reducer function
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state, // making a copy of the state before changing the state
//         numOfCakes: state.numOfCakes - 1,
//       };

//     case BUY_ICECREAM:
//       return {
//         ...state, // making a copy of the state before changing the state
//         numOfIceCreams: state.numOfIceCreams - 1,
//       };
//     default:
//       return state;
//   }
// };

// -------------------------- REDUCER FUNCTIONS -----------------------------

const reducer_cake = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, // making a copy of the state before changing the state
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const reducer_icecream = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state, // making a copy of the state before changing the state
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

// -------------------------- REDUX STORE -----------------------------

// combining multiple reducer into a single reducer (root-reducer)
// combineReducer accepts -> object with properties
// object properties will be intialize to reducer
const rootReducer = combineReducers({
  cake: reducer_cake,
  iceCream: reducer_icecream,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
