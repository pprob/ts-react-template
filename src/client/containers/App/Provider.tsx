import React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import {ConnectedRouter} from 'connected-react-router';
import {History} from 'history';
import ThemeProvider from './ThemeProvider';

type Props = {
  history: History;
  store: Store;
  children: React.ReactNode;
};

const Providers: React.FC<Props> = ({history, store, children}: Props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider>{children}</ThemeProvider>
    </ConnectedRouter>
  </Provider>
);

export default Providers;
