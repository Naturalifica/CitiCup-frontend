<template>
  <div class="home-container _home-container">
    <div style="margin-top: 20px; margin-bottom: 30px;">
      <div class="sub-title">账户管理</div>
      <div v-if="this.$store.state.isLogin"></div>
      <div v-else>
        <router-link to="/account/login" style="font-size: large; color: #409EFF">点击登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return{
      form:{
        username: '',
        password: '',
      }
    }
  },
  methods: {
    addUser(form) {

    },
  },
  name: 'Account',
}
</script>

<style lang="less" scoped>
.sub-title{
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  height: 10vh;
  font:bolder 35px/50px Arial;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 5vh;
  color: #242424;
}
// 大于800px
@media only screen and (min-width: 800px){
  .home-container{
    font-size: 1vw;
    .login-sub-div{
      width: 100%;
      display: flex;
      justify-content: center;
      font-size: .5em;
      .middle{
        width: 30%;
        height: 100%;
        font-size: .8em;
        margin-left: 35%;
        margin-right: 35%;
      }
    }
  }
}

// 小于800px
@media only screen and (max-width: 800px){
  ._home-container{
    font-size: 1vw;
    .login-sub-div{
      width: 100%;
      display: flex;
      justify-content: center;
      font-size: .5em;
      .middle{
        width: 30%;
        height: 100%;
        font-size: .8em;
        margin-left: 35%;
        margin-right: 35%;
      }
    }
  }
}

.about-txt{
  font-size: 20px;
  font-weight: bold;

}
</style>