<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data(){
    return {
      BScroll:null,
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0,
    },
    pullUpLoad:{
      type:Boolean,
      default:false,
    }
  },
  mounted() {
    //1.创建Bscroll对象
    this.BScroll=new BScroll(this.$refs.wrapper,{
      probeType:this.probeType,
      click:true,
      pullUpLoad: this.pullUpLoad
    })
    //2.监听滚动的位置
    if(this.probeType===2 || this.probeType===3){
      this.BScroll.on('scroll',(position)=>{
        this.$emit('scroll',position);
      })
    }
    //3.监听BScroll是否滚动到底部
    if(this.pullUpLoad) {
      this.BScroll.on('pullingUp', () => {
        this.$emit('pullUp')
      })
    }
  },
  methods:{
    scrollTo(x,y,time=500){
      this.BScroll && this.BScroll.scrollTo(x,y,time)
    },
    finishPullUp(){
     this.BScroll && this.BScroll.finishPullUp();
    },
    refresh(){
      this.BScroll && this.BScroll.refresh();
    },
    getScrollY(){
      return this.BScroll ? this.BScroll.y : 0
    }
  },

}
</script>

<style scoped>

</style>
