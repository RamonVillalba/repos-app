import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Route from './Route';

// Components
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
// import NoMatch from '../pages/NoMatch';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/details/:name" component={Details} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
