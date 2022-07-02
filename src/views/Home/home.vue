<template>
  <div id='home' class="home">
    <nav-bar class="home-nav">
      <div slot="center">我是中间部分</div>
    </nav-bar>
    <tab-control
      :titles="['流行','新款','精选']"
      class="tab-control"
      @tabClick="tabControlClick"
      ref="tabControl1"
      v-show="isShowTab"
    >
    </tab-control>
    <keep-alive>
    <scroll class="content" ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pullUpLoad="true"
            @pullUp="pullingUp"
    >
      <home-swiper :banner="banner" ref="swiper" @swiperLoadImages="swiperLoadImages"></home-swiper>
      <recommend-view :recommends="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行','新款','精选']"
        class="tab-control"
        @tabClick="tabControlClick"
        ref="tabControl2"
      >
      </tab-control>
      <GoodsList :goods="resultData"></GoodsList>
    </scroll>
    </keep-alive>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>

</template>

<script>
import HomeSwiper from "./chlidComp/HomeSwiper";
import RecommendView from "./chlidComp/RecommendView";
import FeatureView from "./chlidComp/FeatureView";

import navBar from "components/common/nav-bar/navBar";
import Scroll from "../../components/common/scroll/Scroll";


import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";


import {itemListenerMixin,BackTopMixin} from "common/mixin";
import {getMultipleData,getHomeData} from "network/home";
import {debounce} from "common/debounce";

export default {
  name: "home",
  components: {
    BackTop,
    FeatureView,
    HomeSwiper,
    RecommendView,

    navBar,
    Scroll,

    TabControl,
    GoodsList
  },

  data() {
    return {
      banner: null,
      recommend: null,
      goods: {
        'pop': {
          page: 0,
          list: [],
        },
        'new': {
          page: 0,
          list: [],
        },
        'sell': {
          page: 0,
          list: [],
        },
      },
      currentType: 'pop',
      isShow:false,
      //记录tabControl的offsetTop值
      tabControlTop:null,
      //记录当前是否需要添加类名
      isFixed:false,
      //是否显示后面那个tab-control
      isShowTab:false,
      //记录离开的y值
      saveY:0,
    }
  },
  mixins:[itemListenerMixin,BackTopMixin],
  created() {
    //1.请求多条数据
    this.getMultipleData()
    //2.请求商品的数据
    this.getHomeData('pop')
    this.getHomeData('new')
    this.getHomeData('sell')
  },
  mounted() {
    //  3.使用事件总线
    /*const refresh= debounce(this.$refs.scroll.refresh,500)
    this.$bus.$on('loadItemsImages',()=>{
      refresh()
    })*/
  },
  //活跃的时候，当前页面
  activated() {
    //设置为不活跃的值
    this.$refs.scroll.scrollTo(0,this.saveY,1000)
    //重新刷新一下
    this.$refs.scroll.refresh();
  },
  //不活跃的时候，也就是跳转到其他页面的时候
  deactivated() {
    //记录不活跃的y值
    this.saveY=this.$refs.scroll.getScrollY();
  },
  computed: {
    resultData() {
      return this.goods[this.currentType].list
    }
  },

  methods: {
    //事件监听相关的方法
    //网络请求相关的方法
    getMultipleData() {
      getMultipleData().then(res => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    },
    getHomeData(type) {
      this.page = this.goods[type].page + 1;
      getHomeData(type, this.page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp()
      })
    },
    //点击tab选项卡，切换对应的数据
    tabControlClick(index) {
      this.currentType = 'pop'
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
        this.$refs.tabControl1.currentIndex=index;
        this.$refs.tabControl2.currentIndex=index;

    },
    //回到顶部
    backClick(){
      this.$refs.scroll.scrollTo(0,0,2000)
    },
    //滚动事件
    contentScroll(position){
      //1.回到顶部
      //   this.isShow=(-position.y) >1000;
      this.demo(position)
     //2.是否需要设置类名
     //    this.isFixed=(-position.y) >this.tabControlTop;
     // 3.是否需要显示之前的哪个tab-control
      this.isShowTab=(-position.y) >this.tabControlTop;
    },
    //防抖函数
    pullingUp(){
      this.getHomeData(this.currentType)
    },
    swiperLoadImages(){
      this.tabControlTop=this.$refs.tabControl2.$el.offsetTop
    }
  }



}
</script>

<style scoped>
  #home{
    height:100vh;
    position: relative;
    padding-top: 44px;
    box-sizing: border-box;
  }
  .home-nav{
    background-color: var(--color-tint);
    color:white;
    position: fixed;
    left:0;
    top:0;
    right:0;
    z-index: 100;
  }
  .tab-control{
    display: flex;
    position: relative;
    background-color: white;
    z-index: 101;
 /*   top: 44px;
    left:0;
    right: 0;
    z-index: 99;
    */
    line-height: 44px;
    height: 44px;
    text-align:center;
  }

  .content{
    position: absolute;
    left:0;
    right: 0;
    top:44px;
    bottom: 49px;
    z-index: 9;
  }
/*  .content{
    height:calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  }*/
</style>
