<template>
  <Carousel/>

  <div class="home-container _home-container">

    <div style="margin-top: 100px; margin-bottom: 100px">
      <div style="width: 100%; height: 60px; font:bolder 40px/50px Arial;">做市服务</div>
      <div class="service-sub-div _service-sub-div">
        <div class="left">
          <BriefInfo :header-title="'行情揭示'" :header-info="'zxcvqwertyuiopsdfghjk'" :header-font-color="'black'" :background-color="'rgb(19, 18, 25)'"
                     :show-hint="false" :header-title-font-size="3" :imgSrc="'src/components/Home/images/stock.jpg'"  @click="$router.push('market')"/>
        </div>
        <div class="right">
          <BriefInfo :header-title="'交易管理'" :header-info="'自行车v巴拿马式的风格和y'" :header-font-color="'white'" :background-color="'rgb(19, 18, 25)'"
                     :show-hint="false" :header-title-font-size="3" :imgSrc="'src/components/Home/images/manage.jpg'" @click="$router.push('trading')"/>
        </div>
      </div>
      <div class="service-sub-div _service-sub-div">
        <div class="left">
          <BriefInfo :header-title="'策略管理'" :header-info="'迷你版v从现在来看就很过分的式式'" :header-font-color="'white'" :backgoundColor="'rgb(19, 18, 25)'"
                     :show-hint="false" :header-title-font-size="3" :imgSrc="'src/components/Home/images/strategy.jpg'" @click="$router.push('strategy')"/>
        </div>
        <div class="right">
          <BriefInfo :header-title="'风险控制'" :header-info="'破iu一天惹我起来看就很过分的'" :header-font-color="'black'" :backgoundColor="'rgb(19, 18, 25)'"
                     :show-hint="false" :header-title-font-size="3" :imgSrc="'src/components/Home/images/risk.jpg'" @click="$router.push('risk')"/>
        </div>
      </div>
    </div>


    <div style="margin-top: 100px; margin-bottom: 100px">
      <div style="width: 100%; height: 60px; font:bolder 40px/50px Arial;">特色模块</div>
      <div class="module-sub-div _module-sub-div">
        <div class="left">
          <BriefInfo :header-title="'基于深度强化学习的交易策略'" :header-title-font-size="2" :header-font-color="'white'"
                     :backgoundColor="'rgb(19, 18, 25)'" :show-hint="true" :header-info="ModuleInfo[0]"
                     :imgSrc="'src/components/Home/images/dl.jpg'"/>
        </div>
        <div class="middle">
          <BriefInfo :header-title="'科创板股票定价          '"  :header-font-color="'black'" :backgoundColor="'rgb(19, 18, 25)'"
                     :show-hint="true" :header-title-font-size="2" :header-info="ModuleInfo[1]"
                     :imgSrc="'src/components/Home/images/stock_.jpg'"/>
        </div>
        <div class="right">
          <BriefInfo :header-title="'系统性风险预警          '" :header-font-color="'white'" :backgoundColor="'rgb(19, 18, 25)'"
                     :show-hint="true" :header-title-font-size="2" :header-info="ModuleInfo[2]"
                     :imgSrc="'src/components/Home/images/alert.jpg'" />
        </div>
      </div>
      <div class="module-sub-div _module-sub-div">
        <div class="left">
          <BriefInfo :header-title="'行业前景提示             '"  :header-font-color="'black'" :backgoundColor="'rgb(19, 18, 25)'"
                     :show-hint="true" :header-title-font-size="2" :header-info="ModuleInfo[3]"
                     :imgSrc="'src/components/Home/images/develop.jpg'" />
        </div>
        <div class="middle">
          <BriefInfo :header-title="'上市前五天公司做市'" :header-font-color="'white'" :backgoundColor="'rgb(19, 18, 25)'"
                     :show-hint="true" :header-title-font-size="2" :header-info="ModuleInfo[4]"
                     :imgSrc="'src/components/Home/images/ipo_5.jpg'"/>
        </div>
        <div class="right">
          <BriefInfo :header-title="'未盈利公司做市'" :header-font-color="'black'" :backgoundColor="'rgb(19, 18, 25)'"
                     :show-hint="true" :header-title-font-size="2" :header-info="ModuleInfo[5]"
                     :imgSrc="'src/components/Home/images/ipo.jpg'" />
        </div>
      </div>
    </div>


    <div style="margin-top: 100px; margin-bottom: 100px; width: 97%">
      <div style="width: 100%; height: 60px; font:bolder 40px/50px Arial;">关于我们</div>
      <div style="width: 100%; height: 200px; background-color: #646cff; border-radius: 20px">
        <p class="about-txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid anim
          i asperiores at atque, autem deleniti dicta dolore dolores ea et ex expedita
          facere facilis illo illum ipsa ipsam itaque iure iusto labore libero neque nostru
          m numquam odit officia officiis perspiciatis possimus provident qui recusandae rer
          um saepe suscipit temporibus velit voluptate voluptatum. Itaque omnis pariatur volupta
          tem. Delectus deleniti dolor doloremque dolorum eius et excepturi exercitationem inci
          dunt, ipsam magnam maiores nesciunt officiis perspiciatis quasi quis quisquam recusandae reic
          iendis rem totam voluptatum. Asperiores at aut beatae delectus dolor eius ipsam laborum, magna
          m natus omnis pariatur perferendis quasi, reiciendis rerum vel vitae, voluptatum!</p>>
      </div>
    </div>


  </div>
</template>

<script>

import Carousel from "./subComponents/Carousel.vue"
import Module from "./subComponents/Module.vue"
import BriefInfo from "~/components/Home/subComponents/BriefInfo.vue"

export default {
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
      ]
    }
  },
  name: 'Home',
  components: {
    Module, Carousel, BriefInfo
  }
}
</script>

<style lang="less" scoped>
body{
  background-size: cover;
  background: url("./images/city_bg.png") no-repeat fixed center center;
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
        margin-left: 2%;
        margin-right: 2%;
      }
      .right{
        width: 48%;
        height: 100%;
        font-size: .8em;
        margin-left: 2%;
        margin-right: 2%;
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