import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route, BrowserRouter, Switch, } from 'react-router-dom'

import { Login } from './common/Login'
import Home from './common/Home'
import page404 from './common/page404'


import {
  Layout
} from 'antd';
import store from './store'
import 'antd/dist/antd.css'

class App extends Component {
  state = {
    collapsed: false,
  };

  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <Layout style={{ minHeight: '100vh' }}>
                <Switch>
                  <Route path='/404' exact component={page404}></Route>
                  <Route path='/login' exact component={Login}></Route>
                  <Route path='/' exact component={Login}></Route>
                  <Route path='/index' component={Home}></Route>
                </Switch>
            </Layout>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}
export default App


