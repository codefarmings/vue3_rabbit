//axios的基础封装
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";
import axios from "axios";
import { useUserStore } from "@/stores/user";
import router from '@/router'
const http = axios.create({
  //根地址
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  //超时时间
  timeout: 8000,
});

// axios请求拦截器
http.interceptors.request.use(
  (config) => {
    const useStore = useUserStore();
    const token = useStore.userInfo.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (e) => Promise.reject(e)
);

// axios响应式拦截器
http.interceptors.response.use(
  
  (res) => res.data,
  (e) => {
    const useStore = useUserStore();
    ElMessage({
      type: "warning",
      message: e.response.data.message,
    });
    // token401响应处理
    if(e.response.status === 401){
      useStore.clearUserInfo()
      router.push('/login')
    }
    return Promise.reject(e);
  }
);

//导出
export default http;
