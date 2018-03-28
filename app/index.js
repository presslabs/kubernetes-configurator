/* eslint-disable */
import Vue from 'vue'
import VuePrism from 'vue-prism'
import VuePrismYaml from 'prismjs/components/prism-yaml'
import VueClipboard from 'vue-clipboard2'
import Toaster from 'v-toaster'

import App from './App.vue'

Vue.use(VuePrism)
Vue.use(VuePrismYaml)
Vue.use(VueClipboard)
Vue.use(Toaster, { timeout: 3000 })

new Vue({
  el: '#root',
  components: { App },
  template: '<App/>',
})
