import React, { Component } from 'react'
import CRouter from '../../router'

import {
  Layout
} from 'antd';

import MainMenu from '../MainMenu'
import Header from '../Header'

const {
  Content, Footer
} = Layout;


export default class Home extends Component {
  render() {
    return (
      <Layout>
        <MainMenu />
        <Layout>
          <Header></Header>

          <Content style={{ margin: '16px 16px' }}>
            <CRouter />
          </Content>

          <Footer style={{ textAlign: 'center' }}>
            Log System ©2019 Created by Flands
          </Footer>
        </Layout>
      </Layout>
    )
  }
}


