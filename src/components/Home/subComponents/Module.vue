<template>
  <el-row :gutter="40" >
    <el-col :span="2"></el-col>
    <el-col :span="7">
      <!--图片需要设置大小为 300*300-->
      <img src="../../../assets/images/service1.jpeg" title="行情揭示">
    </el-col>
    <el-col :span="7">
      <!--图片需要设置大小为 300*300-->
      <img src="../../../assets/images/service1.jpeg" title="行情揭示">
    </el-col>
    <el-col :span="7">
      <img src="../../../assets/images/service1.jpeg" title="行情揭示">
    </el-col>
  </el-row>
  <el-row :gutter="40" >
    <el-col :span="2"></el-col>
    <el-col :span="7">
      <!--图片需要设置大小为 300*300-->
      <img src="../../../assets/images/service1.jpeg" title="行情揭示">
    </el-col>
    <el-col :span="7">
      <!--图片需要设置大小为 300*300-->
      <img src="../../../assets/images/service1.jpeg" title="行情揭示">
    </el-col>
    <el-col :span="7">
      <img src="../../../assets/images/service1.jpeg" title="行情揭示">
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "Module"
}
</script>

<style scoped>
.el-row {
  margin-bottom: 50px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

</style>