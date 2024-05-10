<template>
<!--&lt;!&ndash;  <h1>商城首页</h1>&ndash;&gt;-->
<!--  <a-layout style="display: flex;flex-direction: column">-->
<!--    <a-layout-header class="headerStyle" style="min-width: 1100px;overflow-x: scroll;-ms-overflow-style: none;scrollbar-width: none">-->
<!--    </a-layout-header>-->
<!--    <a-layout-content>-->
<!--      <a-row>-->
<!--        <a-col :span="12" :offset="6">-->
<!--          111111-->
<!--&lt;!&ndash;          <a-input-search :value="value" @search="onSearch"></a-input-search>&ndash;&gt;-->
<!--        </a-col>-->
<!--      </a-row>-->
<!--    </a-layout-content>-->
<!--  </a-layout>-->

  <!-- 头部栏 -->

  <!-- logo及搜索框 -->
  <div class="search w">
    <div class="logo"><img src="" alt="logo" title="logo" width="200px" ></div>
    <div class="searchbox">
      <input type="text" value="输入关键词">
      <button><i class="fas fa-search"></i></button>
    </div>
  </div>
  <!-- banner部分 -->
  <div class="banner w">
    <!-- 版心 -->
    <div class="w">
      <div class="subnav" @mouseout="handleMoveOut">
        <ul>
          <li
              @mousemove="handleMouseMove(item.second)"
              v-for="item in menu" :key="item.id"
          >
            <a href="#">{{item.name}}
              <span> > </span>
            </a>
          </li>
        </ul>
      </div>
      <div class="secondmenu" v-show="showmenu" @mousemove="showmenu=true">
        <ul style="width: 100px">
          <li
              style="width: 100px;line-height: 50px;text-align: center"
              v-for="item in hoverMenu" :key="item.index"
          >
            {{item}}
          </li>
        </ul>
      </div>
      <div >
        <a-carousel
            autoplay
            class="all"
            id="all"
            style="
              background-color: #f582ae;
              width: 620px;
              height:420px;
              float:left;
              margin-left: 20px;
              margin-top: auto"
        >
              <div><img src="../assets/pictures/MallHall/1.jpg" width="620" height="420" alt=""/></div>
              <div><img src="../assets/pictures/MallHall/2.jpg" width="620" height="420" alt=""/></div>
              <div><img src="../assets/pictures/MallHall/3.jpg" width="620" height="420" alt=""/></div>
              <div><img src="../assets/pictures/MallHall/4.jpg" width="620" height="420" alt=""/></div>
              <div><img src="../assets/pictures/MallHall/5.jpg" width="620" height="420" alt=""/></div>
        </a-carousel>
      </div>
      <!-- 公告 -->
      <div class="gonggao">
        <div class="gonggao-title">
          <h3>内购网快报</h3>
          <a href="#" class="a1">更多 ></a>
        </div>
        <div class="line"></div>
        <!-- 快报内容 -->
        <div class="news-text">
          <div class="news-box">
            HOT
          </div>
          <a href="#">请新用户先行注册登录绑定相关···</a>
        </div>
        <div class="news-text">
          <div class="news-box">
            HOT
          </div>
          <a href="#">秋冬囤货季，你还在发愁冰箱位···</a>
        </div>
        <div class="news-text">
          <div class="news-box">
            热评
          </div>
          <a href="#">运动后血糖不升反降？···</a>
        </div>
        <div class="news-text">
          <div class="news-box">
            最新
          </div>
          <a href="#">水莲花大闸蟹，蟹黄丰满，肉嫩···</a>
        </div>
        <div class="news-text">
          <div class="news-box">
            最热
          </div>
          <a href="#">速看！这才是秋季护肤的正确打开···</a>
        </div>
      </div>
    </div>
  </div>
  <!-- 推荐模块 -->
  <div class="goods w">
    <h3>兴趣推荐</h3>
    <ul>
      <li><a href="#">手机</a></li>
      <li><a href="#">电子产品</a></li>
      <li><a href="#">上衣</a></li>
      <li><a href="#">T恤</a></li>
      <li><a href="#">衬衫</a></li>
      <li><a href="#">鞋子</a></li>
      <li><a href="#">袜子</a></li>
      <li><a href="#">外套</a></li>
      <li><a href="#">裤子</a></li>
    </ul>
    <a href="#" class="mod">修改兴趣</a>
  </div>
  <!-- box核心内容 -->
  <div class="box w">
    <div class="box-hd">
      <h3>商品推荐</h3>
      <a href="../html/店铺及商品.html">查看全部</a>
    </div>
    <a-spin :spinning="spinning" tip="加载中……">
      <div class="box-bd">
        <ul class="clearfix" style="font-family: Arial,serif">
            <li v-for="item in product" :key="item.id" style="cursor: pointer;border-radius: 15px" @click="showProductDetails(item.id)">
              <img :src="item.pictures[0]" alt="">
              <h4
                  style="
                  display: inline-block;
                  float: right;
                  width: 180px;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis"
              >
                {{item.name}}
              </h4>
              <span
                  style="
                    display: inline-block;
                    color: #ea7e05;
                    margin-right: 20px;
                    float: right;"
              >
                ￥{{item.price}}
                </span>
                <span class="info" style="color: #009dff;font-weight: bold;font-size: 16px">{{item.brand}}</span>
            </li>
        </ul>
      </div>
    </a-spin>

  </div>
  <p style="text-align: center;margin-top: 10px;cursor: pointer" @click="showMoreProduct">加载更多</p>
  <!-- 模块制作 -->
  <div class="footer">
    <div class="w">
      <div class="links">
        <a href="" target="_blank">关于我们</a>
        |
        <a href="" target="_blank">版权声明</a>
        |
        <a href="" target="_blank">联系方式</a>
      </div>
    </div>
  </div>


</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import getAllProduct from "@/api/index/getProduct.js";
const spinning = ref(true)
  const menu = ref([
    {id:1,name:"手机",second:["手机"]},
    {id:2,name:"智能影音",second: ["耳机","智能手环","智能手表","音箱","投影仪","智能监控"]},
    {id:3,name:"电脑办公",second: ["平板电脑","笔记本","一体机","投影仪","路由器","鼠标"]},
    {id:4,name: "摄影摄像",second: ["微单/单电","数码相机","单反相机","摄像机","拍立得"]},
    {id:5,name:"厨房电器",second: ["电压火锅","电火锅","养生壶","电水壶","电磁炉","豆浆机"]},
    {id:6,name: "生活电器",second: ["扫地机器人","吸尘器","除螨仪","挂烫机","电熨斗","风扇"]},
    {id:7,name:"美容护理",second: ["剃须刀","电吹风","颈椎按摩仪","按摩披肩","美容仪器","直/卷发器"]}
  ])
const showmenu = ref(false);
const showmenu2 = ref(false);

const hoverMenu = ref([]);
const handleMoveOut = function (){
  showmenu.value = false;
}
const handleMouseMove = function (secondmenu){
    showmenu.value = true;
    hoverMenu.value = secondmenu;
    console.log(hoverMenu)
}
const pageBody = {
  currentPage: 1,
  pageCount:1,
  pageSize: 20
}
const product = ref([])
const visibleCount = ref(20)
const getProduct = async () => {
  const res = await getAllProduct(pageBody)
  spinning.value=false
  console.log(res)
  allProduct.value=res.data.data.result
  return res;
}
const allProduct = ref([])
const showMoreProduct = async () => {
  pageBody.currentPage += 1;
  // const res = await getAllProduct(pageBody)
  // product.value.push(res.data.data.result)
  const arr = allProduct.value.slice(20*(pageBody.currentPage-1),20*pageBody.currentPage)
  product.value.push(...allProduct.value.slice(20*(pageBody.currentPage-1),20*pageBody.currentPage))
  console.log(product.value)
}
onMounted(async () => {
  await getProduct()
  product.value = allProduct.value.slice(0,20)
  console.log(product.value)
})
const showProductDetails = (productId)=>{
  const params = {
    id: productId,
  };
  window.open(`/goods_details?${new URLSearchParams(params).toString()}`,'_blank')

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
  * {
    margin: 0;
    padding: 0;
  }
  .logo {
    float: left;
    width: 150px;
    height: 100px;
    margin-left: 180px;
    margin-top: 10px;
  }

  .w {
    width: 1200px;
    margin: auto;
  }

  body {
    background-color: #f3f5f7;
    height: 1500px;
  }

  li {
    list-style: none;
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
    color: #888;
    font-size: 14px;
    padding-left: 15px;

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

  .banner {
    height: 420px;
    margin-top: 30px;
    background-color: transparent;
  }

  .subnav {
    float: left;
    width: 200px;
    height: 420px;
    background: rgba(0, 0, 0, 0.3);
    margin-left: 20px;
  }

  .subnav a {
    display: block;
    width: 200px;
    height: 60px;
    background-color: #55585a;
    font-size: 14px;
    color: #fff;
    text-decoration: none;
    padding-left: 30px;
    line-height: 60px;
  }

  .subnav a:hover {
    background-color: #62887f;
  }

  .promo {
    position: relative;
    float: left;
    width: 630px;
    height: 420px;
    margin-left: 10px;
  }

  .promo img {
    width: 100%;
    height: 420px;
  }

  #arr span {
    position: absolute;
    top: 50%;
    margin-top: -15px;
    width: 20px;
    height: 30px;
    background: rgba(0, 0, 0, 0.7);
    text-align: center;
    line-height: 30px;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }

  #arr #left {
    left: 0;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  #arr #right {
    right: 0;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  .gonggao {
    float: right;
    height: 420px;
    width: 320px;
    background-color: #fff;
  }

  .gonggao h3 {
    float: left;
    margin-left: 20px;
    margin-top: 30px;
  }

  .line {
    width: 320px;
    height: 1px;
    background-color: #a5a5a5;
  }

  .a1 {
    float: right;
    margin-top: 33px;
    margin-right: 30px;
    font-size: 10px;
    color: rgb(153, 153, 153);
  }

  .gonggao-title {
    width: 320px;
    height: 80px;
  }

  .news-text {
    width: 320px;
    height: 50px;
    margin-top: 10px;
  }

  .news-box {
    float: left;
    width: 50px;
    height: 28px;
    font-size: 18px;
    text-align: center;
    color: rgb(225, 37, 27);
    background-color: rgb(253, 238, 237);
    margin-left: 10px;
    margin-top: 10px;
  }

  .news-text a {
    float: left;
    width: 250px;
    font-size: 15px;
    color: rgb(102, 102, 102);
    margin-top: 15px;
    margin-left: 5px;
  }

  .goods {
    height: 60px;
    background-color: #fff;
    margin-top: 20px;
    box-shadow: 0 2px 3px 3px rgba(0, 0, 0, 0.1);
    line-height: 60px;
  }

  .goods h3 {
    float: left;
    margin-left: 32px;
    font-size: 16px;
    color: #112f47;
  }

  .goods ul {
    float: left;
    margin-left: 30px;
  }

  .goods ul li {
    float: left;
  }

  .goods ul li a {
    padding: 0 30px;
    font-size: 16px;
    color: #050505;
    border-left: 1px solid #ccc;

  }

  .goods ul li a:hover {
    color: #226a91;
  }

  .mod {
    float: right;
    margin-right: 32px;
    font-size: 14px;
    color: #112f47;
  }

  .box {
    margin-top: 30px;
  }

  .box-hd {
    height: 45px;
  }
  .box-bd{
    height: 100%;
    min-height:270px ;
  }
  .box-hd h3 {
    float: left;
    font-size: 20px;
    color: #494949;
  }

  .box-hd a {
    float: right;
    font-size: 12px;
    color: #a5a5a5;
    margin-top: 10px;
    margin-right: 30px;
  }

  .box-bd ul {
    width: 1225px;
  }

  .box-bd ul li {
    float: left;
    width: 228px;
    height: 270px;
    background-color: #fff;
    margin-right: 15px;
    margin-bottom: 15px;
  }

  .box-bd ul li img {
    margin-left: 24px;
    margin-top: 10px;
    width: 180px;
    height: 200px;
  }

  .box-bd ul li h4 {
    margin: 5px 20px 5px 20px;
    font-size: 14px;
    color: #050505;
    font-weight: 400;
  }

  .box-bd .info {
    margin: 0 30px 0 50px;
    font-size: 12px;
    color: #999;
  }

  .box-bd .info span {
    color: #ff7c2d;
  }

  .box-bd .clearfix li:hover {
    box-shadow: 10px 10px 10px -4px rgba(0, 0, 0, .3);
  }

  .footer {
    margin-top: 20px;
    height: 80px;
  }

  .footer .w {
    padding-top: 35px;
  }

  .links {
    text-align: center;
  }

  .links a {
    color: #112f47;
  }

  .links a:hover {
    color: #888;
  }
  .secondmenu{
    position: relative;
    width: 100px;
    height: 420px;
    background-color: rgba(85,88,90,0.9);
    z-index: 9999 !important;
    color: white;
    cursor: pointer;
    float: left;
    margin-right: -100px;
  }
  .secondmenu li:hover{
    color: #94b0f5;
  }
</style>