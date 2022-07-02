import {debounce} from "./debounce";
export const itemListenerMixin={
  data(){
    return {
      itemImgListener:{},
      newRefresh:{}
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh,100);
    this.itemImgListener= () => {
      this.newRefresh();
    }
    this.$bus.$on('loadItemsImages',this.itemImgListener)
  }
}

export const BackTopMixin={
  data(){
    return{
      isShow:false,
    }
  },
  methods:{
    backClick(position){
      this.$refs.scroll.scrollTo(0,0,2000)
    },
    demo(position){
      this.isShow=(-position.y) >1000;
    }
  }
}
