import Vue from 'vue'
// import App from './App.vue'
// import Form from './Form.vue'
import Directives from './Directives.vue'

Vue.directive('momo', {
  bind(el, binding, vnode) {
    el.style.color = binding.value;
  }
});

new Vue({
  el: '#app',
  render: h => h(Directives)
})
