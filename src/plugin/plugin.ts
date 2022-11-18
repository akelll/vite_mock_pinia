import {App} from "vue";
// import HelloWorld from "../components/HelloWorld.vue";


export default {
  install: (app:App, options?:any) =>{
    // app.component("HelloWorld",HelloWorld)
    app.directive('focus', (el, binding) => {
      // 这会在 `mounted` 和 `updated` 时都调用
      el.focus()
    })
    app.directive("permission",(el,binding) =>{
      if (binding.value === 1) return
      // 其他情况认为没有权限，需要隐藏掉界面上的 DOM 元素
      if (el.parentNode) {
        el.parentNode.removeChild(el)
      } else {
        el.style.display = 'none'
      }
    })
    app.directive("isNumber",(el,binding)=>{

      const reg = /\d/
      if (reg.test(binding.value)){
        console.log(binding.value)
        el.innerHTML = binding.value
      }else {
        el.innerHTML = ''
      }
    })
    app.provide('msg','嘻嘻哈哈666')
    // app.config.globalProperties.$initZwlog = initZwlog
    // app.config.globalProperties.$zwlogPv = zwlogPv
    // app.config.globalProperties.$zwlogRecord = zwlogRecord
  }
}
