<template>
  <div class="w bg">
    <div class="w bd">
      <div class="bbd">
        <h2>确认收货地址</h2>
        <a href="../html/个人主页.html" class="more" onclick="addnewaddress()">管理收货地址</a>
        <img src="../images/dizhi.png">
      </div>
      <!-- 线 -->
      <div class="ll"></div>
    </div>
    <!-- 收货地址选择 -->
    <div class="address-list">
      <div class="addr-item">
        <label>
          <input type="radio" name="chioce">
          <span class="choice">浙江杭州下沙浙江理工大学(张三收)19818515545</span>
        </label>
      </div>
      <div class="addr-item">
        <label>
          <input type="radio" name="chioce">
          <span class="choice">浙江温州鹿城区(刘素收)13434561234</span>
        </label>
      </div>
      <!-- 添加新地址 -->
      <div class="new">
        <input type="button" value="添加新地址" onclick="addnewaddress()">
      </div>
    </div>
    <!-- 确认订单信息 -->
    <div class="order">
      <div class="w bbd">
        <h2>确认订单信息</h2>
      </div>
      <!-- 线 -->
      <div class="ll"></div>
      <div class="lie">
        <div class="message">店铺宝贝</div>
        <div class="money">单价</div>
        <div class="num">数量</div>
        <div class="all">小计</div>
      </div>
      <div class="kuai">
        <ul>
          <li>
            <div class="message">
              <div class="photo"><img src="../html/img/商品6/6.1.jpg"></div>
              <div class="test">JWNEED小狗格子毛衣男女秋冬复古奶系软糯显白休闲百搭情侣···</div>
            </div>
            <div class="money">￥98.00</div>
            <div class="num">1
              <!-- <input type="button" class="decrease" value="-">
              <input type="text" class="quantity" value="1"/>
              <input type="button" class="increase" value="+"> -->

            </div>
            <div class="all">￥98.00</div>
          </li>
          <li class="tuitebao" id="tuitebao">
            <div class="message">
              <div class="photo"><img src="../html/img/商品1/1.1.jpg"></div>
              <div class="test">小众设计大容量手提帆布包女夏2022新款时尚印花蝴蝶结单肩托···</div>
            </div>
            <div class="money">￥29.90</div>
            <div class="num">1</div>
            <div class="all">￥29.90</div>
          </li>
          <li class="lining" id="lining">
            <div class="message">
              <div class="photo"><img src="../html/img/商品2/2.1.jpg"></div>
              <div class="test">李宁板鞋女鞋天迹2022新款鞋子潮流涂鸦滑板鞋运动鞋情侣小···</div>
            </div>
            <div class="money">￥378.00</div>
            <div class="num">1</div>
            <div class="all">￥378.00</div>
          </li>
        </ul>
        <div class="total">合计￥127.90</div>
      </div>
      <div class="int">
        <input type="button" value="结算支付" onclick="Show();">
      </div>
    </div>

  </div>
  <!-- 支付弹窗 -->
  <div class="pay">
    <!-- 新建用户弹窗 -->
    <div id="shade" class="c1 hide">
      <div id="modal" class="c2 hide">
        <!-- 支付标题 -->
        <div class="pay-box">
          <div class="pay-title">
            <h2>支付订单</h2>
          </div>
          <!-- 回退按钮 -->
          <div class="quit" >
            <input type="button" value="X" onclick="Hide();">
          </div>
        </div>
        <!-- 支付方式选择 -->
        <div class="pay-type">
          <span>请选择支付方式：</span>
          <span class="kong"></span>
          <input type="text" id="comname" list="comlist" value="" class="qbox" placeholder="选择您的支付方式">
          <datalist id="comlist">
            <option>选择您的支付方式</option>
            <option>支付宝</option>
            <option>员工卡</option>
            <option>微信</option>
          </datalist>
          <input type="button" value="确认支付方式" class="pay-type-check" onclick="checktype();">
        </div>
        <!-- 卡内积分余额 -->
        <div class="card-cradit" id="card-cradit">
          <span>您卡内余额剩余：</span>
          <span class="cradit">100</span>
          <span>预计可抵10元</span>
        </div>
        <!-- 仍需支付 -->
        <div class="pay-still" id="pay-still">
          <span>您仍需支付：</span>
          <span>10元</span>
        </div>
        <!-- 扫支付码 -->
        <div class="pay-code" id="pay-code">
          <span>请扫码：</span>
          <span class="kong"></span>
          <img src="../html/img/付款码/QQ图片20221007223935.png" alt="" >
        </div>
        <!-- 支付确认 -->
        <div class="pay-btn">
          <input type="button" value="取消支付" class="pay-false" onclick="payno();">
          <input type="button" value="确认支付" class="pay-true" onclick="payok();">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Purchase"
}
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
  height: 1300px;
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



.path {
  float: left;
  width: 600px;
  height: 60px;
  margin-left: 200px;
  margin-top: 30px;
  border-radius: 10px;
  color: rgb(66, 66, 66);
}

.path2 {
  display: block;
  float: left;
  width: 32px;
  height: 32px;
  background-color: #62887f;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
  margin: 4px;
  cursor: pointer;
}

.path1,
.path3,
.path4,
.path5 {
  display: block;
  float: left;
  width: 32px;
  height: 32px;
  background-color: rgb(255, 255, 255);
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
  margin: 4px;
  cursor: pointer;
}

.num1 {
  width: 100px;
  color: #000;
  margin-left: -30px;
  font-weight: normal;
}

.line {
  display: block;
  float: left;
  height: 1px;
  width: 80px;
  background-color: rgb(206, 206, 206);
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
}

.path ol li.current {
  background: #4390b9;
}


.bg {
  background-color: #fff;
  height: 1000px;
  margin-top: 30px;
  border-radius: 15px;
}

.bd {
  height: 70px;
}

.bbd {
  height: 60px;
}

.bbd h2 {
  float: left;
  line-height: 70px;
  margin-left: 40px;
  color: #62887f;
  font-size: 20px;
}

.bbd a {
  float: right;
  font-size: 12px;
  color: #a5a5a5;
  margin-top: 25px;
  margin-right: 30px;
  border-style: none;
  border-color: transparent;
  background-color: transparent;
}

.bbd img {
  float: right;
  margin-top: 10px;
  margin-right: 10px;
  width: 35px;
  height: 35px;
}

.address-list {
  height: 250px;
}

.addr-item {
  margin-left: 100px;
  height: 50px;
}

.choice {
  margin-left: 100px;
  line-height: 60px;
  text-align: center;
}

.new input {
  float: left;
  margin-left: 300px;
  margin-top: 30px;
  width: 100px;
  height: 45px;
  border-radius: 5px;
  border-color: transparent;
  background-color: #62887f;
  color: #fff;
}

.lie {
  height: 90px;
}

.check {
  float: left;
  text-align: center;
  width: 100px;
  height: 90px;
  line-height: 90px;
}

.message {
  float: left;
  text-align: center;
  line-height: 90px;
  width: 600px;
}

.photo img {
  float: left;
  margin-left: 50px;
  height: 80px;
  width: 80px;
}

.test {
  float: left;
  width: 470px;
  line-height: 90px;
  text-align: center;
}

.money {
  float: left;
  text-align: center;
  line-height: 90px;
  width: 150px;
  height: 90px;
}

.num {
  float: left;
  text-align: center;
  line-height: 90px;
  width: 150px;
}

.all {
  float: left;
  text-align: center;
  line-height: 90px;
  width: 150px;
}


.kuai ul li {
  height: 90px;
  background-color: #fff;
  margin-bottom: 30px;
  box-shadow: 0 2px 3px 3px rgba(0, 0, 0, 0.1);
  line-height: 60px;
  border-radius: 5px;
}

.total {
  float: right;
  height: 50px;
  width: 100%;
  color: #fff;
  line-height: 55px;
  text-align: center;
  background-color: #62887f;
}

.int input {
  float: right;
  margin-right: 30px;
  margin-top: 30px;
  width: 100px;
  height: 45px;
  border-radius: 5px;
  border-color: transparent;
  background-color: #62887f;
  color: #fff;
}

.ll {
  height: 10px;
  width: 1200px;
  background-color: #62887f;
}

/* 弹窗 */
@import "http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css";

.hide {
  display: none;
}

.c1 {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, .5);
  z-index: 2;
}

.c2 {
  background-color: white;
  position: fixed;
  width: 1000px;
  height: 600px;
  top: 13%;
  left: 16%;
  z-index: 3;
}

.pay-box {
  height: 70px;
  width: 1000px;
}

.pay-title h2 {
  float: left;
  width: 100px;
  margin-top: 30px;
  margin-left: 50px;
  color: #62887f;
}

.quit input {
  float: right;
  width: 30px;
  height: 30px;
  margin-top: 30px;
  margin-right: 50px;
  font-size: large;
  background-color: transparent;
  border: 0px;
}

.quit input:hover {
  background-color: rgb(232, 17, 35);
}

.pay-type {
  margin-left: 200px;
  margin-top: 20px;
}

#comname {
  margin-left: 30px;
  height: 40px;
}

.pay-type-check {
  margin-left: 120px;
  margin-top: 20px;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border-color: transparent;
  background-color: #62887f;
  color: #fff;
}

.card-cradit {
  margin-left: 200px;
  margin-top: 20px;
  display: none;
}

.cradit {
  margin-left: 100px;
}

.pay-still {
  margin-left: 200px;
  margin-top: 20px;
  display: none;
}

.pay-code {
  margin-top: 50px;
  margin-left: 200px;
  display: none;
}

.pay-code img {
  width: 100px;
  height: 100px;
  margin-left: 100px;

}

.pay-btn {
  width: 100%;
  height: 50px;
  margin-top: 100px;
  text-align: center;
}

.pay-true {
  margin-left: 200px;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border-color: transparent;
  background-color: #62887f;
  color: #fff;
}

.pay-false {
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border-color: transparent;
  background-color: rgb(121, 122, 123);
  color: #fff;
}


.lining {
  display: none;
}
</style>