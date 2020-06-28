import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import hrmRoutes from '../../admin/router';

const routes = [  
  ...hrmRoutes,
];

class AppRouter extends Component {
  render() {
    const { style } = this.props;
    return (
      <div style={style}>
        <Switch>
        {routes.map(singleRoute => {
          const { path, exact, ...otherProps } = singleRoute;
          return (
            <Route
              exact={exact === false ? false : true}
              key={singleRoute.path}
              path={`/${singleRoute.path}`}
              {...otherProps}
            />
          );
        })}
        </Switch>
      </div>
    );
  }
}

export default AppRouter;
