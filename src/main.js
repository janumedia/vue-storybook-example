import Vue from 'vue'
import App from './App.vue'
import router from './router'

import DefaultLayout from './layouts/default'
import NoNavigationLayout from './layouts/no-navigation'

Vue.config.productionTip = false

//register layouts
Vue.component('default-layout', DefaultLayout);
Vue.component('no-nav-layout', NoNavigationLayout);

//register async components
Vue.component('custom-button', () => import(/* webpackChunkName: "custom-button" */ '@/components/core/Button'));
Vue.component('input-text', () => import(/* webpackChunkName: "input-text" */ '@/components/core/Input'));
Vue.component('checkbox', () => import(/* webpackChunkName: "checkbox" */ '@/components/core/Checkbox'));
Vue.component('radio-button', () => import(/* webpackChunkName: "radio-button" */ '@/components/core/RadioButton'));
Vue.component('switch-button', () => import(/* webpackChunkName: "switch-button" */ '@/components/core/SwitchButton'));

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
