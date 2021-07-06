import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

// Components
import Dashboard from '../pages/Dashboard';
// import Details from '../pages/Details';
// import NoMatch from '../pages/NoMatch';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
  </Switch>
);

export default Routes;
