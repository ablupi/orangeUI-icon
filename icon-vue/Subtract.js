// 此图标文件为自动生成
import { createVNode as _createVNode } from "vue";
import SubtractSvg from "../icon/es/Subtract";

let style = { height: '1rem', width: '1rem' }

const objectSpread = (target, props) => {
  return { ...target.attributes, ...props }
}

const createSvgVNode = (icon, props = {}) => {
  const content = []
  
  if (props.style) {
    style = { ...style, ...props.style }  
    if (style['font-size'] || style.fontSize) {
      style.height = style['font-size'] || style.fontSize
      style.width = style['font-size'] || style.fontSize
    }
  }
  if (icon.children && icon.children.length && icon.children.length > 0) {
    for (const child of icon.children) {
      let pathProps = {}
      if (child.name == 'path' && style.color) {
        pathProps.fill = props.style.color
      }
      content.push(createSvgVNode(child, pathProps))
    }
  }
  props.style = style
  return _createVNode(icon.name, objectSpread(icon, props), content);
}

var Subtract = (props, context) => {
  return createSvgVNode(SubtractSvg, props);
};

Subtract.displayName = 'Subtract';
Subtract.inheritAttrs = false;

export default Subtract;