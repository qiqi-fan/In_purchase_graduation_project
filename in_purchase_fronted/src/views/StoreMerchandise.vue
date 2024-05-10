<template>
  <div class="search w">
    <div class="logo"><img src="../html/img/logo.png" alt="logo" title="logo" width="200px" ></div>
    <div class="searchbox">
      <input type="text" placeholder="输入关键词" id="tags">
      <button id="search"><i class="fas fa-search" id="search-bb">

      </i></button>
    </div>
  </div>
  <!-- 产品分类总框框 -->
  <div class="line"></div>

  <!-- 所有商品 -->
  <div class="all-things" style="font-family: Arial,serif">
    <div class="w gan">
      <div class="gang">
        <ul id="ul-cloth">

          <li v-for="item in menu" :key="item.id" style="margin-left: 30px" @click="handleClick(item)">
            <a-dropdown @click="findAllType(item.id)">
              <a class="ant-dropdown-link" @click.prevent :class="{ 'clicked': item.clicked }">
                {{item.name}}
                <DownOutlined v-if="item.second.length>1"/>
              </a>
              <template #overlay>
                <a-menu @click="onClick" v-if="item.second.length>1">
                  <a-menu-item v-for="menu in item.second" :key="menu.index" @click="findTypeGoods(menu)">{{menu}}</a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </li>
        </ul><br>
      </div>
    </div>
    <div class="w goods">
      <ul class="clearfix">
        <li @click="showGoodsDetails()">
          <img src="../html/img/商品主页/1.png" alt="">
          <div class="info">
            <p>1125人正在浏览 ·</p>
            <span>￥99.00</span>
          </div>
          <h4>加绒新款冬季爆款ins潮牌卫衣男内搭2022上衣春秋外套男装打底衫</h4>

        </li>
        <li>
          <img src="../html/img/商品主页/1.png" alt="">
          <div class="info">
            <p>1125人正在浏览 ·</p>
            <span>￥99.00</span>
          </div>
          <h4>加绒新款冬季爆款ins潮牌卫衣男内搭2022上衣春秋外套男装打底衫</h4>

        </li>
        <li>
          <img src="../html/img/商品主页/1.png" alt="">
          <div class="info">
            <p>1125人正在浏览 ·</p>
            <span>￥99.00</span>
          </div>
          <h4>加绒新款冬季爆款ins潮牌卫衣男内搭2022上衣春秋外套男装打底衫</h4>

        </li>
        <li>
          <img src="../html/img/商品主页/1.png" alt="">
          <div class="info">
            <p>1125人正在浏览 ·</p>
            <span>￥99.00</span>
          </div>
          <h4>加绒新款冬季爆款ins潮牌卫衣男内搭2022上衣春秋外套男装打底衫</h4>

        </li>
        <li>
          <img src="../html/img/商品主页/1.png" alt="">
          <div class="info">
            <p>1125人正在浏览 ·</p>
            <span>￥99.00</span>
          </div>
          <h4>加绒新款冬季爆款ins潮牌卫衣男内搭2022上衣春秋外套男装打底衫</h4>

        </li>
        <li>
          <img src="../html/img/商品主页/1.png" alt="">
          <div class="info">
            <p>1125人正在浏览 ·</p>
            <span>￥99.00</span>
          </div>
          <h4>加绒新款冬季爆款ins潮牌卫衣男内搭2022上衣春秋外套男装打底衫</h4>

        </li>
        <li>
          <img src="../html/img/商品主页/1.png" alt="">
          <div class="info">
            <p>1125人正在浏览 ·</p>
            <span>￥99.00</span>
          </div>
          <h4>加绒新款冬季爆款ins潮牌卫衣男内搭2022上衣春秋外套男装打底衫</h4>

        </li>

      </ul>
    </div>
  </div>

</template>

<script setup>
import { DownOutlined } from '@ant-design/icons-vue';
import {ref} from "vue";
import {useRouter} from "vue-router";
const menu = ref([
  {id:1,name:"手机",second:["手机"]},
  {id:2,name:"智能影音",second: ["耳机","智能手环","智能手表","音箱","投影仪","智能监控"]},
  {id:3,name:"电脑办公",second: ["平板电脑","笔记本","一体机","投影仪","路由器","鼠标"]},
  {id:4,name: "摄影摄像",second: ["微单/单电","数码相机","单反相机","摄像机","拍立得"]},
  {id:5,name:"厨房电器",second: ["电压火锅","电火锅","养生壶","电水壶","电磁炉","豆浆机"]},
  {id:6,name: "生活电器",second: ["扫地机器人","吸尘器","除螨仪","挂烫机","电熨斗","风扇"]},
  {id:7,name:"美容护理",second: ["剃须刀","电吹风","颈椎按摩仪","按摩披肩","美容仪器","直/卷发器"]}
])
 const onClick = function (){

 }
 const handleClick = function (item){
   item.clicked = item.clicked !== true;
 }
const findProduct = function (key){
  let firstRouteId=0;
  let secondRoute = "";
  if(typeof key === Number){
    firstRouteId = key;
  }else {
    secondRoute=key;
  }
  const params = {
    "firstRouteId":firstRouteId,
    "secondRoute":secondRoute,
  }
}
const router = useRouter()
const showGoodsDetails=()=>{
  const params = {
    id: 123,
  };
  window.open(`/goods_details?${new URLSearchParams(params).toString()}`,'_blank')

}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.clicked {
  color: #62887f !important;
}
.w {
  width: 1200px;
  margin: auto;
}

body {
  background-color: #f3f5f7;
  /* height: 1500px; */
}

li {
  list-style: none;
}

i {
  font-size: 20px;
}

a {
  text-decoration: none;
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
  left: 15%;
}

.nav .part a {
  margin-left: 5em;
}

.nav .help {
  float: right;
  margin-right: 30px;
}

.w {
  width: 1200px;
  margin: auto;
}

.search {
  height: 100px;
  margin-top: 30px;
}

.logo {
  float: left;
  width: 150px;
  height: 100px;
  margin-left: 180px;
  margin-top: 10px;
}


.w h1 {
  float: right;
  margin-right: 200px;
}

.searchbox {
  float: left;
  width: 413px;
  height: 42px;
  background-color: rgb(224, 224, 224);
  margin-left: 70px;
  margin-top: 30px;
  border-radius: 10px;
}

.searchbox input {
  float: left;
  width: 345px;
  height: 40px;
  background-color: transparent;
  border: 1px solid transparent;
  border-right: 0px;
  color: rgb(48, 47, 47);
  font-size: 14px;
  padding-left: 15px;
  outline: none;
}

.searchbox input:hover {
  background-color: rgb(236, 236, 236);
  border-radius: 10px 0 0 10px;
}

.searchbox button {
  float: left;
  width: 50px;
  height: 42px;
  background-color: transparent;
  border: 0px solid transparent;
  border-radius: 10px;
}

.searchbox button:hover {
  background-color: rgb(150, 150, 150);
}
.line {
  background-color: #62887f;
  height: 10px;
}
.gan {
  margin-top: 30px;
}

.gang {
  height: 60px;
  line-height: 60px;
  border-width: 1px 0px;
  border-color: rgb(214, 214, 214);
  border-style: solid;
}

.gang h3 {
  float: left;
  font-weight: normal;
  margin-left: 10px;
  font-size: 13px;
  color: #112f47;
  cursor: pointer;
}


.gang ul {
  float: left;
  margin-left: 40px;
}

.gang ul li {
  float: left;
  cursor: pointer;
}

.gang ul li a {
  padding: 0 30px;
  font-size: 13px;
  color: #050505;
  border-left: 1px solid #ccc;

}

.gang ul li a:hover {
  color: #226a91;
}

.clearfix li:hover {
  box-shadow: 10px 10px 10px -4px rgba(0, 0, 0, .3);
}

.clearfix li img {
  height: 160px;
}

.goods {
  margin-top: 50px;
  
}

.goods ul {
  width: 1225px;
}

.goods ul li {
  float: left;
  width: 228px;
  height: 270px;
  background-color: #fff;
  margin-right: 15px;
  margin-bottom: 15px;
  border: 1px solid rgb(166, 165, 165);
}

.goods ul li img {
  width: 100%;

}

h4 {
  margin: 10px 4px 1px 4px;
  font-size: 14px;
  color: #6b6b6b;
  font-weight: 400;
}

/* .info{
    border: 1px solid;
} */
.info {
  margin: 10px 10px 0 20px;
  font-size: 12px;
  color: rgb(93, 92, 92);
}

.goods .info span {
  font-size: 20px;
  color: #ff7c2d;
}

.info p,
.info span {
  float: left;
  width: 50%;
  height: 40px;
  line-height: 40px;
}

.screen {
  width: 700px;
  height: 450px;
  overflow: hidden;
  position: relative;
}

.screen li {
  width: 700px;
  height: 450px;
  overflow: hidden;
  float: left;
}

.screen ul {
  position: absolute;
  left: 0;
  top: 0px;
  width: 5000px;
}

.all ol {
  position: absolute;
  bottom: 10px;
  left: 50%;
  margin-left: -35px;
  width: 70px;
  height: 13px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 7px;
  font-size: 0;
}

.all ol li {
  float: left;
  width: 8px;
  height: 8px;
  background-color: #fff;
  border-radius: 50%;
  margin: 3px;
  cursor: pointer;
}

.all ol li.current {
  background: #4390b9;
}

/* 添加 */
.all-things,
.all-shops {
  width: 1200px;
  margin: 0 auto;
}

.shops ul {
  background-color: #e9ebea;
  width: 1200px;
  height: 150px;
  /* overflow-y: hidden; */
  margin-top: 20px;
  border-radius: 20px;
}

.shops ul li {
  float: left;
  margin-left: 20px;
  margin-top: 5px;
  line-height: 45px;
}

.shops ul li img {
  height: 120px;
  width: 120px;
  margin-top: 10px;
  overflow: hidden;
}

#star {
  /* opacity: 1; */
  /* color: rgb(249, 215, 45); */
  color: #ccc;
}

#search-bb {
  color: #050505;
}
</style>