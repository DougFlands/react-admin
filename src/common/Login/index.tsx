import React, { Component } from 'react'
import { Tabs, Layout } from 'antd';
import style from './style.scss'
import LoginForm from './components/loginForm'
import { RegisterForm } from './components/registerForm'

const TabPane = Tabs.TabPane;
const {
  Header, Content, Footer
} = Layout;

interface Iprops {
}

interface Istate {
}

export class Login extends Component<Iprops, Istate> {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  callback(key) {
    console.log(key)
  }

  render() {
    return (
      <Layout className={style.wrap}>
        <div className={style.title}>
          <img src="/logo.png" alt="" />
          <span>Log System</span>
        </div>

        <Content>
          <Tabs defaultActiveKey="Login" onChange={this.callback} className={style.tabs} animated={false}>
            <TabPane tab="邮箱登录" key="Login">
              <LoginForm></LoginForm>
            </TabPane>
            {/* <TabPane tab="注册" key="Register">
              <RegisterForm></RegisterForm>
            </TabPane> */}
          </Tabs>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Log System ©2019 Created by Flands
        </Footer>
      </Layout>
    )
  }
}


