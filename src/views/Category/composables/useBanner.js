import { getBannerAPI } from "@/apis/Home";

import { ref, onMounted } from "vue";

export function useBanner() {
  const bannerList = ref([]);
  const getBanner = async () => {
    const res = await getBannerAPI({ distributionSite: "2" });
    // console.log(res);
    bannerList.value = res.result;
  };
  onMounted(() => getBanner());
  // 路由参数发生变化后，可以通过路由监听器来监听路由参数的变化
 return {
    bannerList
 }
}
