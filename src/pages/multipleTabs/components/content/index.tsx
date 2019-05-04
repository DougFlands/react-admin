import React, { Component } from 'react'
import {strFindIndex} from '@/util'

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles/hljs';

import {
  Switch, Card
} from 'antd';
import style from './style.scss'

let str = `01-18 15:47:08.907 [nioEventLoopGroup-8-3] INFO  com.zdd.admin.base.XHandler -XHandler.responseContent:{"errcode":0,"data":{"total":9,"data":[{"top_companyid":"0","companyid":"100008","website":"http://www.dixintong.com","kftel":"4007008800","level":"0","name":"迪信通总公司","tel":"4007008800","manager_info":{},"managerid":"0","type":"D-Phone","linkman":"迪信通"},{"top_companyid":"0","companyid":"100009","website":"www.yidong.com","kftel":"10086","level":"0","name":"中国移动总公司","tel":"13900000000","manager_info":{},"managerid":"0","type":"CMCC","linkman":"移动"},{"top_companyid":"0","companyid":"100010","website":"www.liantong.com","kftel":"10010","level":"0","name":"中国联通总公司","tel":"13222222222","manager_info":{},"managerid":"0","type":"CUCC","linkman":"联通"},{"top_companyid":"0","companyid":"100011","website":"www.dianxin.com","kftel":"10000","level":"0","name":"中国电信总公司","tel":"13012310000","manager_info":{},"managerid":"0","type":"CTCC","linkman":"电信"},{"top_companyid":"0","companyid":"100028","website":"https://www.5uzdd.com","kftel":"18694062393","level":"0","name":"北京组无忧科技有限公司","tel":"18701690866","manager_info":{},"managerid":"0","type":"","linkman":"胡化吉"},{"top_companyid":"0","companyid":"100029","website":"www.taipingyang.com","kftel":"40088668866","level":"0","name":"迪信通青岛分公司","tel":"13998745624","manager_info":{},"managerid":"0","type":"D-Phone","linkman":"小帅"},{"top_companyid":"0","companyid":"100030","website":"www.taipingyang.com","kftel":"4005552842","level":"0","name":"迪信通青岛分公司","tel":"13965421515","manager_info":{},"managerid":"0","type":"D-Phone","linkman":"溜溜"},{"top_companyid":"0","companyid":"100031","website":"baidu.com","kftel":"400","level":"0","name":"迪信通上海","tel":"","manager_info":{},"managerid":"0","type":"D-Phone","linkman":""},{"top_companyid":"0","companyid":"100033","website":"www.17zdd.cn","kftel":"4000000000","level":"0","name":"深圳测试公司","tel":"","manager_info":{},"managerid":"0","type":"D-Phone","linkman":""}],"pagesize":20,"pagenum":1},"errinfo":""}`

let str1 = ''
if (str.indexOf('responseContent')) {
  let i = strFindIndex(str, ':', 2)
  str1 = str.slice(i + 1, str.length)
  str = str.slice(0, i + 1 ) + '\n' + JSON.stringify(JSON.parse(str1), null, 2)
}

interface Istate {
  loading: boolean
}

export default class Content extends Component<any, Istate> {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }

  onChange = (checked) => {
    this.setState({ loading: !checked });
  }

  render() {
    const { loading } = this.state;
    return (
      <div className={style.wrap}>
        <Switch checked={!loading} onChange={this.onChange} />
        <Card loading={loading} className={`${style.card} ${this.state.loading ? '' : style.card70}`}>
          <SyntaxHighlighter showLineNumbers language='json' style={docco}>
            {
              `01-18 15:47:08.907 [nioEventLoopGroup-8-3] INFO  com.zdd.admin.base.XHandler -XHandler.responseContent:{"errcode":0,"data":{"sessionid":"7344d15fcbfce65ba6cfa0601e80ba79hyo90tdq","username":"18376695004"},"errinfo":""}
01-18 15:47:09.192 [nioEventLoopGroup-4-1] INFO  io.netty.handler.logging.LoggingHandler -[id: 0x09995099, L:/0.0.0.0:18800] RECEIVED: [id: 0xa75463e3, L:/127.0.0.1:18800 - R:/127.0.0.1:55038]
01-18 15:47:09.193 [nioEventLoopGroup-8-4] INFO  com.zdd.admin.base.XHandler -XHandler.requestMethod=GET
${str}
`
            }
          </SyntaxHighlighter>
        </Card>
      </div>
    )
  }
}

