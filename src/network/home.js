import {request} from "./request";

export function getMultipleData(){
  return request({
    url:'home/multidata'
  })
}
export function getHomeData(type,page){
  return request({
    url:'home/data',
    params:{
      type,
      page
    }
  })
}
/*
      函数调用 ->压入函数栈(保存函数调用过程中的所有变量)
      函数调用结束 ->弹出函数栈(释放(删除)函数中的所有变量)

      names 只是指向了一个内存地址
      只要变量指向内存地址，那么内存地址永远不会被回收
      如果没有变量指向内存地址，那么就会在函数销毁的时候，删除变量和内存地址
      如果将a赋值为names，就是赋值内存地址
      也就是说函数执行销毁，names变量名删除，那么内存地址还在

*/
// function test() {
//   const names = ['why', 'aaa']
//   const a=names
// }
//
// test()
//
// test()
