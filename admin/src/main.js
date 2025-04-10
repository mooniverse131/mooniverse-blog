import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // 라우터 가져오기

createApp(App).use(router).mount("#app"); // 앱에 라우터 적용
