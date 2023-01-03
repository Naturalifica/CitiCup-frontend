<template>
  <div>同步修改state: {{$store.state.navTopAndHome.info.uname }}</div>
  <p>-----------------------------------------------</p>
  <div>异步修改state: {{$store.state.user.info.age}}</div>
  <p>-----------------------------------------------</p>
  <div>getters数据: {{this.$store.getters['user/format']}}</div>

  <button @click="handleClick">修改</button>
</template>

<script lang="js">
import {createStore} from "vuex";

export default {
  name: 'App',
  methods:{
    handleClick(){
      const store = createStore();
      console.log(store)
      store.commit('user/updateUname', 'Tom')
      store.dispatch('user/asyncUpdate', 23)
    }
  }
}
</script>
<style scoped>

</style>
