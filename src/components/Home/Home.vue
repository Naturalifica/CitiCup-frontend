
<template>
  <div style="background: url('src/components/Home/images/earth_.jpg') center">

    <Carousel :img-list="imgList" :height="'100vh'" :z-index="1"/>


    <div class="home-container _home-container">

      <div style="margin-top: 100px; margin-bottom: 100px;">
        <div class="sub-title">做市服务</div>
        <div class="service-sub-div _service-sub-div">
          <div class="left">
            <BriefInfo :header-title="'行情揭示'" :header-info="'Market Revealed'" :header-font-color="'black'" :background-color="'rgb(19, 18, 25)'"
                       :show-alert="false" :header-title-font-size="3" :imgSrc="'src/components/Home/images/stock.jpg'"  @click="$router.push('market')"/>
          </div>
          <div class="right">
            <BriefInfo :header-title="'交易管理'" :header-info="'Trading Management'" :header-font-color="'white'" :background-color="'rgb(19, 18, 25)'"
                       :show-alert="false" :header-title-font-size="3" :imgSrc="'src/components/Home/images/manage.jpg'" @click="$router.push('trading')"/>
          </div>
        </div>
        <div class="service-sub-div _service-sub-div" style="padding-bottom: 2vh; border-bottom: 1px solid rgba(0, 0, 0, 0.1);">
          <div class="left">
            <BriefInfo :header-title="'策略管理'" :header-info="'Strategy Management'" :header-font-color="'white'" :backgoundColor="'rgb(19, 18, 25)'"
                       :show-alert="false" :header-title-font-size="3" :imgSrc="'src/components/Home/images/strategy.jpg'" @click="$router.push('strategy')"/>
          </div>
          <div class="right">
            <BriefInfo :header-title="'风险控制'" :header-info="'Risk Controlling'" :header-font-color="'black'" :backgoundColor="'rgb(19, 18, 25)'"
                       :show-alert="false" :header-title-font-size="3" :imgSrc="'src/components/Home/images/risk.jpg'" @click="$router.push('risk')"/>
          </div>
        </div>
      </div>


      <div style="margin-top: 100px; margin-bottom: 100px;">
        <div class="sub-title">特色模块</div>
        <div class="module-sub-div _module-sub-div">
          <div class="left">
            <BriefInfo :header-title="'基于深度强化学习的交易策略'" :header-title-font-size="2" :header-font-color="'white'"
                       :backgoundColor="'rgb(19, 18, 25)'" :show-alert="true" :header-info="ModuleInfo[0]" @alerted="getAlertState"
                       :imgSrc="'src/components/Home/images/dl.jpg'" :alert-content-img-list="alertContentImgListList[0]"
                       :there-exists-an-alert="thereExistsAnAlert"/>
          </div>
          <div class="middle">
            <BriefInfo :header-title="'科创板股票定价          '"  :header-font-color="'black'" :backgoundColor="'rgb(19, 18, 25)'"
                       :show-alert="true" :header-title-font-size="2" :header-info="ModuleInfo[1]" @alerted="getAlertState"
                       :imgSrc="'src/components/Home/images/stock_.jpg'" :alert-content-img-list="alertContentImgListList[1]"
                       :there-exists-an-alert="thereExistsAnAlert"/>
          </div>
          <div class="right">
            <BriefInfo :header-title="'系统性风险预警          '" :header-font-color="'white'" :backgoundColor="'rgb(19, 18, 25)'"
                       :show-alert="true" :header-title-font-size="2" :header-info="ModuleInfo[2]" @alerted="getAlertState"
                       :imgSrc="'src/components/Home/images/alert.jpg'" :alert-content-img-list="alertContentImgListList[2]"
                       :there-exists-an-alert="thereExistsAnAlert"/>
          </div>
        </div>
        <div class="module-sub-div _module-sub-div" style="padding-bottom: 2vh; border-bottom: 1px solid rgba(0, 0, 0, 0.1);">
          <div class="left">
            <BriefInfo :header-title="'行业前景提示             '"  :header-font-color="'black'" :backgoundColor="'rgb(19, 18, 25)'"
                       :show-alert="true" :header-title-font-size="2" :header-info="ModuleInfo[3]" @alerted="getAlertState"
                       :imgSrc="'src/components/Home/images/develop.jpg'" :alert-content-img-list="alertContentImgListList[3]"
                       :there-exists-an-alert="thereExistsAnAlert"/>
          </div>
          <div class="middle">
            <BriefInfo :header-title="'上市前五天公司做市'" :header-font-color="'white'" :backgoundColor="'rgb(19, 18, 25)'"
                       :show-alert="true" :header-title-font-size="2" :header-info="ModuleInfo[4]" @alerted="getAlertState"
                       :imgSrc="'src/components/Home/images/ipo_5.jpg'" :alert-content-img-list="alertContentImgListList[4]"
                       :there-exists-an-alert="thereExistsAnAlert"/>
          </div>
          <div class="right">
            <BriefInfo :header-title="'未盈利公司做市'" :header-font-color="'black'" :backgoundColor="'rgb(19, 18, 25)'"
                       :show-alert="true" :header-title-font-size="2" :header-info="ModuleInfo[5]" @alerted="getAlertState"
                       :imgSrc="'src/components/Home/images/ipo.jpg'" :alert-content-img-list="alertContentImgListList[5]"
                       :there-exists-an-alert="thereExistsAnAlert"/>
          </div>
        </div>
      </div>



      <div class="about-us-box" id="aboutUs" >

        <div class="sub-title">关于我们</div>
        <div style="width: 95%; background-color: #ffffff; border-radius: 10px; padding-top: 2%; padding-bottom: 2%">
          <p class="about-txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid anim
            i asperiores at atque, autem deleniti dicta dolore dolores ea et ex expedita
            facere facilis illo illum ipsa ipsam itaque iure iusto labore libero neque nostru
            m numquam odit officia officiis perspiciatis possimus provident qui recusandae rer
            um saepe suscipit temporibus velit voluptate voluptatum. Itaque omnis pariatur volupta
            tem. Delectus deleniti dolor doloremque dolorum eius et excepturi exercitationem inci
            dunt, ipsam magnam maiores nesciunt officiis perspiciatis quasi quis quisquam recusandae reic
            iendis rem totam voluptatum. Asperiores at aut beatae delectus dolor eius ipsam laborum, magna
            m natus omnis pariatur perferendis quasi, reiciendis rerum vel vitae, voluptatum!</p>
        </div>
      </div>

      <iframe src=""></iframe>

    </div>



  </div>

</template>

<script>

import Carousel from "../CoComponents/Carousel.vue"
import BriefInfo from "~/components/Home/subComponents/BriefInfo.vue"


export default {
//TODO: 所有的图片都太大了(甚至有十几m的)，最好能压缩到600k之内(但是这么高清俺舍不得)
  data(){
    return{
      ModuleInfo:[
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloribus ipsa, laudantium minima, modi,' +
        'neque obcaecati pariatur perspiciatis quis reprehenderit rerum saepe sequi unde! Accusantium architecto atque, del' +
        'ectus dignissimos dolorem hic id iure iusto laboriosam magnam minus praesentium quas quo rerum sint temporibus' +
        'totam voluptas? Cumque delectus illum temporibus vel.',

        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloribus ipsa, laudantium minima, modi,' +
        'neque obcaecati pariatur perspiciatis quis reprehenderit rerum saepe sequi unde! Accusantium architecto atque, del' +
        'ectus dignissimos dolorem hic id iure iusto laboriosam magnam minus praesentium quas quo rerum sint temporibus' +
        'totam voluptas? Cumque delectus illum temporibus vel.',

        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloribus ipsa, laudantium minima, modi,' +
        'neque obcaecati pariatur perspiciatis quis reprehenderit rerum saepe sequi unde! Accusantium architecto atque, del' +
        'ectus dignissimos dolorem hic id iure iusto laboriosam magnam minus praesentium quas quo rerum sint temporibus' +
        'totam voluptas? Cumque delectus illum temporibus vel.',

        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloribus ipsa, laudantium minima, modi,' +
        'neque obcaecati pariatur perspiciatis quis reprehenderit rerum saepe sequi unde! Accusantium architecto atque, del' +
        'ectus dignissimos dolorem hic id iure iusto laboriosam magnam minus praesentium quas quo rerum sint temporibus' +
        'totam voluptas? Cumque delectus illum temporibus vel.',

        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloribus ipsa, laudantium minima, modi,' +
        'neque obcaecati pariatur perspiciatis quis reprehenderit rerum saepe sequi unde! Accusantium architecto atque, del' +
        'ectus dignissimos dolorem hic id iure iusto laboriosam magnam minus praesentium quas quo rerum sint temporibus' +
        'totam voluptas? Cumque delectus illum temporibus vel.',

        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloribus ipsa, laudantium minima, modi,' +
        'neque obcaecati pariatur perspiciatis quis reprehenderit rerum saepe sequi unde! Accusantium architecto atque, del' +
        'ectus dignissimos dolorem hic id iure iusto laboriosam magnam minus praesentium quas quo rerum sint temporibus' +
        'totam voluptas? Cumque delectus illum temporibus vel.'
      ],
      imgList: [
        //注意调整大小为1400 * 800
        {
          id: 0,
          path: 'src/components/Home/images/city.jpg',
          title: "风控全流程分析",
          content: "From the pre-lending, loan-sharing and post-lending stages, a unified analysis was conducted to allow wind control personnel to observe from all dimensions."
        },
        {
          id: 1,
          path: 'src/components/Home/images/money.jpeg',
          title: "为客户保驾护航",
          content: "Provide professional services from the perspective of financial technology, utility tools for the company lower costs, increase profitability."
        },
        {
          id: 2,
          path: 'src/components/Home/images/assist.jpg',
          title: "全流程智能风控解决方案",
          content: "Provide customers with risk-based consultation, risk control tools, matching funds and other full-flow intelligent wind control solutions."
        },
        {
          id: 3,
          path: 'src/components/Home/images/ai_.jpg',
          title: "首席AI风控官",
          content: "Implement real-time modeling using AI technology on the basis of realizing automatic approval of the whole process. Strategy self-optimization has achieved objective risk control."
        },
      ],
      alertContentImgListList: [
          [
            {
              id: 2,
              path: 'src/components/Home/images/assist.jpg',
              title: "",
              content: ""
            },
            {
              id: 3,
              path: 'src/components/Home/images/ai_.jpg',
              title: "",
              content: ""
            },
          ],
          [
            {
              id: 2,
              path: 'src/components/Home/images/assist.jpg',
              title: "",
              content: ""
            },
            {
              id: 3,
              path: 'src/components/Home/images/ai_.jpg',
              title: "",
              content: ""
            },
          ],
          [
            {
              id: 2,
              path: 'src/components/Home/images/assist.jpg',
              title: "",
              content: ""
            },
            {
              id: 3,
              path: 'src/components/Home/images/ai_.jpg',
              title: "",
              content: ""
            },
          ],
          [
            {
              id: 2,
              path: 'src/components/Home/images/assist.jpg',
              title: "",
              content: ""
            },
            {
              id: 3,
              path: 'src/components/Home/images/ai_.jpg',
              title: "",
              content: ""
            },

          ],
          [
            {
              id: 2,
              path: 'src/components/Home/images/assist.jpg',
              title: "",
              content: ""
            },
            {
              id: 3,
              path: 'src/components/Home/images/ai_.jpg',
              title: "",
              content: ""
            },
          ],
          [
            {
              id: 2,
              path: 'src/components/Home/images/assist.jpg',
              title: "",
              content: ""
            },
            {
              id: 3,
              path: 'src/components/Home/images/ai_.jpg',
              title: "",
              content: ""
            },
          ]
      ],
      thereExistsAnAlert: false,
    }
  },

  name: 'Home',
  components: {
    Carousel, BriefInfo
  },
  methods:{
    getAlertState(alerted){
      this.$data.thereExistsAnAlert = alerted;
    },

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
<style lang="less" scoped>

.about-us-box{
  margin-top: 100px;
  margin-bottom: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.sub-title{
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  height: 10vh;
  //这里的Arial表示一种字体(还挺好看的说)
  font:bolder 40px/50px Arial;
  color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 5vh;

}
// 大于800px
@media only screen and (min-width: 800px){
  .home-container{
    font-size: 1vw;
    .service-sub-div{
      width: 100%;
      display: flex;
      justify-content: center;
      font-size: .5em;
      .left{
        width: 48%;
        height: 100%;
        font-size: .8em;
        margin-left: 1.5%;
        margin-right: 1.5%;
      }
      .right{
        width: 48%;
        height: 100%;
        font-size: .8em;
        margin-left: 1.5%;
        margin-right: 1.5%;
      }
    }

    .module-sub-div{
      width: 100%;
      display: flex;
      justify-content: space-around;
      font-size: .5em;
      .left{
        width: 30%;
        height: 100%;
        font-size: .8em;
        margin-left: 2%;
        margin-right: 2%;
      }
      .middle{
        width: 30%;
        height: 100%;
        font-size: .8em;
        margin-left: 2%;
        margin-right: 2%;
      }
      .right{
        width: 30%;
        height: 100%;
        font-size: .8em;
        margin-left: 2%;
        margin-right: 2%;
      }
    }
  }
}

// 小于800px
@media only screen and (max-width: 800px){
  ._home-container{
    font-size: 1vw;
    ._service-sub-div{
      width: 100%;
      display: flex;
      flex-direction: column;
      font-size: .5em;
      .left{
        width: 100%;
        height: 100%;
        font-size: .8em;
        margin-left: 2%;
        margin-right: 2%;
      }
      .right{
        width: 100%;
        height: 100%;
        font-size: .8em;
        margin-left: 2%;
        margin-right: 2%;
      }
    }

    ._module-sub-div{
      width: 100%;
      display: flex;
      flex-direction: column;
      font-size: .5em;
      .left{
        width: 100%;
        height: 100%;
        font-size: .8em;
        margin-left: 2%;
        margin-right: 2%;
      }
      .right{
        width: 100%;
        height: 100%;
        font-size: .8em;
        margin-left: 2%;
        margin-right: 2%;
      }
    }
  }
}

.about-txt{
  font-size: 20px;
  font-weight: bold;

}
</style>