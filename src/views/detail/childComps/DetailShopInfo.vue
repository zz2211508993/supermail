<template>
  <div class="detail-shop-info">
      <div class="shop-top">
        <img :src="shopInfo.shopLogo" alt="" class="info-logo">
        <span class="info-name">{{shopInfo.name}}</span>
      </div>
      <div class="shop-middle">
          <div class="shop-middle-item-left shop-middle-item">
            <div class='info-sells'>
              <p>{{shopInfo.cSells | sellCountFixed}}</p>
              <p>总销量</p>
            </div>
            <div class="info-goods">
              <p>{{shopInfo.cGoods}}</p>
              <p>全部宝贝</p>
            </div>
          </div>
          <div class="shop-middle-item-right shop-middle-item">
            <table class="shop-score">
              <tr v-for="item in shopInfo.score">
                <td class="name">{{item.name}}</td>
                <td class="score" :class='{"score-better":item.isBetter}'>{{item.score}}</td>
                <td class="better" :class="{'better-more':item.isBetter}"><span>{{item.isBetter ? "高" :"低"}}</span></td>
              </tr>
            </table>
          </div>
      </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  data(){
    return {
    }
  },
  props:{
    shopInfo:{
      type:Object,
      default(){
        return {};
      }
    }
  },
  filters:{
    sellCountFixed(value){
      if(value< 10000 ) return value;
      return (value/10000).toFixed(1)+'万';
    }
  }
}
</script>

<style scoped>
.detail-shop-info{
  padding: 20px 10px;
  position: relative;
  z-index: 66;
  border-bottom: 4px solid black;
}
.detail-shop-info .shop-top{
  height: 40px;
  display: flex;
  align-items: center;
}
.shop-top .info-logo{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.shop-top .info-name{
  vertical-align: center;
  font-size: 16px;
  display: inline-block;
}

.shop-middle{
  display: flex;
  margin-top:40px;
  text-align: center;
  box-sizing: border-box;
  align-items: center;
}
.shop-middle-item-left{
  display: flex;
  font-size: 18px;
  height: 45px;
  line-height: 25px;
  border-right: 1px solid rgba(0,0,0,.1);;
}
.shop-middle-item{
  flex: 1;
}
.shop-middle-item-left div p{
  margin: 0 5px;
}
.shop-middle-item-left div p:last-child{
  font-size: 12px;
}
.shop-middle-item-right{
  display: flex;
  margin-left: 20px;
}

.shop-middle-item-right .shop-score{
  font-size: 13px;
  width: 120px;
}
.shop-middle-item-right .shop-score td{
  margin-right: 10px;
  padding: 5px 0;
}
.shop-middle-item-right .score-better{
  color: #f13e3a;
}
.shop-middle-item-right .score{
  color: #5ea732;
}
.shop-middle-item-right .better span{
  background-color: #5ea732;
  color: #fff;
  text-align: center;
  font-size: 13px;
}

.shop-middle-item-right .better-more span{
  background-color: #f13e3a;
}

.shop-bottom{
  margin-top: 10px;
}
.shop-bottom .enter-shop{
  border-radius: 10px;
  background: #f2f5f8;
  width: 150px;
  height: 30px;
  margin: 0 auto;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
}

.better{

}
</style>
