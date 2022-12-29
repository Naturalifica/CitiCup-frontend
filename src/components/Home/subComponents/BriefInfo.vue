<template>
  <div class="_box" :style="'background-color: ' + String(backgroundColor) + '; background: #747bff url(' + imgSrc + ') no-repeat; background-size: cover; width:100%; height: 100%; object-fit: cover'" >
    <div v-if="!showHint">
      <MiniTitle :header-title="headerTitle" :header-info="headerInfo" :header-font-color="headerFontColor" :header-title-font-size="headerTitleFontSize" :show-hint="showHint"/>

    </div>

    <div v-else>
      <MiniTitle :header-title="headerTitle" :header-info="''" :header-font-color="headerFontColor" :header-title-font-size="headerTitleFontSize" :show-hint="showHint" :hint-info="headerInfo"/>
    </div>
  </div>
</template>

<script>
import MiniTitle from "~/components/CoComponents/MiniTitle.vue";
import Alert_ from "~/components/CoComponents/Alert_.vue";
export default {
  name: "ServiceInfo",
  components:{
    MiniTitle, Alert_
  },
  data(){
    return{
      showHint: this.showHint
    }
  },
  props: ['imgSrc', 'imgAlt', 'backgroundColor', 'headerTitle', 'headerInfo', 'headerFontColor', 'headerTitleFontSize', 'showHint']
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
  //font-size: 4em;
  padding-top:10%;
  margin-bottom: 13px;


  border-radius: 5%;

}

</style>