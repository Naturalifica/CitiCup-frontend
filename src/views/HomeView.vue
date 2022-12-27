<template>

  <div class="common-layout bk">
    <el-container>
      <el-header height="80px" >
        <Header/>
      </el-header>
      <el-main>
        <Carousel/>
      </el-main>
      <el-footer>Footer</el-footer>
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
</style>