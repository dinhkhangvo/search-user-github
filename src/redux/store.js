import { applyMiddleware, compose, createStore } from "redux"
import reducers from "./reducers/index"
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, {},
   composeEnhencers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
);

export default store;