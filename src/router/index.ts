import {createMemoryHistory, createRouter, RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../views/index.vue"),
    meta: {
      title: "首页"
    }
  },
  {
    path: "/settings",
    component: () => import("../views/settings.vue"),
    meta: {
      title: "设置"
    }
  },
  {
    path: "/service",
    component: () => import("../views/service.vue"),
    meta: {
      title: "服务"
    }
  }
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})