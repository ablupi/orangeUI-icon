// 此图标文件为自动生成
import { createVNode as _createVNode } from "vue";
import AddSvg from "../icon/es/Add";

let style = {height: '1rem', width: '1rem', color: ''}

const objectSpread = (target, props) => {
  return {...target.attributes, ...props}
}

const createSvgVNode = (icon, props = {}) => {
  const content = []
  if (props.style) {
    for (const item of props.style.split(';')) {
      if (!item) continue
      Object.defineProperty(style, item.split(':')[0], {
        value: item.split(':')[1].replace(/\s+/g, ''),
      })
    }
    if (icon.children && icon.children.length && icon.children.length>0) {
      for (const child of icon.children) {
        let pathProps = {}
        if (child.name == 'path' && style.color) {
          pathProps.fill = style.color
        }
        content.push(createSvgVNode(child, pathProps)) 
      }
    }
    if (style['font-size']) {
      style.height = style['font-size']
      style.width = style['font-size']
    }
    props.style = `height:${style.height};width:${style.width};${props.style}`
  }
  return _createVNode(icon.name, objectSpread(icon, props), content);
}

var Add = (props, context) => {
  console.log('图标内测试')
  console.log(props)
  return createSvgVNode(AddSvg, props);
};

export default Add;