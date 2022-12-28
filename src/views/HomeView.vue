<template>

  <div class="common-layout bk">
    <el-container>
      <el-header height="80px">
        <Header/>
      </el-header>
      <el-main>
        <Carousel/>
        <div style="height: 40px; line-height: 70px; display: flex"/>
        <div class="font_div1">关于我们</div>
        <div style="height: 20px; line-height: 20px; border-bottom: 1px solid #ccc; display: flex"/>
        <div style="height: 80px; line-height: 70px; display: flex"/>
        <div class="font_div1">做市服务</div>
        <div style="height: 80px; line-height: 70px; display: flex"/>
        <Service/>
        <div style="height: 40px; line-height: 70px; display: flex"/>
        <div class="font_div1">特色模块</div>
        <div style="height: 80px; line-height: 70px; display: flex"/>
        <Service/>
      </el-main>
      <el-footer>
        <div style="height: 80px; line-height: 70px; display: flex"/>
        <div class="font_div1">Ending</div>
      </el-footer>
    </el-container>
  </div>

</template>

<script>
import Header from "../components/Header.vue";
import Carousel from "../components/Carousel.vue";
import Service from "../components/Service.vue";

export default {
  name: "HomePage",
  components: {
    Header, Carousel, Service,
  },
}
</script>

<style scoped>
.bk {
  background-color: #303133;
}

.font_div1 {
  font-weight: bold; /*加粗*/
  text-align: center; /* 水平居中 */
  color: azure;
  font: 20px/30px "Microsoft YaHei";
}

</style>