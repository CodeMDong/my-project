<script setup>
const props = defineProps({
  columns: Array,
});
</script>
<template>
  <el-row>
    <el-col
      v-for="(item, index) in props.columns"
      :key="index"
      :span="item.span"
      :style="item.styleObj"
      ><span class="label">{{ item.label }}</span></el-col
    >
  </el-row>
</template>
<style scoped lang="scss">
.label {
  font-size: 14px;
  line-height: 18px;

  color: #abb6ba;
}
</style>
