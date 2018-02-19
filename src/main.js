import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

import App from './App.vue'

Vue.use(VueScrollTo)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
