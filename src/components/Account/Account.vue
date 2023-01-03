<template>
  <div>
    <button @click="jump()">跳转</button>
  </div>
  <div id="map" style="width: 500px;height: 500px;">
    this is map div
  </div>
  <div id="box" style="width: 500px;height: 500px;">
    this is box div
  </div>

</template>

<script>
export default {
  name: "Account",
  methods: {
    jump(){
      this.$nextTick(() => {
        setTimeout(() => {
          //获取指定的div盒
          let targetBox = document.getElementById('map')
          //获取这个div盒的高度位置
          this.target = targetBox.offsetTop
          //将滚动条定位到这个高度位置
          document.documentElement.scrollTop = this.target
        }, 200)
      })
    },
  }
}


</script>

<style scoped>

</style>