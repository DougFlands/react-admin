import * as React from "react";
import { Component } from 'react';
import 'antd/dist/antd.css'
import store from './store'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getInitList } from './store/actionCreators'
import TodoListUI from './TodoListUI'
import style from './todo.scss';

interface Istate {
  inputVal: string,
  list: []
}

class TodoList extends Component<object, Istate> {

  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  public render() {
    console.log(style);
    return (
      <div className={style.todo}>
        <TodoListUI
          inputValue={this.state.inputVal}
          handleInputChange={this.handleInputChange}
          handleBtnClick={this.handleBtnClick}
          handleItemDelete={this.handleItemDelete}
          list={this.state.list}
        />
      </div>
    )
  }

  public componentDidMount() {
    const action = getInitList()
    store.dispatch(action)
  }

  public handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  public handleStoreChange() {
    this.setState(store.getState())
  }

  public handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  public handleItemDelete(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList;
