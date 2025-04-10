import { createRouter, createWebHistory } from 'vue-router'

// 컴포넌트 import (이 컴포넌트들은 `views` 폴더 안에 있어야 해)
import HomeView from '../views/HomeView.vue'
import SettingView from '../views/SettingView.vue'

const routes = [
  {
    path: '/', // 메인 페이지
    name: 'Home',
    component: HomeView
  },
  {
    path: '/setting', // 추가할 페이지 예시
    name: 'Setting',
    component: SettingView
  }
]

const router = createRouter({
  history: createWebHistory(), // HTML5 History 모드
  routes
})

export default router
