/*
 * @Author: wudongmei2
 * @Date: 2023-02-27 14:31:58
 * @LastEditors: wudongmei2
 * @LastEditTime: 2023-02-27 14:44:11
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    // 是可选的
    breadcrumb?: boolean;
    // 每个路由都必须声明
    transition?: boolean;
    title: string;
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/views/home/index.vue"),

    children: [],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
