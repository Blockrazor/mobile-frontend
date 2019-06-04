import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import Meteor, { withTracker } from "react-native-meteor";
//Initial State

const InitialState = {
  currency: {}
};

//Reducer

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case "setCurrency":
      return { ...state, currency: action.currency };
    default:
      return state;
  }
};

//Store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };

//action creator


const setCurrency = currency => {
  return {
    type: "setCurrency",
    currency: currency
  };
};

export { setCurrency };

const getCurrencies = () => {
  return function(dispatch) {
    Meteor.subscribe("approvedcurrencies", {
      onReady: function() {
        Meteor.call("getTotalCurrencies", (err, data) => {
            var r = Math.floor(Math.random() * data);
            var currency = Meteor.collection("currencies").findOne({}, { skip: r });
            dispatch(setCurrency(currency));
          });
      }
    });
  };
};

export { getCurrencies };