// 此图标文件为自动生成
import { createVNode as _createVNode } from "vue";
import ContinuationSvg from "../icon/es/Continuation";

const objectSpread = (target, props) => {
  return {...target.attributes, ...props}
}

const createSvgVNode = (icon, props = {}) => {
  const content = []
  if (icon.children && icon.children.length && icon.children.length>0) {
    for (const child of icon.children) {
      content.push(createSvgVNode(child)) 
    }
  }
  return _createVNode(icon.name, objectSpread(icon, props), content);
}

var Continuation = (props, context) => {
  return createSvgVNode(ContinuationSvg, props);
};

export default Continuation;