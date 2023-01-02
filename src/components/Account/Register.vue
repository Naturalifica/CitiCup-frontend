<template>
  <div class="home-container _home-container">
    <div style="margin-top: 70px; margin-bottom: 100px;">
      <div class="sub-title">注册您的账户</div>
      <div class="login-sub-div _login-sub-div">
        <div class="middle">
          <el-form :model="form" label-width="60px">
            <el-form-item label="用户名" style="font-size: medium" >
              <el-input v-model="form.username" placeholder="请输入用户名"/>
            </el-form-item>
            <el-form-item label="密码" style="font-size: medium">
              <el-input v-model="form.password" type="password" autocomplete="off" placeholder="请输入密码"/>
            </el-form-item>
            <el-button type="primary" text style="font-size: medium" @click="addUser(form)"
            >注册</el-button>
          </el-form>
        </div>
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
  name: 'Register',
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