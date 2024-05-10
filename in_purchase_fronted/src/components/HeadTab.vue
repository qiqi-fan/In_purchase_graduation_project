<template>
<!--  <a-page-header style="padding: 0;min-width: 1100px;overflow-x: scroll;-ms-overflow-style: none;scrollbar-width: none">-->
<!--    <a-row justify="center" :wrap="false" align="middle">-->
<!--      <a-col :span="4"></a-col>-->
<!--      <a-col :span="5">-->
<!--        <div style="width: 60px;height: 60px;background-color:black;"></div>-->
<!--      </a-col>-->
<!--      <a-col :span="9">-->
<!--        <div class="input-container">-->
<!--          <input type="text" name="text" class="input" placeholder="search...">-->
<!--          <span class="icon">-->
<!--            <svg style="cursor: pointer" width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>-->
<!--          </span>-->
<!--        </div>-->
<!--      </a-col>-->
<!--      <a-col :span="2">-->
<!--        <div @click="login()" style="cursor: pointer" >-->
<!--          <Icon icon="iconamoon:profile-light" width="20px" style="position: absolute;color: #001858;margin-top: 2px;margin-left: -18px"></Icon>-->
<!--        <span style="color: #f582ae;cursor: pointer" @click="login()">{{user}}</span>-->
<!--        </div>-->

<!--      </a-col>-->
<!--      <a-col :span="3"></a-col>-->
<!--    </a-row>-->

<!--    <a-row-->
<!--        justify="center;"-->
<!--        style="-->
<!--        margin-top: 15px;-->
<!--        padding:0;-->
<!--        height: 35px;-->
<!--        align-items: center;-->
<!--        color: #001858 !important;-->

<!--    ">-->
<!--        <a-col :span="3"></a-col>-->
<!--        <a-col :span="3"-->
<!--               style="-->
<!--               background-color: #f582ae;-->
<!--               display: block;-->
<!--               height: 35px;-->
<!--               line-height: 30px;-->
<!--               border:2px solid #001858;-->
<!--               border-bottom: none;-->
<!--               border-top-left-radius: 5px;-->
<!--                border-top-right-radius: 5px;-->
<!--                color: #fef6e4;-->
<!--                font-size: 16px;-->
<!--                font-family:'mellow and full',serif ;-->
<!--                cursor: pointer;-->
<!--                "-->
<!--        >-->
<!--&lt;!&ndash;               <Icon icon="material-symbols:list-rounded" style="float:left;margin-left: 10px;margin-top: 3px" width="25px" color="#001858"></Icon>&ndash;&gt;-->
<!--                <DropDown></DropDown>-->
<!--        </a-col>-->
<!--      <a-col :span="1"></a-col>-->
<!--        <a-col class="tab" :span="3" ><router-link to="/">商城首页</router-link></a-col>-->
<!--        <a-col class="tab" :span="3"><router-link to="store">店铺与商品</router-link></a-col>-->
<!--        <a-col class="tab" :span="3"><router-link to="shoppingCart">购物车</router-link></a-col>-->
<!--        <a-col class="tab" :span="3"><router-link to="user">个人中心</router-link></a-col>-->
<!--        <a-col class="tab" :span="3">帮助及反馈</a-col>-->
<!--      <a-col :span="2"></a-col>-->
<!--      </a-row>-->
<!--    <Login :open="openLoginPage" @closeLogin="closeLogin"></Login>-->
<!--  </a-page-header>-->
  <div class="nav" >
    <div class="part">
      <a>
        <a-dropdown>
          <a class="ant-dropdown-link" @click.prevent>
            <div @click="login()" style="display: inline-block;width:100px;cursor: pointer;font-family: Arial,serif" >
              <Icon icon="iconamoon:profile-light" width="20px" style="position: absolute;color: #001858;margin-top: 10px;margin-left: -18px"></Icon>
              <span style="color: #f582ae;margin-left:10px;cursor: pointer" @click="login()">
          {{user}}
        </span>
            </div>
            <DownOutlined />
          </a>
          <template #overlay>
            <a-menu v-if="user!=='登录注册'">
              <a-menu-item>
                <a href="javascript:;" @click="LoginOut">退出登录</a>
              </a-menu-item>
<!--              <a-menu-item>-->
<!--                <a href="javascript:;">2nd menu item</a>-->
<!--              </a-menu-item>-->
<!--              <a-menu-item>-->
<!--                <a href="javascript:;">3rd menu item</a>-->
<!--              </a-menu-item>-->
            </a-menu>
          </template>
        </a-dropdown>

      </a>
      <a href="#"><router-Link to="/">商城首页</router-Link></a>
      <a href="#"><router-link to="store">店铺及商品</router-link></a>
      <a href="#"><router-link to="shoppingCart">购物车</router-link></a>
      <a href="#"><router-link to="user">个人主页</router-link></a>
    </div>
<!--    <a href="#" class="help">帮助及反馈 </a>-->
        <Login :open="openLoginPage" @closeLogin="closeLogin"></Login>

  </div>
</template>
<script setup>
import {Icon} from '@iconify/vue'
import {onMounted, ref} from "vue";
import userStore from "@/stores/userStore.js";
import Login from "@/views/Login.vue";
import DropDown from "@/components/index/DropDown.vue";
import axios from "axios";
import getUserInfoAPI from "@/api/index/getUserInfoAPI.js";
const useStore = userStore()
// const {user}=storeToRefs(useStore)
const user = ref("登录注册")


onMounted(async () => {
  if (localStorage.getItem('userToken')!==null) {
    console.log(sessionStorage.getItem("currentUserName"))
    user.value = sessionStorage.getItem("currentUserName")
    await useStore.fetchUserInfo();
    const obj = useStore.getAllUserInfo()
    // console.log(obj)
  } else {
    user.value = '登录注册'
  }
})
const openLoginPage=ref(false);
const login=function (){
  openLoginPage.value=true;
}
const LoginOut = ()=>{
  sessionStorage.clear()
  localStorage.clear()
  window.location.reload()
}
const closeLogin=function (){
  openLoginPage.value=false
}
const basicTabStyle={
  "hover":"rgba(245,130,174,0.5)"
}
</script>
<style scoped lang="less">
//:deep(#components-grid-demo-flex) [class~='ant-row'] {
//  background: rgba(128, 128, 128, 0.08);
//}
//.input-container {
//  width: 360px;
//  position: relative;
//}
//.icon {
//  position: absolute;
//  right: 10px;
//  top: calc(50% + 5px);
//  transform: translateY(calc(-50% - 5px));
//}
//.input {
//  width: 100%;
//  height: 40px;
//  padding: 10px;
//  transition: .2s linear;
//  border: 2.5px solid #172c66;
//  font-size: 14px;
//  text-transform: uppercase;
//  letter-spacing: 2px;
//  border-radius: 5px;
//}
//
//.input:focus {
//  outline: none;
//  border: 0.5px solid #172c66;
//  /*box-shadow: -5px -5px 0px #6FA9B1;*/
//}
//
//.input-container:hover > .icon {
//  animation: anim 1s linear infinite;
//}
//
//@keyframes anim {
//  0%,
//  100% {
//    transform: translateY(calc(-50% - 5px)) scale(1);
//  }
//
//  50% {
//    transform: translateY(calc(-50% - 5px)) scale(1.1);
//  }
//}

.ant-col.tab{
  height: 35px;
  line-height: 35px;
  font-family: "mellow and full",serif;
  font-size: 16px;
}
.ant-col.tab:hover {
  background-color: rgba(245,130,174,0.5);
  border-radius: 18px;
  color: #001858;
}
.nav {
  height: 41px;
  border-top: 3px solid #62887f;
  border-bottom: 1px solid #edeef0;
  background-color: #fcfcfc;
  line-height: 41px;
}

.nav a {
  display: inline-block;
  height: 41px;
  padding: 0 20px;
  font-size: 12px;
  color: #4c4c4c;
  text-decoration: none;
}

.nav a:hover {
  background-color: #eee;
  color: #62887f;
}

.nav .into {
  float: left;
  margin-left: 30px;
}

.nav .part {
  display: inline-block;
  margin-left: 10em;
  position: absolute;
  height: 41px;
}

.nav .part a {
  margin-left: 20px;
}

.nav .help {
  float: right;
  margin-right: 30px;
}

</style>