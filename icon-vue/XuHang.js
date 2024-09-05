import { createVNode as _createVNode } from "vue";
import XuHangSvg from "../icon/es/XuHang";

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

var XuHang = function XuHang(props, context) {
  return createSvgVNode(XuHangSvg);
};

export default XuHang;