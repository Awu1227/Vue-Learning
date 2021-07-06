<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <AdvanceUse/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import EventDemo from './components/BaseUse/EventDemo.vue'
//import ComponentDemo from './components/ComponentsDemo/Index.vue'
import AdvanceUse from './components/AdvanceUse/AdvanceUse.vue'
//import NextTick from './components/AdvanceUse/NextTick.vue'
// import VuexUse from './components/Vuex/VuexUse.vue'
 //import VueRouter from './components/VueRouter/VueRouter.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
    // EventDemo
    // FormDemo
    AdvanceUse
    //NextTick
    //VuexUse
    //VueRouter
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
