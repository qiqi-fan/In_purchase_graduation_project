<template>
  <a-row justify="center">
    <a-col :span="6">col-3</a-col>
    <a-col :span="3">col-3</a-col>
    <a-col :span="3">col-3</a-col>
    <a-col :span="3">col-3</a-col>
    <a-col :span="3">col-3</a-col>
    <a-col :span="6">col-6</a-col>
  </a-row>
</template>
<script setup>
import { ref } from 'vue';
const activeKey = ref('1');
</script>
<style scoped>
:deep(#components-grid-demo-flex) [class~='ant-row'] {
  background: rgba(128, 128, 128, 0.08);
}
</style>