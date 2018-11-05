// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import babel from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
// import Mint from 'mint-ui'
import fastclick from 'fastclick'
// import 'mint-ui/lib/style.css'
// import '../static/css/main.css'
import 'style/index.styl'

import VueResource from 'vue-resource'

fastclick.attach(document.body);
Vue.use(VueResource);
// Vue.use(Mint);

Vue.config.productionTip = false


/* eslint-disable no-new */



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})