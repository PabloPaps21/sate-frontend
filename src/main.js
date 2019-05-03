import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;
Vue.use(VueScrollTo, {
  duration: 500,
  easing: 'ease',
  offset: -200,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
