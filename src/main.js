// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
var moment = require('moment')
moment().format()
Vue.use(VueRouter)
import VeeValidate, { Validator } from 'vee-validate'
Validator.installDateTimeValidators(moment)
Vue.use(VeeValidate)
import App from './App'
import Home from './components/Home'
import Login from './components/Login'
import Confirmation from './components/Confirmation'

Vue.config.productionTip = false

const routes = [
{ path: '/', component: Login },
{path: '/home', component: Home},
{path: '/confirmation', component: Confirmation}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
