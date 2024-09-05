import { createVNode as _createVNode } from "vue";
import SubtractSvg from "../icon/es/Subtract";

const objectSpread = (target) => {
  return target.attributes
}

const createSvgVNode = (icon) => {
  const content = []
  if (icon.children && icon.children.length && icon.children.length>0) {
    for (const child of icon.children) {
      content.push(createSvgVNode(child)) 
    }
  }
  return _createVNode(icon.name, objectSpread(icon), content);
}

var Subtract = function Subtract(props, context) {
  return createSvgVNode(SubtractSvg);
};

export default Subtract;