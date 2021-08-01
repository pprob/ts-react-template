import React from 'react';
import {Switch, Route} from 'react-router-dom';

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path="/" render={() => <div>Home page</div>} />
    </Switch>
  );
};

export default Routes;
