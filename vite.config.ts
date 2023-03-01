/*
 * @Author: wudongmei2
 * @Date: 2023-02-27 14:12:16
 * @LastEditors: wudongmei2
 * @LastEditTime: 2023-02-27 15:53:18
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "/",
  resolve: {
    alias: {
      "@": resolve("./src"),
      "@c": resolve("./src/components"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          '@import "@/styles/mixin.scss";@import "@/styles/variable.scss";',
      },
    },
  },
  plugins: [
    vue({}),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/icons")],
      symbolId: "icon-[dir]-[name]",
    }),
  ],
});
