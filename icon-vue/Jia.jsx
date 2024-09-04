"use strict";
// 此图标文件为自动生成
import Icon from '../src/components/Icon.jsx';
import JiaJson from '../src/icon-js/es/Jia.js';
import { stringify } from 'svgson'

const Jia = (props, context) => {
  const iconEl = stringify(JiaJson)
  console.log(JiaJson)
  // const p = { ...props, ...context.attrs };
  return iconEl
  // return <Icon icon={JiaJson}></Icon>;
};

export default Jia;