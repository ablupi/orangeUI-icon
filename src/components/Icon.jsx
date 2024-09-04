// jsx基础组件
import { stringify } from 'svgson'
const App = (props, context) => {
  // const p = { ...props, ...context.attrs };
  const { icon } = {...props}
  console.log('在基础组件内输出')
  console.log('props')
  console.log(props)
  console.log('context')
  console.log(context)
  return stringify(icon)
  // return <div>傻逼</div>;
}

export default App