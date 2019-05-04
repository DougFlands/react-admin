import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router';
import { Form, Icon, Input, Button, } from 'antd';
import style from './style.scss'
import { actionCreators } from '../../../store'


interface Iprops {
  form: any,
  handleLogin: any,
  sessionid: string
}

interface Istate {
}

class LoginFormWrap extends Component<Iprops, Istate> {
  constructor(props) {
    super(props)
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.handleLogin(values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { sessionid } = this.props

    if (sessionid) {
      return (<Redirect to="/index" />);
    } else {
      return (
        <Form onSubmit={this.handleSubmit} className={style.loginForm}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入邮箱地址!' }],
            })(
              <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="邮箱" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
            )}
          </Form.Item>
          <Form.Item>
            <div className={style.btm}>
              <Button type="primary" htmlType="submit" className={style.loginBtn}>
                登 录
            </Button>
              <a href="" className={style.textBtn}>忘记密码</a>
            </div>
          </Form.Item>
        </Form>

      )
    }
  }
}

const LoginForm = Form.create({})(LoginFormWrap);

const mapStateToProps = (state) => {
  return {
    sessionid: state.common.sessionid,
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleLogin(values) {
    const action = actionCreators.loginAction(values)
    dispatch(action)
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)