// 此文件为自动生成
import { createVNode as _createVNode } from "vue";
import AddSvg from "../icon/es/Add";

let style = { height: '1rem', width: '1rem' }

const objectSpread = (target, props) => {
  return { ...target.attributes, ...props }
}

const createSvgVNode = (icon, props = {}) => {
  const content = []
  if (props.style) {
    style = {...props.style, ...style}
    props.style.height = style['font-size'] || style.fontSize || style.height
    props.style.width = style['font-size'] || style.fontSize || style.width
  }
  else {
    props = {...props}
    props.style = style
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
  return _createVNode(icon.name, objectSpread(icon, props), content);
}

var Add = (props, context) => {
  return createSvgVNode(AddSvg, props);
};

Add.displayName = 'Add';
Add.inheritAttrs = false;

export default Add;