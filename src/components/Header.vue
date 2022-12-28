<template>

  <div style="height: 70px; line-height: 70px; border-bottom: 1px solid #ccc; display: flex">
    <div style="width: 60%">
      <img src="../assets/images/logo1.png" alt="图片未加载">
    </div>
    <div style="flex: 1; display: flex; justify-content: space-around">
      <div style="width: 8%; text-align: center; cursor: pointer; color: #EBEDF0" @click="goHome">首页</div>
      <div style="width: 16%; text-align: center; cursor: pointer; color: #EBEDF0" @click="goAbout">关于我们</div>
      <div style="width: 8%; text-align: center; cursor: pointer; color: #EBEDF0" @click="goLogin">登录</div>
    </div>
    <div style="width: 125px">
      <el-dropdown>
        <div style="padding-top: 20px">
          <el-button type="default">
            做市服务
            <el-icon>
              <ArrowDownBold/>
            </el-icon>
          </el-button>
        </div>


        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>账户管理</el-dropdown-item>
            <el-dropdown-item>行情揭示</el-dropdown-item>
            <el-dropdown-item>交易管理</el-dropdown-item>
            <el-dropdown-item>策略管理</el-dropdown-item>
            <el-dropdown-item>风险控制</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

  </div>
</template>


<script lang="ts">
export default {
  name: "Header",
  data() {
    return {}
  }
}
</script>

<style lang="scss">
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