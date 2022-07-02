<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- slot要用一个div包裹起来，防止被属性被替换，让div使用那个属性    -->
    <div v-if="!isActive"><slot name="slot-icon"></slot></div>
    <div v-else class="slot-icon-active"><slot name="slot-icon-active"></slot></div>
<!--    {'active':false/true} 为true就赋值active-->
    <div :style="activeColor"><slot name="slot-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor1:{
      type:String,
      default:'red',
    }
  },
  data(){
    return{
      // isActive: false,
      active1:'color',
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    activeColor(){
      //选中的颜色变为传递进来的
      return this.isActive ? {color:this.activeColor1}: {}
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex:1;
  font-size: 14px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>
