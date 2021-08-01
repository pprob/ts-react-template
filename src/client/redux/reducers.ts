import {History} from 'history';
import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

const createRootReducer = (history: History) => {
  const appReducers = {
    router: connectRouter(history),
  };
  return combineReducers(appReducers);
};

export default createRootReducer;
