import * as React from "react";
import { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router';

import { Avatar, Layout, Menu, Dropdown, Icon } from 'antd';
import 'antd/dist/antd.css'
import style from './style.scss';
import { actionCreators } from '../store'

const {
  Header,
} = Layout;

interface Istate {

}

interface Iprops {
  sessionid: string
  username: string
  handleLogout: Function
}

class MainMenu extends Component<Iprops, Istate> {

  public render() {
    const { username, sessionid, handleLogout } = this.props

    if (!sessionid) {
      return (<Redirect to="/login" />);
    } else {
      return (
        <Header className={style.wrap}>
          <Dropdown overlay={
            <Menu>
              <Menu.Item key="0">
                <Icon type="setting" />个人设置
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="1" onClick={ _ => handleLogout() }>
                <Icon type="poweroff" />退出登录
              </Menu.Item>
            </Menu>
          } placement="topRight" className={style.userInfo}>
            <div className="ant-dropdown-link">
              <Avatar icon="user" />
              <span className={style.userName}>{ username }</span>
            </div>
          </Dropdown>
        </Header>
      )
    }

  }
}

const mapStateToProps = (state) => {
  return {
    username: state.common.username,
    sessionid: state.common.sessionid
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleLogout() {
    const action = actionCreators.logout()
    dispatch(action)
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu)
