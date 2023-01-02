<template>
  <div class="nav-container _nav-container">
    <div class="nav-icon _nav-icon"><i class="iconfont icon-menu" @click="openMenu()"></i></div>
    <div class="apple-icon _apple-icon"><i class="iconfont icon-apple" @click="$router.push('/home')"></i></div>
    <div id="navID" class="main-nav-list _main-nav-list">
      <div class="nav-list-close"><i @click="closeMenu()" class="iconfont icon-close"></i></div>
      <div @click="routerPush('/')">首页</div>
      <div @click="routerPush('/'); toAboutUs()">关于我们</div>
      <div @click="routerPush('/account')">账户</div>
      <div style="width: 125px; align-items: center; justify-content: center">
        <el-dropdown>
          <div>
            <el-button type="default" text style="color: white" plain>做市服务
              <el-icon>
                <ArrowDownBold/>
              </el-icon>
            </el-button>
          </div>

          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="routerPush('/market')">行情揭示</el-dropdown-item>
              <el-dropdown-item @click="routerPush('/trading')">交易管理</el-dropdown-item>
              <el-dropdown-item @click="routerPush('/strategy')">策略管理</el-dropdown-item>
              <el-dropdown-item @click="routerPush('/risk')">风险控制</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import Home from "~/components/Home/Home.vue";
import {onMounted, ref} from "vue";

export default {
  name: 'NavTop',
  components: {
    Home
  },
  data() {
    return {
      navListShowFlag:false
    }
  },
  methods: {
    routerPush(to){
      this.$router.push(to)
      // 跳转之后，记得关闭菜单（在屏幕宽度小于800的时候才生效）
      let dom = document.getElementById('navID')
      if(dom.classList.contains('navlistshow')){
        dom.classList.remove('navlistshow')
      }
    },
    //当屏幕宽度小于800的时候，点击菜单图标，显示隐藏的菜单
    openMenu(){
      let dom = document.getElementById('navID')

      if(dom.classList.contains('navlistshow')){
        return
      }
      dom.classList.add('navlistshow')
    },
    //当屏幕宽度小于800的时候，点击关闭按钮， 关闭菜单
    closeMenu(){
      let dom=document.getElementById('navID')
      if(dom.classList.contains('navlistshow')){
        dom.classList.remove('navlistshow')
      }
    },

  },
}
</script>

<style lang="less" scoped>


// 大于800px
@media only screen and (min-width: 800px){
  .nav-container{
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background-color: rgb(51, 51, 51);
    //background-color: black;
    color:rgb(214, 214, 214);
    .nav-icon{
      display:none;
      cursor: pointer;
    }
    .nav-icon:hover{
      color:white;
    }
    .apple-icon{
      width: 100px;
      cursor: pointer;
    }
    .apple-icon:hover{
      color:white;
    }
    .main-nav-list{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      .nav-list-close{
        display: none;
      }
      div{
        text-align: center;
        height: 40px;
        line-height: 40px;
        width: 95px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
      }
      div:hover{
        color:white;
      }
    }
    .shop-car{
      width: 100px;
      cursor: pointer;
    }
    .shop-car:hover{
      color:white;
    }
  }
}



// 小于800px
@media only screen and (max-width: 800px){
  ._nav-container{
    top: 0;
    display: flex;
    align-items: center;
    justify-content:space-between;
    height: 40px;
    background-color: rgb(51, 51, 51);
    color:rgb(214, 214, 214);
    position: relative;
    ._nav-icon{
      width: 100px;
    }
    ._apple-icon{
      width: 100px;
    }
    ._main-nav-list{
      display: flex;
      flex-direction: column;
      position: absolute;
      //屏幕宽度小于800，默认清空下菜单是关闭的
      left: 0;
      width: 100%;
      height: 100%;
      color:rgb(214, 214, 214);
      background-color: rgba(0, 0, 0,0.95);
      top: 40px;
      padding: 0 40px;
      z-index: 998;
      div{
        text-align: left;
        height: 40px;
        line-height: 40px;
        width: 100%;
        border-bottom: 1px solid rgb(214, 214, 214);
      }
    }
    .shop-car{
      width: 100px;
    }
  }
  .nav-list-show{
    display: block !important;
  }
}

</style>