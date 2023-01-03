<template>
  <div id="app">
<!--    <com_1/>-->
    <NavTop/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import NavTop from "./components/CoComponents/NavTop.vue"
import Footer from "./components/CoComponents/Footer.vue"
import com_1 from "~/components/Trial/com_1.vue";
export default {
  name: 'App',
  components: {
    NavTop, Footer, com_1
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