<template>

  <div class="common-layout bk">
    <el-container>
      <el-header height="80px" >
        <Header/>
      </el-header>
      <el-main>
        <Carousel/>
        <div style="height: 30px; line-height: 70px; display: flex"/>
          <div class="font_div">关于我们</div>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>

</template>

<script>
import Header from "../components/Header.vue";
import Carousel from "../components/Carousel.vue";

export default {
  name: "HomePage",
  components: {
    Header, Carousel,
  },
}
</script>

<style scoped>
.bk{
  background-color: #303133;
}
.font_div{
  font-weight:bold;/*加粗*/
  text-align:center;   /* 水平居中 */
  color: #c8cfd8;
}
</style>