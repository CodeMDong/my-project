<script setup>
import card from "./components/card.vue";
import CartHeader from "@/components/cart-header/index.vue";
const cartColumn = [
  { label: "", span: 3 },
  { label: "编号 / 客户", span: 5, styleObj: { paddingLeft: "20px" } },
  { label: "所属区域", span: 2 },
  { label: "报价人 / 时间", span: 3 },
  { label: "配置", span: 2, styleObj: { paddingLeft: "12px" } },
  { label: "方式 / 年限", span: 2, styleObj: { paddingLeft: "8px" } },
  { label: "价格", span: 6 },
];
</script>
<template>
  <div class="main">
    <cart-header class="header" :columns="cartColumn" />
    <card :columns="cartColumn" v-for="(item, index) in 3" :key="index" />
  </div>
</template>
<style lang="scss">
.main {
  width: 100%;
  .header {
    margin-bottom: 10px;
  }
}
</style>
