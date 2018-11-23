import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import AppCustomers from './components/AppCustomers.vue';
import AppProducts from './components/AppProducts.vue';
import AddCustomer from './components/AddCustomer.vue';
Vue.config.productionTip = false


Vue.use(VueRouter);

const routes = [
  {path: '/customers',component:AppCustomers},
  {path: '/products',component:AppProducts},
  {path: '/add-customer',component:AddCustomer}
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
