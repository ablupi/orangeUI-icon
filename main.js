import Add from './icon-vue/Add'
import Test from './src/test'

console.log(Add({style: 'font-size: 16px;color: #fff;'}))
// document.createElement('div')
// document.querySelector('#app').appendChild(Test())

document.querySelector('#app').innerHTML = Test()
