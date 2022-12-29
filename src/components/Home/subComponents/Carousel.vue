<template>
  <div class="index">
    <!-- 跑马灯  -->
    <div>
      <el-carousel :interval="5000" height="800px">
        <el-carousel-item v-for="item in imgList" :key="item.id" >
          <div class="txt-box" >
            <h1>{{item.title}}
            </h1>
            <div style="width: 80%; margin: auto">{{item.content}}</div>
          </div>
          <img :src="item.path" class="img-box">
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
          //注意调整大小为1400 * 800
        {
          id:0,
          path:'src/components/Home/images/city.jpg',
          title: "风控全流程分析",
          content: "From the pre-lending, loan-sharing and post-lending stages, a unified analysis was conducted to allow wind control personnel to observe from all dimensions."
        },
        {
          id:1,
          path:'src/components/Home/images/money.jpeg',
          title: "为客户保驾护航",
          content: "Provide professional services from the perspective of financial technology, utility tools for the company lower costs, increase profitability."
        },
        {
          id:2,
          path:'src/components/Home/images/assist.jpg',
          title: "全流程智能风控解决方案",
          content: "Provide customers with risk-based consultation, risk control tools, matching funds and other full-flow intelligent wind control solutions."
        },
        {
          id:3,
          path:'src/components/Home/images/ai_.jpg',
          title: "首席AI风控官",
          content: "Implement real-time modeling using AI technology on the basis of realizing automatic approval of the whole process. Strategy self-optimization has achieved objective risk control."
        },
      ]
    };
  },
  methods: {},

}

</script>
<style>
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
  font-size: 20px;
  color: ivory;
  z-index: 1;

  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>

