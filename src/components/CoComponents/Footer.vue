<template>
  <div class="mainfooter _mainfooter">
    <div class="footerbody _footerbody">
      <div>
        <h1 style="cursor: pointer" @click="$router.push('about')">关于我们</h1>
        <p>为客户保驾护航</p>
        <p>风控全流程分析</p>
        <p>全流程风控解决方案</p>
        <p>首席AI风控官</p>
      </div>
      <div>
        <h1>做市服务</h1>
        <p style="cursor: pointer" @click="$router.push('market')">行情揭示</p>
        <p style="cursor: pointer" @click="$router.push('trading')">交易管理</p>
        <p style="cursor: pointer" @click="$router.push('strategy')">策略管理</p>
        <p style="cursor: pointer" @click="$router.push('risk')">风险控制</p>
      </div>
      <div>
        <h1>特色模块</h1>
        <p>深度强化学习交易策略</p>
        <p>科创板股票定价</p>
        <p>系统性风险预警</p>
        <p>行业前景提示</p>
        <p>上市前五天公司做市</p>
        <p>未盈利公司做市</p>
      </div>
    </div>
    <div class="footerbottom _footerbottom">
      <p>Copyright © SSE STAR Market Maker 保留所有权利。</p>
      <p>京ICP备114514191 营业执照 无线电发射设备销售备案编号1145141919810</p>
      <p>再看，再看就把你吃掉！</p>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Footer',
  components: {
  }
}
</script>

<style lang="less" scoped>
@media only screen and (min-width: 800px){
  .mainfooter{
    display: flex;
    flex-direction: column;
    width: 100%;
    .footerbody{
      display: flex;
      justify-content: space-around;
      text-align: left;
      padding: 20px 0;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      margin:0 10%;
      div{
        width: 130px;
        h1{
          font-size: 12px;
          font-weight:800;
          margin: 7px 0;
        }
        p{
          font-size: 10px;
          margin: 7px 0;
        }
      }
    }
    .footerbottom{
      margin: 7px 0;
      p{
        font-size: 10px;
      }
    }
  }

}

@media only screen and (max-width: 800px){
  ._mainfooter{
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: start;
    ._footerbody{
      width: 100%;
      display: flex;
      justify-content: space-around;
      text-align: left;
      // padding: 20px 0;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      // height: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      // margin:0 10%;
      div{
        margin: 0 10px;
        width: 95%;
        h1{
          display: block;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          color: rgba(0, 0, 0, 0.5);
          height: 40px;
          font-size: 10px;
          font-weight:800;
          line-height: 40px;
          // margin: 7px 0;
        }
        p{
          display: none ;
          font-size: 10px;
          margin: 7px 0;
        }
      }
    }
    ._footerbottom{
      margin: 7px 0;
      p{
        font-size: 10px;
      }
    }
  }
}

</style>