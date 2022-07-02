import {request} from "./request";
export function getDetail(iid){
  return request({
    url:'detail',
    params:{
      iid
    }
  })
}

export class Goods{
  constructor(itemInfo,columns,shopInfo) {
    //标题
    this.title=itemInfo.title;
    //打折之后的价格
    this.price=itemInfo.price;
    //打折之前的价格
    this.oldPrice=itemInfo.oldPrice;
    //折扣
    this.discountDesc=itemInfo.discountDesc;
    //列
    this.columns=columns;
    //服务
    this.services=shopInfo.services
    //商品描述
    this.desc=itemInfo.desc;
    //商品的最低价
    this.lowNowPrice=itemInfo.lowNowPrice
    //商品id
    this.iid=itemInfo.iid;
    this.imgURL=itemInfo.topImages[0];
  }
}
export class Shop{
  constructor(shopInfo) {
      this.name=shopInfo.name;
      this.shopLogo=shopInfo.shopLogo;
      this.score=shopInfo.score;
      //销售量
      this.cSells=shopInfo.cSells;
      //商品收藏
      this.cGoods=shopInfo.cGoods;
  }
}
export class GoodsParams{
  constructor(info,rule) {
    this.info=info;
    this.rule=rule;
    //某些商品可能有值也可能没有，所以需要判断
    this.images=info.images ? info.images[0] :'';
  }
}
export function getReCommend(){
  return request({
    url:'recommend',
  })
}


