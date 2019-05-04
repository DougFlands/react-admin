import React, { Component } from 'react';
import { Menu, Icon, Layout } from 'antd';
import { actionCreators } from './store';
import { connect } from 'react-redux'
import style from './style.scss';
import { Link } from 'react-router-dom';
import routeConfig from '../../router/config'

const SubMenu = Menu.SubMenu;
const {
  Sider,
} = Layout;

interface Istate {
}

interface Iprops {
  collapsed: boolean,
  handleChangeCollapsed: any,
}

const menuItem = (route) => {
  return (
    <Menu.Item key={route.key}>
      <Link to={route.key} >
        <Icon type={route.icon} />
        <span>{route.title}</span>
      </Link>
    </Menu.Item>
  )
}


class MainMenu extends Component<Iprops, Istate> {
  render() {
    const { collapsed, handleChangeCollapsed } = this.props
    return (
      <Sider
        className={style.wrap}
        collapsible
        collapsed={collapsed}
        onCollapse={() => handleChangeCollapsed(collapsed)}
      >
        <div className={style.title}>
          <img src="/logo.png" alt="" />
          <p>Log Sys</p>
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
          {
            routeConfig.menus.map(menu => {
              if (menu.subs) {
                return <SubMenu key={menu.key} title={<span><Icon type={menu.icon} /><span>{menu.title}</span></span>}>
                  {
                    menu.subs.map(sub => {
                      return menuItem(sub)
                    })
                  }
                </SubMenu>
              } else {
                return menuItem(menu)
              }
            })
          }
          {/* <Menu.Item key="1">
            <Link to='/index/home' >
              <Icon type="pie-chart" />
              <span>测试</span>
            </Link>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>接口管理</span></span>}>
            <Menu.Item key="2">
              <Link to='/index/multipleTabs'>
                <Icon type="pie-chart" />
                <span> 接口列表</span>
              </Link>
            </Menu.Item>
          </SubMenu> */}
        </Menu>
      </Sider >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    collapsed: state.menu.collapsed
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleChangeCollapsed(val: boolean) {
    val = !val
    dispatch(actionCreators.collapsedChangeAction(val))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu)
