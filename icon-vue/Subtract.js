// 此图标文件为自动生成
import { createVNode as _createVNode } from "vue";
import SubtractSvg from "../icon/es/Subtract";

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

var Subtract = (props, context) => {
  return createSvgVNode(SubtractSvg, props);
};

export default Subtract;