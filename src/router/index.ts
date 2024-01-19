import { createRouter, createWebHistory } from 'vue-router'
import GameHome from '../pages/GameHome.vue'

const routes = [
  {
    path: "/",
    redirect: { name: "GameHome" }
  },
  {
    path: "/GameHome",
    name: "GameHome",
    component: GameHome
  },
  {
    path: "/GameResult",
    name: "GameResult",
    component: () => import("../pages/GameResult.vue")
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})