import { useIntersectionObserver } from "@vueuse/core";
// 定义懒加载插件
export const lazyPlugin = {
  install(app) {
    app.directive("img-lazy", {
      // el:指令绑定的那个元素img
      // binging：binding.value 指令等于号后面绑定的表达式的值，图片url
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          console.log(isIntersecting);
          if (isIntersecting) {
            el.src = binding.value;
            stop();
          }
        });
      },
    });
  },
};
