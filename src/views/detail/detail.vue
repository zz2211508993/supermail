<template>
    <div class="detail" id="detail">
      <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
      <Scroll class="content" ref="scroll" @scroll="contentClick" :probe-type="3">
        <detail-swiper :top-images="topImages"/>
        <detail-infos :goods="goods"></detail-infos>
        <detail-shop-info :shop-info="shopInfo"></detail-shop-info>
        <detail-goods-info :detailInfo="detailInfo" @loadImages="loadImages"></detail-goods-info>
        <detail-params-info :goods-params="goodsParams" ref="params"></detail-params-info>
        <detail-comment :rate="rate" ref="comment"></detail-comment>
        <detail-recommend :list="list" ref="recommend"></detail-recommend>
      </Scroll>
      <back-top @click.native="backClick" v-show="isShow"></back-top>
      <detail-bottom-bar @barClick="barClick"></detail-bottom-bar>

    </div>
</template>

<script>
import {getDetail,Goods,Shop,GoodsParams,getReCommend} from "network/detail";



import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailInfos from './childComps/DetailInfos'
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamsInfo from "./childComps/DetailParamsInfo";
import DetailComment from "./childComps/DetailComment";
import DetailRecommend from "./childComps/DetailRecommend";
import DetailBottomBar from "./childComps/DetailBottomBar";

import BackTop from "components/content/backTop/BackTop";
import Toast from "components/common/toast/Toast";

import Scroll from "components/common/scroll/Scroll";
import {itemListenerMixin,BackTopMixin} from "common/mixin";
import {debounce} from "common/debounce";

export default {
  name: "Detail",
  components: {
    DetailInfos,
    DetailNavBar,
    DetailSwiper,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailComment,
    DetailRecommend,
    DetailBottomBar,

    BackTop,
    Toast,
    Scroll,
  },
  data(){
    return{
      iid:null,
      topImages:[],
      data:{},
      goods:{},
      shopInfo:{},
      detailInfo:{},
      goodsParams:{},
      rate:{},
      list:[],
      themeTops:[],
      obj:{},
      getThemeTops:function (){

      },
      //记录索引
      currentIndex:0,


    }
  },
  mixins:[itemListenerMixin,BackTopMixin],
  created() {
    this.iid=this.$route.params.id;
    getDetail((this.iid)).then(res=>{
      //1.保存商品数据
      this.data=res.result;
      this.topImages=this.data.itemInfo.topImages;
      // 2.获取商品信息
      this.goods=new Goods(this.data.itemInfo,this.data.columns,this.data.shopInfo);
      // 3.创建店铺的信息的对象
      this.shopInfo=new Shop(this.data.shopInfo);
      // 4.保存商品的详情数据
      this.detailInfo=this.data.detailInfo;
      //5.保存商品的参数
      this.goodsParams=new GoodsParams(this.data.itemParams.info,this.data.itemParams.rule);
      //6.保存评论的信息
      this.rate=this.data.rate;

      //会等到里面的所有函数中的数据执行完，之后在执行这个函数
/*      this.$nextTick(()=>{
        //这个函数拿不到图片的高度，会出现问题
        this.themeTops.push(0)
        this.themeTops.push(this.$refs.params.$el.offsetTop)
        this.themeTops.push(this.$refs.comment.$el.offsetTop)
        this.themeTops.push(this.$refs.recommend.$el.offsetTop)
        console.log(this.themeTops)
      })*/
      this.getThemeTops=debounce(()=>{
        this.themeTops=[];
        this.themeTops.push(0)
        this.themeTops.push(this.$refs.params.$el.offsetTop)
        this.themeTops.push(this.$refs.comment.$el.offsetTop)
        this.themeTops.push(this.$refs.recommend.$el.offsetTop)

        //hack的方式
        this.themeTops.push(Number.MAX_VALUE);
      },100)
    })
    getReCommend().then(res=>{
        this.list=res.data.list;
    })
  },
  //在mounted中拿不到$el的
  mounted() {
/*    this.themeTops.push(0)
    this.themeTops.push(this.$refs.params.$el.offsetTop)
    this.themeTops.push(this.$refs.comment.$el.offsetTop)
    this.themeTops.push(this.$refs.recommend.$el.offsetTop)
    console.log(this.themeTops)*/
  },
  destroyed() {
    //销毁就取消事件总线
    this.$bus.$off('itemImgLoad',this.itemListenerMixin)
  },
  methods:{
    loadImages(){
      //调用scroll的refresh重新计算滚动区域
       this.newRefresh();
       this.getThemeTops();
    },
    titleClick(index){
      this.$refs.scroll.scrollTo(0,-this.themeTops[index] +44,1000)
    },
    contentClick(position){
      let positionY=-position.y +44;
      let length=this.themeTops.length
      for(let i=0;i<length;i++){
        // index=0 (当前滚动的区域) > 0 < 5497
        // index=1 (当前滚动的区域) > 5497 <6316
        // index=2  (当前滚动的区域) > 6316 < 6514
        // index=3 (当前的滚动的区域) > = 6514

        //就是到达了参数 或者评论 或者推荐的时候，i会改变，所以this.currentIndex 这时候会执行
        //并且执行如果大于或者等于才会执行 最后一个 不然执行前面那个
     /*   if(this.currentIndex!==i && ( (i < length -1 && positionY >= this.themeTops[i] && positionY < this.themeTops[i + 1]) || (i === length -1 && positionY >= this.themeTops[i]))){
          this.currentIndex = i;
          this.$refs.nav.currentIndex=this.currentIndex;
        }*/
        //hack方式
        if(this.currentIndex!==i && positionY >= this.themeTops[i] && positionY < this.themeTops[i+1]){
            this.currentIndex=i;
            this.$refs.nav.currentIndex=this.currentIndex;
        }
      }
      this.demo(position)
    },
    barClick(){
      //1.商品的信息
      this.product={}
      this.product.title=this.goods.title;
      this.product.desc=this.goods.desc;
      this.product.price=this.goods.price;
      this.product.oldPrice=this.goods.oldPrice;
      this.product.iid=this.goods.iid;
      this.product.imgURL=this.goods.imgURL;
      this.product.lowNowPrice=this.goods.lowNowPrice;


      //2.添加数据到购物车
      //发送事件给actions
      this.$store.dispatch('addData',this.product).then(res=>{
        this.$toast.show(res,1500)
      })


    }
  }
}
</script>

<style scoped>
  #detail{
    height: 100vh;
    position: relative;
    z-index: 99;
    padding: 0 10px;
    box-sizing: border-box;
    background: white;
  }
  .content{
    height: calc(100% - 44px - 50px);
  }
  .detail-nav{
    position: relative;
    z-index: 99;
    background: white;

  }
</style>
