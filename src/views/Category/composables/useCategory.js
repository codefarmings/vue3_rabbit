import { ref, onMounted } from "vue";
import { getCategoryAPI } from "@/apis/category";
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";

export function useCategory() {
  const categoryDate = ref({});
  const route = useRoute();
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id);
    categoryDate.value = res.result;
  };
  onMounted(() => {
    getCategory(route.params.id);
  });
  onBeforeRouteUpdate((to) => {
    console.log("路由变化了");
    getCategory(to.params.id);
  });
  return {
    categoryDate,
  };
}
