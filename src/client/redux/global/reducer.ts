import {GlobalState} from './types';
import {Themes} from './enums';

const initialState: GlobalState = {
  test: true,
  theme: Themes.Light,
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
