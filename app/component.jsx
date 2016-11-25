//ES6 模块加载器语法
import React from 'react';


var style = {
  color: '#666'
};
export default class Hello extends React.Component {
  render() {
    return (<h1 style={style}>Hello world</h1>);
  }
}
