import Vue from 'vue'
// import App from './App.vue'
// import Form from './Form.vue'
import Directives from './Directives.vue'

Vue.directive('momo', {
  bind(el, binding, vnode) {
    el.style.color = 'green';
  }
});
Vue.directive('moto', {
  bind(el, binding, vnode) {
    el.style.color = binding.value;
  }
});
Vue.directive('custom', {
  
  bind(el, binding, vnode) {
    var delay = 0;
    if (binding.modifiers['delayed']){
      delay = 1000;
    } 
    setTimeout(()=>{
      if (binding.agr != 'background') {
        el.style.color = binding.value;
      } else {
        el.style.backgroundColor = binding.value;
      }
    },delay);

    
  }
});
new Vue({
  el: '#app',
  render: h => h(Directives)
})
