import {createStore, applyMiddleware} from 'redux';
import { createLogger } from "redux-logger";
import gameReducer from './reducer';

const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
});

export const pStore = createStore(gameReducer,applyMiddleware(loggerMiddleware));
