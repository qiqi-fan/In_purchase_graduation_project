<template>
<!--  <h1>商城首页</h1>-->
  <a-layout style="display: flex;flex-direction: column">
    <a-layout-header class="headerStyle">
      <head-tab></head-tab>
    </a-layout-header>
    <a-layout-content>
      <a-row>
        <a-col :span="12" :offset="6">
          111111
<!--          <a-input-search :value="value" @search="onSearch"></a-input-search>-->
        </a-col>
      </a-row>
    </a-layout-content>
  </a-layout>


</template>

<script>
import {ref} from "vue";
import HeadTab from "@/components/HeadTab.vue";

export default {
  name: "Index",
  components: {HeadTab},
  setup(){
    const value = ref();
    const onSearch = searchValue => {
      console.log(searchValue+'search!');
    }
    return{
      value,
      onSearch,
    }
  }
}
</script>

<style scoped>
  .headerStyle{
  text-align: center;
  color: #fff;
  height: 100%;
  padding-inline: 30px;
  line-height: 44px;
    background-color: #fdf2d9;
    border-bottom:2px solid #001858
}
</style>