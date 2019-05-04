
// 查找字符串第N次出现的位置
export function strFindIndex(str, cha, num) {
  let x = str.indexOf(cha);
  for (var i = 0; i < num; i++) {
    x = str.indexOf(cha, x + 1);
  }
  return x;
}

// Get请求将params数据放到外层
interface Iconfig {
  params?: any,
}
export function filterGetReq(config: Iconfig) {
  if (config.params.params) {
    let paramsArr = Object.keys(config.params.params)
    if (paramsArr.length > 0) {
      paramsArr.map(e => {
        config.params[e] = config.params.params[e]
      })
    }
    delete config.params.params
  }
  return config
}

export function DateFormat(time: string, format: string) {
  let t = new Date(time);
  let tf = function (i: Number) {
    return (i < 10 ? '0' : '') + i
  };
  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, (a: string) => {
    switch (a) {
      case 'yyyy':
        return tf(t.getFullYear());
      case 'MM':
        return tf(t.getMonth() + 1);
      case 'mm':
        return tf(t.getMinutes());
      case 'dd':
        return tf(t.getDate());
      case 'HH':
        return tf(t.getHours());
      case 'ss':
        return tf(t.getSeconds());
      default:
        return a
    }
  })
}


