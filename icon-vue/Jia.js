import { createVNode as _createVNode } from "vue";
import JiaSvg from "../src/icon-js/es/Jia";

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

var Jia = function Jia(props, context) {
  return createSvgVNode(JiaSvg);
};

export default Jia;