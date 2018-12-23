import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import product from '@/components/inline-product.vue'
Vue.component('inline-product', product)

import pop from '@/directives/pop.js'
Vue.directive('pop', pop)

new Vue({
	render: h => h(App),
}).$mount('#app')


