<template>
  <div class="toast" v-show="isShow">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props:{
    isShow:{
      type:Boolean,
      default:false
    },
    message:{
      type:String,
    }

  },
  data(){
    return {
    }
  },
  methods:{
    show(message,timeout){
      this.message=message;
      this.isShow=true;
      setTimeout(()=>{
        this.isShow=false;
        this.message=''
      },timeout)
    }
  }
}
</script>

<style scoped>
  .toast{
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%);
    z-index: 99;
    padding: 8px 10px;
    box-sizing: border-box;
    background: pink;
  }
</style>
