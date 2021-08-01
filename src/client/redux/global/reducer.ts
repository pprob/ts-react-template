import {GlobalState} from './types';

const initialState: GlobalState = {
  test: true,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case '':
      return state;
    default:
      return state;
  }
};

export default globalReducer;
