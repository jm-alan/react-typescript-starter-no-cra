import { createStore, combineReducers, applyMiddleware, compose, StoreEnhancer } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({

});

let enhancer: StoreEnhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  enhancer = compose(applyMiddleware(thunk, logger));
}

export default function configureStore(preloadedState: any) {
  return createStore(rootReducer, preloadedState, enhancer);
}
