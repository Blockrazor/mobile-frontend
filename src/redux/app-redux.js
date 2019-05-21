import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

//Initial State

const InitialState = {
    loggedIn: false,
    user: null,
};

//Reducer

const reducer = (state = InitialState, action) => {
    switch(action.type){
        case "setLoggedIn":
            return { ...state, loggedIn: action.loggedIn, user: action.user}
        default: return state;
    }

    return state;
};

//Store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };


//action creator
const setLoggedIn = (logging, user) => {
    return {
        type: "setLoggedIn",
        loggedIn: logging,
        user: user,
    }
}

export {setLoggedIn};