import React, { Component } from 'react';
import { Tabs } from 'antd';
import TabsMain from './components/main'
import Content from './components/content'

const TabPane = Tabs.TabPane;


interface Ipanes {
  title: string
  key: string
  closable?: boolean
}

interface Istate {
  newTabIndex: number
  activeKey: string
  panes: Ipanes[]
}

interface Iprops {
}

export class MultipleTabs extends Component<Iprops, Istate> {
  constructor(props) {
    super(props);
    const panes = []
    this.state = {
      activeKey: '0',
      newTabIndex: 0,
      panes,
    };
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  add = (key, title) => {
    const panes = this.state.panes;
    const activeKey = key;
    panes.push({ title, key: activeKey });
    this.setState({ panes, activeKey, newTabIndex: this.state.newTabIndex + 1 });
  }

  remove = (targetKey) => {
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (targetKey === this.state.activeKey) {
      this.setState({ panes, activeKey: '0' })
    } else {
      this.setState({ panes, })
    }
  }

  render() {
    return (
      <div>
        <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          <TabPane tab='控制台' key='0' closable={false}>
            {/* <SearchTree></SearchTree> */}
            <TabsMain addTabs={this.add}></TabsMain>
          </TabPane>
          {
            this.state.panes.map(
              pane =>
                <TabPane tab={pane.title} key={pane.key}>
                  <Content></Content>
                </TabPane>
            )
          }
        </Tabs>
      </div>
    );
  }
}



