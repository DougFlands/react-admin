import React, { Component, SFC } from 'react';
import { Input, Tree } from 'antd';
const { TreeNode } = Tree;
const Search = Input.Search;

interface Iprops {
  addTabs: Function
}

interface Istate {
  tree: any,
  searchValue: string,
  expandedKeys: string[],
  autoExpandParent: boolean
}

let treeList = []

export class TabsMain extends Component<Iprops, Istate> {
  constructor(props) {
    super(props);
    const tree = [
      {
        title: 'admin',
        key: 'admin',
        child: [
          {
            title: 'book',
            key: 'admin-book',
            child: [
              {
                title: 'list',
                key: 'admin-book-list',
              },
              {
                title: 'info',
                key: 'admin-book-info',
              },
            ]
          },
          {
            title: 'bookbag',
            key: 'admin-bookbag',
            child: [
              {
                title: 'page',
                key: 'admin-bookbag-list',
              },
              {
                title: 'data',
                key: 'admin-bookbag-info',
              },
            ]
          }
        ]
      }
    ]
    this.state = {
      searchValue: '',
      autoExpandParent: false,
      expandedKeys: [],
      tree,
    }
  }

  mapTree = tree => {
    if (tree.child) {
      return tree.child.map(el => {
        const index = el.title.indexOf(this.state.searchValue);
        const beforeStr = el.title.substr(0, index);
        const afterStr = el.title.substr(index + this.state.searchValue.length);
        const title = index > -1 ? (
          <span>
            {beforeStr}
            <span style={{ color: '#f50' }}>{this.state.searchValue}</span>
            {afterStr}
          </span>
        ) : <span>{el.title}</span>;

        if (el.child) {
          return <TreeNode title={title} key={el.key}>
            {this.mapTree(el)}
          </TreeNode>
        } else {
          return <TreeNode title={title} key={el.key} oldtitle={el.title}></TreeNode>
        }
      })
    }
  }

  setTree = (tree) => {
    if (tree.child) {
      tree.child.forEach(el => {
        treeList.push({
          title: el.title,
          key: el.key
        })
        if (el.child) {
          { this.setTree(el) }
        }
      })
    }

  }

  onExpand = (expandedKeys) => {
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }

  getParentKey = (key, tree) => {
    let parentKey;
    for (let i = 0; i < tree.length; i++) {
      const node = tree[i];
      if (node.child) {
        if (node.child.some(item => item.key === key)) {
          parentKey = node.key;
        } else if (this.getParentKey(key, node.child)) {
          parentKey = this.getParentKey(key, node.child);
        }
      }
    }
    return parentKey;
  };

  onChange = (e) => {
    const value = e.target.value;
    let expandedKeys = treeList.map((item) => {
      if (item.title.indexOf(value) > -1) {
        return this.getParentKey(item.key, this.state.tree);
      }
      return null;
    }).filter((item, i, self) => item && self.indexOf(item) === i)
    if (!value) {
      expandedKeys = []
    }
    this.setState({
      expandedKeys,
      searchValue: value,
      autoExpandParent: true,
    });
  }

  onSelect = (selectedKeys, info) => {
    if (info.selectedNodes.length === 0 || info.selectedNodes[0].props.children) return
    this.props.addTabs(selectedKeys[0], info.selectedNodes[0].props.oldtitle)
  }

  render() {
    return (
      <div style={{ margin: '10px 0 0 10px' }}>
        <Search style={{ marginBottom: 8 }} placeholder="Search" onChange={this.onChange} />

        <Tree
          onExpand={this.onExpand}
          expandedKeys={this.state.expandedKeys}
          autoExpandParent={this.state.autoExpandParent}
          showLine
          onSelect={this.onSelect}
        >
          {
            this.state.tree.map(tree =>
              <TreeNode title={tree.title} key={tree.key}>
                {
                  this.mapTree(tree)
                }
              </TreeNode>
            )
          }
        </Tree>
      </div>
    )
  }

  componentDidMount() {
    this.state.tree.forEach(e => {
      this.setTree(e)
    });
  }
}

export default TabsMain