import Vue from 'vue'
import App from './App.vue'
import router from './router'

import DefaultLayout from './layouts/default'

Vue.config.productionTip = false

//register layouts
Vue.component('default-layout', DefaultLayout);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
