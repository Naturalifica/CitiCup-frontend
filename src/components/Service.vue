<template>
  <el-row :gutter="25">
    <el-col :span="7"></el-col>
    <el-col :span="6">
      <img src="../assets/images/logo1.png">
    </el-col>
    <el-col :span="6">
      <img src="../assets/images/logo1.png">
    </el-col>
    <el-col :span="6"></el-col>
  </el-row>
  <el-row :gutter="25">
    <el-col :span="7"></el-col>
    <el-col :span="6">
      <img src="../assets/images/logo1.png">
    </el-col>
    <el-col :span="6">
      <img src="../assets/images/logo1.png">
    </el-col>
    <el-col :span="6"></el-col>
  </el-row>
</template>

<script>
export default {
  name: "Service"
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
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