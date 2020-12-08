import Vue from 'vue'
import Contact from './Contact.vue'
import Content from './Content.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

import App from './App.vue'

Vue.component('contact-component', Contact);
Vue.component('content-component', Content);
Vue.component('header-component', Header);
Vue.component('footer-component', Footer);

new Vue({
  el: '#app',
  render: h => h(App)
})
