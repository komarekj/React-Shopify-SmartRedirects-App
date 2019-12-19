import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

/**
 * Middlewaress
 */
const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);
}

/**
 * Store
 */
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
