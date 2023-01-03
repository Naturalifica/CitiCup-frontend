<template>
  <div v-if="!showAlert">
      <div class="_box_" :style="'background-color: ' + String(backgroundColor) + '; background: url(' + imgSrc + ') no-repeat; ' +
   'background-size: cover; width:100%; height: 100%; object-fit: cover;'" >
      <MiniTitle :header-title="headerTitle" :header-info="headerInfo" :header-font-color="headerFontColor" :header-title-font-size="headerTitleFontSize" :show-alert="showAlert"/>
      </div>
    </div>

  <!-- 下面是可能会出现弹窗的情况-->
  <div v-else>
      <div class="_box" :style="'background-color: ' + String(backgroundColor) + '; background: url(' + imgSrc + ') no-repeat; ' +
   'background-size: cover; width:100%; height: 100%; object-fit: cover;'" >
      <MiniTitle :header-title="headerTitle" :header-info="''" :header-font-color="headerFontColor" :header-title-font-size="headerTitleFontSize"
                   :show-alert="showAlert" :alert-content="headerInfo" :alert-content-img-list="alertContentImgList" @alerted="getAlertState"
                  :there-exists-an-alert="thereExistsAnAlert"/>
      </div>
    </div>

</template>

<script>
import MiniTitle from "~/components/CoComponents/MiniTitle.vue";
import Alert from "~/components/CoComponents/Alert.vue";
export default {
  name: "ServiceInfo",
  components:{
    MiniTitle, Alert
  },
  data(){
    return{
      //区分两个概念，showAlert表示点击了之后需要展示弹窗，也即六个模块的部分
      //alerted表示在showAlert的基础上，弹窗已经被点击出来了
      showAlert: this.showAlert,
      alerted: true,
    }
  },
  props: [
    'imgSrc', //每个briefInfo的背景图片的路径
    'imgAlt', //每个briefInfo的背景图片的名称
    'backgroundColor', //briefInfo的背景颜色（应该没用到）
    'headerTitle', //briefInfo的标题的内容
    'headerInfo', //briefInfo标题下面的小文字
    'headerFontColor', //briefInfo的标题的颜色
    'headerTitleFontSize', //briefInfo的标题的字体大小
    'showAlert', //是一个bool值，来判断是否需要展示弹窗
    'alertContentImgList',
    'thereExistsAnAlert'
  ],
  methods:{
    getAlertState(alerted){
      this.$data.alerted = alerted;
      this.sendAlertState(alerted);
    },
    sendAlertState(alerted){
      this.$emit('alerted', alerted)
    }
  }
}
</script>

<style scoped lang="less">
._box{
  position: relative;
  width: 100%;
  display: flex;
  flex-direction:column-reverse;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  padding-top: 10%;
  margin-bottom: 3vh;
  border-radius: 5%;
}


._box_{
  position: relative;
  width: 100%;
  display: flex;
  flex-direction:column-reverse;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  padding-top:10%;
  margin-bottom: 4vh;
  border-radius: 5%;
  transition: all 0.3s;
}
._box_:hover{
  transform: scale(1.1);
}
</style>