<!-- Alert_是用来改良经ElementUI改装的Alert组件的，因此为了最小限度地调整其他代码，Alert_组件应当和Alert组件具有相同的职责-->

<template>
  <div class="app-container">
    <div v-if="untapped">
      <div v-if="!thereExistsAnAlert">
        <el-button text @click="changeState" style="font-size: 1.2em; color: rgb(40, 151, 255);">{{hintTxt}}</el-button>
      </div>
    </div>

    <div v-if="!untapped" class="dialog">
      <!-- 不透明遮罩 -->
      <div class="dialog-modal"></div>
      <!-- 主体 -->
      <div class="dialog-main">
        <div class="dialog-head">
          <button class="dialog-close-button" @click="changeState">X</button>
        </div>
        <!-- 内容区 -->
        <div class="dialog-body">
          <h2>{{alertTitle}}</h2>
          <div>
            <Carousel :height="'400px'" :img-list="alertContentImgList"/>
          </div>
          <p>{{alertContent}}</p>
          <div><button class="dialog-close-button text-button" @click="changeState">关闭弹窗</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "~/components/CoComponents/Carousel.vue";
export default {
  name: "Alert_",
  //imgList要符合Carousel中规定的格式
  // imgList[i] =
  // {
  //   id: i,
  //   path: 'src/components/Home/images/city.jpg',
  //   title: "风控全流程分析",
  //   content: "From the pre-lending, loan-sharing and post-lending stages, a unified analysis was conducted to allow wind control personnel to observe from all dimensions."
  // },
  data(){
    return{
      untapped: true,
      imgList: [
        {
          id: 0,
          path: 'src/components/Home/images/city.jpg',
          title: "风控全流程分析",
          content: "From the pre-lending, loan-sharing and post-lending stages, a unified analysis was conducted to allow wind control personnel to observe from all dimensions."
        }, {
          id: 1,
          path: 'src/components/Home/images/money.jpeg',
          title: "为客户保驾护航",
          content: "Provide professional services from the perspective of financial technology, utility tools for the company lower costs, increase profitability."
        }
      ],
    }
  },
  methods:{
    changeState(){
      this.$data.untapped = !this.$data.untapped
      this.$nextTick()
      this.sendAlertState()
    },
    sendAlertState(){
      if(!this.$data.untapped){
        console.log("there is an alert")
      }
      else{
        console.log("there's no alert")
      }
      this.$emit('alerted', !this.$data.untapped)
    }
  },
  props:['hintTxt', //弹窗的提示文字"点击查看详情"
    'alertTitle', //弹窗的标题和模块的标题相同
    'alertContent', //弹窗的文字内容
    'alertBackgroundImgSrc', //弹窗的背景图片，和原来的模块的背景图相同
    'alertContentImgList', //这个表示用来轮播的图片的列表,
    'thereExistsAnAlert'
  ],
  components:{
    Carousel
  },

}

</script>

<style scoped lang="less">
.dialog-close-button{
  padding: 10px 15px;
  border-radius: 6px;
  font-size: 2em;
  font-weight: bold;
  color: black;
}
.open-dialog-button {
  padding: 10px 15px;
  border-radius: 6px;
  font-size: 1.2em;
  color: rgb(40, 151, 255);
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
  left: 5%;
  right: 5%;
  width: 90%;

  height: 100vh;
  /*1vh相当于视图高度的1%*/
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.98;
  transition: 1s;
}


.dialog.is-show .dialog-main {
}
.dialog .dialog-modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  /*background-color: rgba(0, 0, 0, 0.3);*/
}
.dialog .dialog-main {
  transition: 1s;
  min-width: 1000px;
  min-height: 90vh;
  background-color: #fff;
  /*position: relative;*/

  position: absolute;
  padding: 20px;
  border-radius: 2%;

  /*这个刻画了弹窗边上的阴影的程度*/
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.5);

  transform: translateY(0%);



}
.dialog .dialog-head {
  text-align: right;
}
.dialog .dialog-body {
  h2{
    font-size: 30px;
    font-weight: bold;
    color: black;
  }
  text-align: center;
  align-items: center;
  justify-content: center;
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
  display: flex;
}

</style>