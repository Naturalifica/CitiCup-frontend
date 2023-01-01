<template>
  <div class="miniTitleContainer" :style="'color: ' + String(headerFontColor)">
    <div v-if="!thereExistsAnAlert">
      <div class="headerTitle" :style="'font-size: ' + String(headerTitleFontSize) + 'em;'">{{headerTitle}}</div>
      <div class="headerInfo">
        <h1>{{headerInfo}}</h1>
        <p></p>
      </div>
    </div>


    <div v-if="showAlert">
      <div @click="$router.push('/')">
        <Alert_ :hint-txt="'点击查看详情 >'" :alert-content="alertContent" :alert-title="headerTitle" @alerted="getAlertState"
                :alert-content-img-list="alertContentImgList" :there-exists-an-alert="thereExistsAnAlert"/>
      </div>
    </div>

    <div v-else>
      <div>
        <el-button text @click="open" class="furtherGuidance">点击进入页面 ></el-button>
      </div>
    </div>
  </div>
</template>


<script>
import Alert from '~/components/CoComponents/Alert.vue'
import Alert_ from "~/components/CoComponents/Alert_.vue";
export default {
  data(){
    return{
      alerted: true
    }
  },
  name: "MiniTitle",
  props: [
    'headerTitle', //briefInfo的标题
    'headerInfo', //briefIndo的内容
    'headerFontColor', //briefIndo的字体颜色
    'headerTitleFontSize', //briefInfo的字体大小
    'showAlert', //是一个bool值，用来判断点击后是否应当展示弹窗
    'alertContentImgList', //用来展示弹窗的轮播的图片列表，当然也需要满足我们定义的格式
    'alertContent', //弹窗的文字内容,
    'thereExistsAnAlert'
  ],
  components:{
    Alert, Alert_,
  },
  methods:{
    /**
     * 这个方法用来确认弹窗是否已经弹出
     * 实际上很不优美，但是我也没有更好的办法
     */
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



<style lang="less" scoped>
.miniTitleContainer{
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  font-size: 2em;
  z-index: 1;
  .headerTitle{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 800;
  }
  .headerInfo{
    h1{
      font-size: 1.5em ;
    }
  }
  .furtherGuidance{
    font-size: 1.2em;
    color: rgb(40, 151, 255);
  }


}

@media only screen and (max-width: 800px){}
</style>