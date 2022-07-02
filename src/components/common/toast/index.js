import Toast from "./Toast";
export const obj={
}
obj.install=function (Vue){
  //1.创建组件构造器
  const toastConstruction=Vue.extend(Toast);

  //2.根据组件构造器，new一个对象
  const toast=new toastConstruction();

  //3.将组件的对象，手动挂载到某个元素上
  toast.$mount(document.createElement('div'));

  //4.将创建的组件对象添加到body中
  document.body.appendChild(toast.$el);

  //在vue的原型中添加一个toast方法

  Vue.prototype.$toast=toast;


}
export default obj;
