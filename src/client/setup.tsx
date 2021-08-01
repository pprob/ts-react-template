import React from 'react';
import ReactDOM from 'react-dom';
import Providers from './containers/App/Provider';
import history from './utils/history';
import configureStore from './redux/configureStore';

const store = configureStore(history);

const AppContainer = () => (
  <Providers history={history} store={store}>
    <div>hello son</div>
  </Providers>
);

const render = () => {
  ReactDOM.render(<AppContainer />, document.getElementById('app'));
};

export default render;
