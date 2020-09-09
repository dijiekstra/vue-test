import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCodeMirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

import jshint from "jshint";

window.JSHINT = jshint.JSHINT;

Vue.use(VueCodeMirror)
Vue.config.productionTip = false
Vue.use(ElementUI);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
