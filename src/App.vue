<template>
  <div id="app">
    <NavBar/>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import AppCustomers from './components/AppCustomers.vue';
import AppProducts from './components/AppProducts.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    AppCustomers,
    AppProducts,
    NavBar

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
