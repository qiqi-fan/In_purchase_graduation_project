<!-- GlobalAlert.vue -->
<template>
  <a-alert :title="title" :type="type" :closable="closable" v-model:visible="visible" />
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    title: String,
    type: String,
    closable: Boolean,
    duration: Number
  },
  setup(props) {
    const visible = ref(false);

    return {
      visible
    };
  }
};
</script>
