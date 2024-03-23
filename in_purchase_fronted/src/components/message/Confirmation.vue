<!-- Confirmation.vue -->
<template>
  123
  <div class="confirmation">
    <div>{{ config.message }}1111111111111</div>
    <button @click="handleConfirm">22222222222222{{ config.confirmText }}</button>
    <button @click="handleCancel">{{ config.cancelText }}</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const visible = ref(false);
    const config = ref({}); // 使用 ref 来存储配置对象
    let resolve; // 存储 Promise 的 resolve 函数

    const handleConfirm = () => {
      resolve(true); // 确认时 resolve Promise
      visible.value = false;
    };

    const handleCancel = () => {
      resolve(false); // 取消时 resolve Promise
      visible.value = false;
    };

    // 提供给外部调用的函数，接受一个配置对象作为参数
    const $confirmation = (options) => {
      config.value = options; // 设置配置对象
      visible.value = true;
      console.log(config.value)
      return new Promise((res) => {
        resolve = res;
        console.log(visible.value)
      });
    };

    return {
      visible,
      config,
      handleConfirm,
      handleCancel,
      $confirmation
    };
  }
};
</script>

<style scoped>
.confirmation {
  position: relative;
  background-color: lightpink;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*background-color: white;*/
  padding: 20px;
  border: 1px solid black;
}
</style>
