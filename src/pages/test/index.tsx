import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux'
import { actionCreators } from './store'

interface Iprops {
  handleOut: any
}

class Test extends Component<Iprops, any> {
  handleSubmit = (e) => {
    this.props.handleOut()
    console.log('out!');
  }

  render() {
    return (
      <div>
        <p>首页</p>
        <Button type="primary" onClick={this.handleSubmit}>out</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => ({
  handleOut() {
    const action = actionCreators.loginAction()
    dispatch(action)
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Test)
