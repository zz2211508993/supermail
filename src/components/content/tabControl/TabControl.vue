<template>
    <div class="tab-control">
        <div class="tab-control-item"
             v-for="(item,index) in titles"
             :class="{active:currentIndex===index}"
             @click="itemClick(index)"
        >
            <span>{{item}}</span>
        </div>

    </div>
</template>

<script>
export default {
  name:'TabControl',
  props:{
    titles:{
      type:Array,
    }
  },
  data(){
    return{
      currentIndex:0,
    }
  },
  methods:{
    itemClick(index) {
      this.currentIndex=index;
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped>
  .tab-control-item{
    flex:1;
  }
  .active{
    color:var(--color-tint)
  }
  .active span{
    border-bottom: 1px solid var(--color-high-text);
    padding: 5px;
  }
</style>
