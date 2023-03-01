/*
 * @Author: wudongmei2
 * @Date: 2023-02-27 14:12:16
 * @LastEditors: wudongmei2
 * @LastEditTime: 2023-02-27 15:05:03
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "virtual:svg-icons-register";
import router from "./routes";
import SvgIcon from "@/components/svg-icon/index.vue";
import "virtual:svg-icons-register"; //svg-icons
let app = createApp(App);
app.component("SvgIcon", SvgIcon);
app.use(router).mount("#app");
