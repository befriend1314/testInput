import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.prototype.getMsg = () => '222';

new Vue({
  render: h => h(App)
}).$mount('#app');
