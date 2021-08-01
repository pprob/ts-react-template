import React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import {ConnectedRouter} from 'connected-react-router';
import {History} from 'history';

type Props = {
  history: History;
  store: Store;
  children: React.ReactNode;
};

const Providers: React.FC<Props> = ({history, store, children}: Props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>{children}</ConnectedRouter>
  </Provider>
);

export default Providers;
