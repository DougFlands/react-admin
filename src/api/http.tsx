import axios from 'axios'
import store from '../store'
import { actionCreators } from '../common/store'
import { filterGetReq } from '../util'
import config from '../config'

import qs from 'qs'
import {
  message
} from 'antd'
import errinfo from './errinfo'

axios.defaults.timeout = 10000;
axios.defaults.baseURL = config.API_BASEURL;

let state = null

setTimeout(() => {
  state = store.getState()
}, 0);

axios.get = (url, params) => {
  return axios.request({
    url: url,
    method: 'get',
    params: params || {},
  })
}

// http request 拦截器
axios.interceptors.request.use(
  config => {
    let sessionid = 'state.common.sessionid'
    if (config.method === 'get') {
      sessionid && (config.params.sessionid = sessionid)
      config = filterGetReq(config)
      config.params.t = Date.now()
      config.params.sessionid = sessionid
    } else if (config.method === 'post') {
      sessionid && (config.data.sessionid = sessionid)
      config.data = qs.stringify(config.data)
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    let data = response.data
    if (data.errcode !== 0) {
      message.error(errinfo[data.errinfo] || data.errinfo);
      return Promise.reject(data)
    }
    return data.data;
  },
  error => {
    return Promise.reject({
      errcode: error.response.status || error.status || error
    })
  }
)

export default axios;
