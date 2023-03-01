import { App } from "vue";

import {
  ElConfigProvider,
  ElButton,
  ElContainer,
  ElHeader,
  ElMain,
  ElAutocomplete,
  ElInput,
  ElRow,
  ElCol
} from "element-plus";

export const registerElement = (app: App) => {
  app
    .use(ElConfigProvider)
    .use(ElButton)
    .use(ElContainer)
    .use(ElHeader)
    .use(ElMain)
    .use(ElAutocomplete)
    .use(ElInput)
    .use(ElRow)
    .use(ElCol)
    ;
};
