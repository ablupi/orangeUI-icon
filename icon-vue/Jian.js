import { createVNode as _createVNode } from "vue";
import JianSvg from "../icon/es/Jian";

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

var Jian = function Jian(props, context) {
  return createSvgVNode(JianSvg);
};

export default Jian;