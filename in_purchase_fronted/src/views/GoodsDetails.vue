<template>
  <div class="goods-info" style="font-family: Arial,serif">
    <div class="picture" v-if="productDetail.pictures">
      <img  :src="productDetail.pictures[0]" alt="" class="big-picture">
    </div>

    <div class="small-pic-all" v-if="productDetail.pictures">
      <a-image
          v-for="(img, index) in productDetail.pictures.slice(0, 5)"
          :key="index"
          style="width: 100px;border: 1px solid #b2b2b2;"
          :src="img"
      />
    </div>
    <div class="text-info">
      <ul>
        <li class="text-title">{{productDetail.name}}</li>
        <li class="price">价格：<span class="price-span">￥{{productDetail.price}}</span></li>
        <li class="size">颜色：
          <a-tag color="orange" style="padding: 0 10px;cursor: pointer">{{productDetail.color}}</a-tag>
        </li>
        <li class="size">型号：
          <a-tag color="orange" style="padding: 0 10px;cursor: pointer">{{productDetail.size}}</a-tag>
        </li>

        <li class="text-num">数量：
          <a-input-number :min="1" v-model:value="productCount">
          </a-input-number>
          个
        </li>
        <li class="text-btn">
          <button class="purchase" @click="purchase">立即购买</button>
          <button class="join" @click="addShoppingCart">加入购物车</button>
        </li>
      </ul>
    </div>
  </div>
  <a-drawer
      v-model:open="open"
      class="custom-class"
      root-class-name="root-class-name"
      :root-style="{ color: 'blue' }"
      style="color: red"
      title="结算"
      placement="right"
      @after-open-change="afterOpenChange"
  >
    <p style="margin-top: 0px;color: black;font-size: 15px;font-weight: bold">1.确认地址</p>
      <a-input style="margin-top: 10px;padding: 0 10px;height: 30px;line-height: 30px" label="收货地址" name="address" v-model:value="userInfo.address" />
    <p style="margin-top: 30px;color: black;font-size: 15px;font-weight: bold">2.确认数量及价格</p>
    <li class="text-num" style="color:#000;">数量：
      <a-input-number :min="1" v-model:value="productCount">
      </a-input-number>
      个
    </li>
    <li class="text-num" style="color:#000;">总价：<a-tag color="red" style="font-size:15px;width: 80px;height:30px;line-height:30px;text-align: center">￥{{productDetail.discountPrice*productCount}}</a-tag></li>
    <p style="margin-top: 30px;color: black;font-size: 15px;font-weight: bold">3.选择支付方式</p>
    <a-select
    ref="select"
    v-model:value="value1"
    @focus="focus"
    @change="handleChange"
    style="margin-left: 30px;width: 150px;margin-top: 10px"
    placeholder="选择支付方式"
    >
    <a-select-option value="jack">微信</a-select-option>
    <a-select-option value="lucy">支付宝</a-select-option>
    <a-select-option value="disabled">员工积分</a-select-option>
    <a-select-option value="Yiminghe">员工卡</a-select-option>
    </a-select>
    <p style="margin-top: 30px;color: black;font-size: 15px;font-weight: bold">4.确认并支付</p>
    <a-button type="primary" style="width: 80px;height: 30px;margin-top: 10px;margin-left: 30px">提交订单</a-button>
  </a-drawer>
  <div>
    <ul class="wrapper">
      <li>
        <!-- <a href="#" class="jieshao" id="btn01">宝贝详情</a> -->
        <button
            class="jieshao"
            id="btn01"
            @click="changeTabTop('宝贝详情')"
            :class="{ actives: activeTab === '宝贝详情' }">
          宝贝详情
        </button>
      </li>
      <li>
        <button
            class="jieshao"
            id="btn02"
            @click="changeTabTop('评价')"
            :class="{ actives: activeTab === '评价' }">
          评价
        </button>

      </li>
    </ul>

    <!-- 宝贝详情 -->
    <div class="goods-information" id="info" v-show="show">
      <ul  v-if="productDetail.pictures">
        <a-image
            v-for="(img, index) in productDetail.pictures"
            :key="index"
            style="width: 260px;border: 1px solid #b2b2b2;"
            :src="img"
        />
        <li>品牌：<span  style="color:#3b5999;width: 60px;text-align: center;font-size: 15px">{{productDetail.brand}}</span></li>
        <li>成色：全新</li>
        <li>折扣:&nbsp;<span style="font-size: 26px;color: orange">{{productDetail.discount}}折</span></li>
        <li>其它描述：暂无</li>

      </ul>
    </div>

    <!-- 评价 -->
    <div class="evaluate" id="evalu" v-show="!show">
      <div class="eva-checkbox" id="inputs">
        <input type="checkbox" id="check-box" >全部
        <input type="checkbox" id="check1" name="user">追评
        <input type="checkbox" id="check2" name="user">图片
      </div>
      <div class="eva-info">
        <div class="information">
          <div class="pre">
            <p>初次评价：</p>
            <!-- <div>初次评价：</div> -->
            <!-- 初次评价： -->
            <div>
              拜托这个包包真的真的很好看，很大很好，没有廉价感，很便宜，我觉得很精致，算是买这么多包包以来最好的一次购物体验，宝贝们冲，真的冲！不是托相信我，有点激动。
            </div>

            <div>
              <img src="../html/img/商品1/pj1.jpg" alt="">
              <img src="../html/img/商品1/pj2.jpg" alt="">
              <img src="../html/img/商品1/pj3.jpg" alt="">
            </div>
          </div>

          <div class="zhui">
            <p>收到4天后追评：</p>
            <div>真的好看呀</div>

          </div>
        </div>
        <div class="purchase-info">
          颜色分类：珠光白【无链条】<br>
          数量：1件<br>
          用户：tb32******342
        </div>
      </div>

      <div class="eva-info">
        <div class="information">
          <div class="pre">
            <p>初次评价：</p>
            <!-- <div>初次评价：</div> -->
            <!-- 初次评价： -->
            <div>
              首先，这个面料真的非常非常好，很光滑的那种，针脚也很细密，而且在阳光下好像还有些亮亮的，我拍了近照图可以看出来面料的，底下是皮质的，容易立起来包包也不会脏，这个包绝对结实，又好看又实用！！！我绝对是发自内心的评价，喜欢就买它吧，真的挺好的，玫瑰香包也很好闻，淡淡的清香
            </div>

            <div>
              <img src="../html/img/商品1/pj4.jpg" alt="">
              <img src="../html/img/商品1/pj5.jpg" alt="">
              <img src="../html/img/商品1/pj6.jpg" alt="">

            </div>
          </div>

          <div class="zhui">
          </div>
        </div>
        <div class="purchase-info">
          颜色分类：珠光白【带珍珠链条】<br>
          数量：2件<br>
          用户：tb49********387
        </div>
      </div>

      <div class="eva-info">
        <div class="information">
          <div class="pre">
            <p>初次评价：</p>
            <!-- <div>初次评价：</div> -->
            <!-- 初次评价： -->
            <div>
              包包很仙气 面料是那种硬硬的布 可以立住 带上这个珍珠链条 真的特别好看 绝对值这个价钱 姐妹们快入手吧
            </div>

            <div>
              <img src="../html/img/商品1/pj7.jpg" alt="">
              <img src="../html/img/商品1/pj8.jpg" alt="">

            </div>
          </div>

          <div class="zhui">
            <p>收到4天后追评：</p>
            <div>比我预想的要小一点，不过***ad刚刚好，背起来感觉也不错，上课或者是逛街想带个大点的包都可以。线头很多，是真的很多，味道也挺大，需要散散味，这价格也买不了自行车，我觉得可以入手</div>

          </div>
        </div>
        <div class="purchase-info">
          颜色分类：珠光白【无链条】<br>
          数量：1件<br>
          用户：tb39*******332
        </div>
      </div>

    </div>


  </div>
</template>

<script setup>

import {onMounted, ref} from "vue";
import getProductById from "@/api/index/getProductById.js";
import userStore from "@/stores/userStore.js";
import getUserInfoAPI from "@/api/index/getUserInfoAPI.js";

const activeTab = ref('宝贝详情')
const show = ref(true)
function changeTabTop(tab) {
  activeTab.value = tab;
  show.value=!show.value
}
const productCount = ref(1);
const productDetail = ref({})
const productId = ref(1);
const listInfo = ref({})
const purchase=()=>{
  listInfo.value={
    "productDetail":productDetail.value,
    "productCount":productCount.value
  }
  console.log(listInfo.value)
  open.value = true;
}
const open = ref(false);

const afterOpenChange = () => {
  console.log('open',);
}

const addShoppingCart=()=>{
  listInfo.value={
    "productDetail":productDetail.value,
    "productCount":productCount.value
  }
  console.log(listInfo.value)
}
const getProductDetailById =  async () => {
  console.log(1)
  const params = new URLSearchParams(window.location.search);
  if (params.get("id")) {
    productId.value = parseInt(params.get("id"));
  }
  productDetail.value = await getProductById(productId.value)
  console.log(productDetail.value)
};
getProductDetailById()
const userInfo = ref({})
const getUserInfo = async () => {
  userInfo.value = await getUserInfoAPI()
  console.log(123)
  console.log(userInfo.value)
}
getUserInfo()
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
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
  float: right;
  width: 350px;
  height: 42px;
  background-color: rgb(224, 224, 224);
  margin-right: 200px;
  margin-top: 30px;
}

.searchbox input {
  float: left;
  width: 290px;
  height: 40px;
  background-color: transparent;
  border: 0px solid transparent;
  color: #888;
  font-size: 14px;
  padding-left: 15px;

}

.searchbox input:hover {
  background-color: rgb(236, 236, 236);
}

.but {
  float: left;
  width: 45px;
  height: 42px;
  background-color: #7A9D96;
  border: 0px solid transparent;
}

.searchbox button:hover {
  background-color: rgb(150, 150, 150);
}

.shopbox {
  float: left;
  width: 200px;
  height: 100px;
  margin-left: 90px;
}

.shopbox a {
  color: #62887f;
}

.shopname {
  float: left;
  margin-top: 30px;

}


.fenlei {
  height: 60px;
}

.choice {
  background-color: #62887f;
  margin-top: 30px;
  height: 30px;
  width: 90px;
  float: left;
  text-align: center;
  line-height: 30px;
  color: #fff;
}

.line {
  background-color: #62887f;
  height: 10px;
}


.goods-info {
  width: 900px;
  height: 550px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 50px;
  border: 0px;
  padding-top: 10px;
}

.picture {
  width: 400px;
  height: 450px;
  /* background-color: red; */
  margin-top: 10px;
  margin-left: 20px;

}

.small-pic-all {
  margin-left: 10px;
  margin-top: -30px;
}

.big-picture {
  width: 400px;
  height: 450px;
}

.small-img {
  width: 72px;
  height: 70px;
  /* background-color: yellow; */
  margin-top: 10px;
  margin-left: 20px;
}

li {
  margin-top: 20px;
  margin-left: 10px;
}

.text-info {
  width: 460px;
  height: 350px;
  /* background-color: rgba(208, 235, 229, 0.737); */
  float: right;
  margin-top: -480px;
  margin-right: 10px;
  border: 1px solid rgb(227, 227, 227);

}

.text-title {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: bold;
}

.price {
  background-color: #84b9ad50;
  width: 430px;
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
}

.price-span {
  color: #62887f;
  font-weight: bolder;
}

.size {
  width: 430px;
  height: 30px;
  padding-left: 10px;
}

.size-img {
  width: 50px;
  height: 60px;
  border: 0px;
  background-color: transparent;
  margin-left: 10px;
}

.text-num {
  margin-top: 20px;
  margin-left: 20px;
}

.number {
  width: 15px;
  padding-left: 10px;


}

.num {
  width: 15px;
}

.text-btn {
  margin-top: 20px;
  margin-left: 25px;
}

.purchase {
  width: 200px;
  height: 50px;

}

.join {
  margin-left: 5px;
  width: 200px;
  height: 50px;
  background-color: #679086;
  border: 1px;
  border-radius: 2px;
}

.join:hover {
  background-color: #4d7a71;
}

.wrapper {
  width: 900px;
  height: 40px;
  background-color: #7A9D96;
  /* background-color:  #e19410; */

  margin: 0 auto;

}

.wrapper li button {
  background-color: #7A9D96;
  border: none;
  color: white;
  font-size: 19px;
}

.jieshao {
  width: 200px;
  height: 40px;
  float: left;
  line-height: 40px;
  margin-left: 20px;
}

#three {
  border: none;
}

.eva-checkbox {
  padding-top: 13px;
  /* background-color: #d89272; */
  border-bottom: 1px solid rgb(184, 184, 184);

  height: 30px;
  line-height: 20px;
}

.eva-checkbox input {
  width: 20px;
  height: 20px;
  margin-top: 15px;
  background-color: #ffffff;
  border: solid 1px #dddddd;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  font-size: 0.8rem;
  margin: 0 10px 0 10px;
  padding: 0;
  position: relative;
  display: inline-block;
  vertical-align: top;
  cursor: default;
  -webkit-appearance: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-transition: background-color ease 0.1s;
  transition: background-color ease 0.1s;
}

.eva-checkbox input:checked {
  background: #62887f;
}

.goods-information,
.evaluate {
  width: 898px;
  height: 100%;
  margin: 0 auto;
  background-color: #fff;
  border-left: 1px solid rgb(184, 184, 184);
  border-right: 1px solid rgb(184, 184, 184);

  overflow-y: auto;
}

.goods-information {
  width: 898px;
  height: 400px;
  margin-bottom: 40px;
  border: 1px solid rgb(184, 184, 184);

}

.goods-information ul li {
  float: left;
  width: 400px;
}

.eva-info {
  height: 230px;
  /* background-color: #b4c6b3; */
  border-bottom: 1px solid rgb(184, 184, 184);
}

.information {
  /* background-color: #dcab94; */
  width: 600px;
  height: 100%;
}

.information,
.purchase-info {
  float: left;
}

.eva-info div img {
  width: 80px;
  height: 80px;
}

.pre,
.zhui {
  padding: 10px;
}

.pre p,
.zhui p {
  width: 140px;
  height: 150px;
  color: rgb(145, 145, 145);
  /* background-color: #1be414; */
}

.zhui p {
  height: 80px;
}

.pre div {
  font-size: 14px;
  margin-left: 140px;
  margin-top: -150px;
}

.pre div img {
  margin-top: 160px;
}

.zhui div {
  margin-left: 140px;
  margin-top: -80px;
  font-size: 14px;
}

.purchase-info {
  color: rgb(145, 145, 145);
  height: 130px;
  padding-top: 90px;
  padding-left: 20px;
  border-left: 1px solid rgb(184, 184, 184);
}
.actives{
  color: #ffab4d !important;
}
</style>