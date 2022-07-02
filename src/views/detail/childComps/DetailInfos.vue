<template>
  <div class="detail-info" v-if="Object.keys(goods).length>=1">
        <div class="info-title">{{goods.title}}</div>
        <div class="info-price">
          <span class="price">{{goods.price}}</span>
          <span class="oldPrice">{{goods.oldPrice}}</span>
          <span class="discount">{{goods.discountDesc}}</span>
        </div>
        <div class="info-other">
          <span>{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.services[goods.services.length-1].name}}</span>
        </div>
      <div class="info-service">
        <div class="service-item" v-for="index in goods.services.length-1">
          <img :src="goods.services[index-1].icon" alt="">
          <span>{{goods.services[index-1].name}}</span>
        </div>

      </div>
  </div>
</template>

<script>
export default {
  name: "detail-info",
  props:{
    goods:{
      type:Object,
      default(){
        return {};
      }
    }
  }

}

</script>

<style scoped>
  .detail-info {
    padding: 8px 8px 5px 8px;
    line-height: 20px;
    border-bottom: 5px solid #f2f5f8;
  }
  .detail-info  .info-title{
    color: black;
    font-size: 15px;
    margin-top: 5px;
  }
  .detail-info .info-price{

  }
  .detail-info .info-price .discount{
    border-radius: 10px;
    background-color: var(--color-high-text);
    font-size: 12px;
    padding: 2px 5px;
    color:white;
    position: relative;
    top:-8px;
  }
  .detail-info .info-price .price{
    font-size: 20px;
    line-height:50px;
    color:var(--color-high-text)
  }
  .detail-info .oldPrice{
    font-size: 12px;
    text-decoration: line-through;
    margin: 0 5px;
    color:#999999;

  }
  .detail-info .info-other{
    font-size: 13px;
    color:#999999;
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .detail-info .info-service{
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    line-height: 60px;
    height: 50px;
  }
  .detail-info .info-service img{
    width: 14px;
    height: 14px;
    vertical-align: middle;
    margin-right: 5px;
  }
</style>
