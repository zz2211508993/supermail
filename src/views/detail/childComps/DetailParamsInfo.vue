<template>
  <div class="detail-params-info" v-if="Object.keys(goodsParams).length!==0">
    <table>
      <tr v-for="item in goodsParams.rule.tables[0]">
        <td v-for="value in item">{{value}}</td>
      </tr>
      </table>
    <table>
      <tr v-for="item in goodsParams.rule.tables[1]">
        <td v-for="value in item">{{value}}</td>
      </tr>
      </table>
    <table>
      <tr v-for="item in goodsParams.info.set" class="goods-info">
        <td class="info-param-key">{{item.key}}</td>
        <td class="info-param-value">{{item.value}}</td>
      </tr>
    </table>
    <div class="params-images" v-if="goodsParams.images.length>0">
      <img :src="goodsParams.images" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props:{
    goodsParams:{
      type:Object,
      default(){
        return {};
      }
    }
  },
  updated() {
  }
}
</script>

<style scoped>
  .detail-params-info{
    padding: 10px;
    position: relative;

  }
  .detail-params-info table{
    width: 100%;
    border-collapse: collapse
  }
  .detail-params-info table tr{
    height: 42px;
  }
  .detail-params-info table tr td{
    font-size: 14px;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .goods-info .info-param-value{
    color:var(--color-high-text)
  }
  .goods-info .info-param-key{
    width: 93px;
  }
  .params-images img{
    width: 100%;
  }

</style>
