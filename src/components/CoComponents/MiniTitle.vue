<template>
  <div class="miniTitleContainer" :style="'color: ' + String(headerFontColor)">
    <div class="headerTitle" :style="'font-size: ' + String(headerTitleFontSize) + 'em;'">{{headerTitle}}</div>
    <div class="headerInfo">
      <h1>{{headerInfo}}</h1>
      <p></p>
    </div>
    <div v-if="showHint">
      <div @click="$router.push('/')">
        <Alert :hint-txt="'点击查看详情 >'" :alert-content="hintInfo"/>
      </div>
    </div>
    <div v-else>
      <div @click="$router.push('/')">
        <el-button text @click="open" class="furtherGuidance">点击进入页面 ></el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from '/src/components/CoComponents/Alert.vue'
import Alert_ from "~/components/CoComponents/Alert_.vue";
export default {
  name: "MiniTitle",
  props: ['headerTitle', 'headerInfo', 'headerFontColor', 'headerTitleFontSize', 'showHint', 'hintInfo'],
  components:{
    Alert, Alert_
  }
}
</script>



<style lang="less" scoped>
.miniTitleContainer{
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  font-size: 2em;
  z-index: 999;
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
    font-size: 1.2em; color: rgb(40, 151, 255);
  }
}

@media only screen and (max-width: 800px){}
</style>