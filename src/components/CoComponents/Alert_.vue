<template>
  <div class="app-container">
    <div v-if="tapped">
      <el-button class="open-dialog-button" @click="changeState">{{hintTxt}}</el-button>
    </div>
    <div v-else class="dialog">
      <!-- 不透明遮罩 -->
      <div class="dialog-modal"></div>
      <!-- 主体 -->
      <div class="dialog-main">
        <div class="dialog-head">
          <button class="dialog-close-button icon-botton" @click="changeState">x</button>
        </div>
        <!-- 内容区 -->
        <div class="dialog-body">
          <h2>{{alertTitle}}</h2>
          <img :src="alertBackgroundImgSrc" alt="">
          <p>{{alertContent}}</p>
          <div><button class="dialog-close-button text-button" @click="changeState">关闭弹窗</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert_",
  data(){
    return{
      tapped: true
    }
  },
  methods:{
    changeState(){
      this.$data.tapped = !this.$data.tapped
      this.$nextTick()
    },
  },
  props:['hintTxt', 'alertTitle', 'alertContent', 'alertBackgroundImgSrc'],
}

</script>

<style scoped>
.app-container {

}
.dialog-close-button,
.open-dialog-button {
  padding: 10px 15px;
  border-radius: 6px;
  outline: none;
  border: unset;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.dialog-close-button.text-button,
.open-dialog-button.text-button {
  background-color: transparent;
  box-shadow: none;
  color: #6266f5;
}
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: 0.3s;
}
.dialog.is-show .dialog-main {
  transform: translateY(0);
}
.dialog .dialog-modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.3);
}
.dialog .dialog-main {
  transition: 0.3s;
  min-width: 450px;
  min-height: 100px;
  background-color: #fff;
  position: relative;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
  transform: translateY(10%);
}
.dialog .dialog-head {
  text-align: right;
}
.dialog .dialog-body {
  text-align: center;
}
.dialog .dialog-body img {
  display: block;
  width: 200px;
  height: 200px;
  margin: 0 auto;
}
.dialog .dialog-body img + p {
  margin: 30px 0;
  color: #6266f5;
}
.dialog .dialog-body .text-button {
  margin-top: 15px;
}
@media screen and (max-width: 768px) {
  .dialog {
    flex-direction: column;
    justify-content: flex-end;
  }
  .dialog .dialog-main {
    min-width: unset;
    width: 100%;
    border-radius: 20px 20px 0 0;
  }
}





/*index.css*/
:root {
  --primary-color: #6266f5;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app-container {
  min-height: 100vh;
  width: 100%;
}

</style>