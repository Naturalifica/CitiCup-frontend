<template>
  <div>
    <el-result icon="warning" title="404 Not Found" sub-title="您找的页面不存在">
      <template #extra>
        <el-button type="primary" @click="$router.push('/')">回到首页</el-button>
      </template>
    </el-result>
  </div>
</template>
