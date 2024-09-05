import { createVNode as _createVNode } from "vue";
import AddSvg from "../icon/es/Add";

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

var Add = function Add(props, context) {
  return createSvgVNode(AddSvg);
};

export default Add;