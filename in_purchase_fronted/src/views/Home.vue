<template>

  <a-layout :style="{display: $route.params.show}">
    <a-layout-header :style="headerStyle" style="height: 44px">
    </a-layout-header>
    <a-layout-content :style="contentStyle">
    </a-layout-content>
    <a-layout-footer :style="footerStyle">Footer</a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>