import React, { Component } from 'react'
import style from './style.scss'
import {
  Form, Input, Row, Col, Button,
} from 'antd';




interface Iprops {
  form: any
}

interface Istate {
  confirmDirty: boolean
}

class RegisterFormWrap extends Component<Iprops, Istate> {
  constructor(props) {
    super(props)
    this.state = {
      confirmDirty: false,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('表单值: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('您输入的两个密码不一致!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className={style.registerForm}>
        <Form.Item>
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: '请输入昵称!', whitespace: true }],
          })(
            <Input placeholder="昵称" />
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '请输入有效的 E-mail 地址!',
            }, {
              required: true, message: '请输入 E-mail 地址!',
            }],
          })(
            <Input placeholder="邮箱" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请输入密码!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password" placeholder="至少6位密码，区分大小写" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '请确认密码!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} placeholder="确认密码密码" />
          )}
        </Form.Item>


        <Form.Item>
          <Row gutter={8}>
            <Col span={16}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: '请输入验证码!' }],
              })(
                <Input placeholder="验证码" />
              )}
            </Col>
            <Col span={8}>
              <Button className={style.msgBtn}>获取验证码</Button>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">注册</Button>
        </Form.Item>
      </Form>
    );
  }
}


const RegisterForm = Form.create({})(RegisterFormWrap);

export { RegisterForm }
