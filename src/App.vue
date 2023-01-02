<template>
  <div id="app">
    <NavTop/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import NavTop from "./components/CoComponents/NavTop.vue"
import Footer from "./components/CoComponents/Footer.vue"

export default {
  name: 'App',
  components: {
    NavTop, Footer
  }
}
</script>

<style lang="less">
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: white;
  width: 100%;
}
</style>

<style scoped>

</style>