import React from 'react';
import { Route } from 'react-router-dom';

// Components
import DefaultLayout from '../pages/_layouts/Default';

interface RouterWrapperProps {
  component: React.FC<any>;
  path: string;
  exact?: boolean;
}

const RouterWrapper: React.FC<RouterWrapperProps> = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props: any) => (
      <DefaultLayout>
        <Component {...props} />
      </DefaultLayout>
    )}
  />
);

export default RouterWrapper;
