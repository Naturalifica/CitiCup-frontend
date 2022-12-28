<template>
  <div class="index">
    <!-- 跑马灯  -->
    <div>
      <el-carousel :interval="5000" height="550px">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <img :src="item.idView" class="image">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data(){
    return {
      imgList: [
          //注意调整大小为1100 * 500
        {id:0,idView:'src/assets/images/carousel1.jpeg'},
        {id:1,idView:'src/assets/images/carousel2.jpeg'},
        {id:2,idView:'src/assets/images/carousel3.jpeg'},
        {id:3,idView:'src/assets/images/carousel4.jpeg'},
      ]
    };
  },
  methods: {
  }
}
</script>
<style>
.index{
  background: #c8cfd8;
  text-align: center;
  margin-left: 0px;
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
</style>

