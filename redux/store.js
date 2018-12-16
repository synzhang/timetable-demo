import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';

const configureStore = () => {
  const middlewares = applyMiddleware()
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
  const store = createStore(rootReducer, {}, composeEnhancers(middlewares));

  return store;
};

export default configureStore;
