// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// css重置文件
import 'styles/reset.css'
// 移动端一像素边框
import 'styles/border.css'
// 移动端300毫秒点击延迟
import fastClick from 'fastclick'

import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
