import Jia from './icon-vue/Jia'


// document.createElement('div')
document.querySelector('#app').innerHTML = Jia()

// document.querySelector('#app').innerHTML = `
//   <div id="main">
//     主程序页面
//   </div>
// `


function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}


setupCounter(document.querySelector('#counter'))

