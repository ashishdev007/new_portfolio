import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes';

const TheContent = () => {
  return (
    <Switch>
      {routes.map((route, id) => {
        return (
          <Route
            key={id}
            path={route.path}
            exact={route.exact}
            name={route.name}
            component={route.component}
          />
        );
      })}
    </Switch>
  );
};

export default TheContent;
