import Vue from 'vue'
import App from './App.vue'
import VueFormulate from '@braid/vue-formulate'

Vue.config.productionTip = false

Vue.use(VueFormulate, {validationNameStrategy: ['validationName', 'label', 'name', 'type']})
new Vue({
  render: h => h(App),
}).$mount('#app')
