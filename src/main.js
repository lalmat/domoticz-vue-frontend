import Vue from 'vue';
Vue.config.productionTip = false;

// Style - Bootstrap Vue
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Icons
import '@fortawesome/fontawesome-free/css/all.css'

// Vue Router
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from "./routes"; 

// Starting App
import App from './App.vue';
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
