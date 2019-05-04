import * as React from "react";
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css'

interface IHeaderProps {
  handleInputChange: any
  handleBtnClick: any
  handleItemDelete: any
  inputValue: string
  list: []
}

const TodoListUI: React.SFC<IHeaderProps> = (props: IHeaderProps) => {
  return (
    <div style={{ margin: '10px 0 0 10px' }}>
      <Input placeholder="输入文字" style={{ width: '300px', marginRight: '20px' }} value={props.inputValue} onChange={props.handleInputChange} />
      <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      <List
        header={<div>list</div>}
        bordered={true}
        dataSource={props.list}
        // style={{ width: '300px', marginRight: '20px' }}
        renderItem={(item, index) => (
          <div onClick={() => props.handleItemDelete(index)}>
            <List.Item>
              {item}
            </List.Item>
          </div>
        )}
      />
    </div>
  )
}


export default TodoListUI