<template>

  <div style="height: 50px; line-height: 50px; border-bottom: 1px solid #ccc; display: flex">
    <div style="width: 200px; padding-left: 30px; font-weight: bold; color: #EBEDF0">平台</div>
    <div style="flex: 1; display: flex; justify-content: space-around">
      <div style="width: 100px; text-align: center; cursor: pointer" @click="goHome">首页</div>
      <div style="width: 100px; text-align: center; cursor: pointer" @click="goAbout">关于</div>
    </div>
    <div style="width: 125px">
      <el-dropdown>
        <el-button type="default">
          做市服务<el-icon><ArrowDownBold /></el-icon>
        </el-button>
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
    <div style="width: 100px; text-align: center; cursor: pointer" @click="goLogin">登录</div>
  </div>
</template>


<script lang="ts">
export default {
  name: "Header",
  data() {
    return {

    }
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