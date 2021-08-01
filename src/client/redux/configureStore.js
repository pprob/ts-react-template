import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createRootReducer from './reducers';
import {routerMiddleware} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

// Todo - refactor to typescript. resolve type errors.

const configureStore = (history, initialState = {}) => {
  const enhancers = [];

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [routerMiddleware(history), sagaMiddleware];
  enhancers.push(applyMiddleware(...middlewares));

  const composeEnhancers = composeWithDevTools({});

  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(...enhancers),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
