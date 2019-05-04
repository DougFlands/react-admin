import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import routesConfig from './config';



export default class CRouter extends Component {
  render() {
    return (
      <Switch>
        {
          Object.keys(routesConfig).map(key =>
            routesConfig[key].map(r => {
              const route = r => {
                const Component = r.component
                return (
                  <Route
                    key={r.route || r.key}
                    exact
                    path={r.route || r.key}
                    render={props => {
                      return <Component />
                      // return r.login
                      // ? <Component {...merge} />
                      // : this.requireLogin(<Component {...merge} />, r.auth)
                    }}
                  />
                )
              }
              return r.component ? route(r) : r.subs.map(r => { return route(r) });
            })
          )
        }
        <Route render={() => <Redirect to="/index/dashboard" />} />
      </Switch>
    )
  }
}



