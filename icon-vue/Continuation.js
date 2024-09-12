// 此文件为自动生成
import { createVNode as _createVNode } from "vue";
import ContinuationSvg from "../icon/es/Continuation";

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

var Continuation = (props, context) => {
  return createSvgVNode(ContinuationSvg, props);
};

Continuation.displayName = 'Continuation';
Continuation.inheritAttrs = false;

export default Continuation;