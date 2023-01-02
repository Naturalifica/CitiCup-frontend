<template>
  <div class="index">
    <!-- 跑马灯  -->
    <div>
      <!--这里高度为100vh表示高度为页面视角的100%-->
      <!--很好，要的就是这个效果-->
      <el-carousel :interval="5000" :height="height">
        <el-carousel-item v-for="item in imgList" :key="item.id" >
          <div class="txt-box" >
            <h1>{{item.title}}</h1>
            <div style="width: 80%; margin: auto">{{item.content}}</div>
          </div>
          <img :src="item.path" class="img-box">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
//imgList的格式如下
//
export default {
  name: 'index',
  props:['imgList', 'height']
}
</script>
<style lang="less">
.index{
  background: #c8cfd8;
  text-align: center;
  margin-left: 0;
  width: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;

}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}


.img-box{
  object-fit: cover;
  mix-blend-mode: darken;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: -1;
}

.txt-box{
  position: absolute;
  width: inherit;
  text-align: center;
  color: ivory;
  z-index: 1;
  font-size: 20px;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1{
    font-weight: bold;
    font-size: 40px;
  }

}

</style>

