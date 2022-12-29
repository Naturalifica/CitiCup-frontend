<template>
  <el-button text @click="open" style="font-size: 1.2em; color: rgb(40, 151, 255);">{{hintTxt}}</el-button>
</template>

<script >
import { ElMessage, ElMessageBox } from 'element-plus'

export default {
  props:['hintTxt', 'alertTitle', 'alertContent'],
  methods: {
    open() {
      ElMessageBox.alert(this.alertContent, 'Title', {
        autofocus: false,
        confirmButtonText: 'OK',
        callback: (action) => {
          ElMessage({
            type: 'info',
            message: `action: ${action}`,
          })
        },
      })
    }
  }
}
</script>

<style>

</style>
