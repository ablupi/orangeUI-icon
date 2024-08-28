
import {setupCounter} from './counter'

document.querySelector('#app').innerHTML = `
  <div>
    主程序页面
  </div>
`

setupCounter(document.querySelector('#counter'))

