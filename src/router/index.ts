/*
 * @Author: your name
 * @Date: 2024-05-21 14:51:57
 * @LastEditTime: 2024-05-21 17:24:54
 * @LastEditors: FYZ-GIS
 * @Description: In User Settings Edit
 * @FilePath: \easymap-uamp-login\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import {
  baseUrl
} from "../../package.json";

// 静态路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '',
    meta: {},
    redirect: '/login',
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: { hidden: true },
  },
  {
    path: "/about",
    component: () => import("@/views/about/index.vue"),
    meta: { hidden: true },
  }
];

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHistory(baseUrl),
  routes: constantRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

/**
 * 重置路由
 */
export function resetRouter() {
  router.replace({ path: "/login" });
}

export default router;
