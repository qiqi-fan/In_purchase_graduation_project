<template>
  <a-dropdown placement="bottom" @openChange="showMenu()" loading="true">
    <a class="ant-dropdown-link" @click.prevent>
      所有类目
    </a>
    <template #overlay>
      <a-menu style="width: 138px;background-color: #f582ae;color: #001858">
        <template v-for="(menu, index) in menuList">
          <template v-if="menu.secondRoute && menu.secondRoute.length > 0">
            <a-sub-menu :key="index" :title="menu.firstRoute">
              <a-menu-item v-for="(submenu, subindex) in menu.secondRoute" :key="subindex">
                {{ submenu }}
              </a-menu-item>
            </a-sub-menu>
          </template>
          <template v-else>
            <a-menu-item :key="index">{{ menu.firstRoute }}</a-menu-item>
          </template>
        </template>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script setup>
import {getAllMenu} from "@/api/index/menuApi.js";
import {message} from "ant-design-vue";
import {onMounted, ref} from "vue";

const menuList = ref([])
const getMenu = async function (){
  await getAllMenu().then(res=>{
    if(res.data.code === 200){
      menuList.value = res.data.data;
      // console.log(menuList.value)
    }else{
      message.info(res.data.msg)
    }
  }).catch(err=>{
    message.error(err)
  })
  console.log(getAllMenu());
}
const showMenu = function (){
  // console.log(menuList.value )
}
onMounted(()=>{
  console.log("123"+menuList.value)
  getMenu();
})
// console.log(123)
</script>
<style>

</style>
