<template>
  <!-- 购物车 -->
  <div class="w bg" style="font-family: Arial,serif">
    <div class="w bd">
      <h2>购物车</h2>
    </div>
    <!-- 商品列表 -->
    <div>
      <div class="lie">
        <div class="check"><input type="checkbox" id="check-box">全选</div>
        <div class="message">商品信息</div>
        <div class="money">单价</div>
        <div class="num">数量</div>
        <div class="all">总价</div>
        <div class="action">操作</div>
      </div>
      <div class="kuai">
        <ul>
          <li class="maoyi" id="maoyi">
            <div class="check"><input type="checkbox" id="check" name="user" value="98"></div>
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
            <div class="action">
              <div class="btnn">
                <input type="button" value="删除" class="delete">
              </div>
            </div>
          </li>
          <li class="tuitebao" id="tuitebao">
            <div class="check"><input type="checkbox" id="check" name="user" value="29.9"></div>
            <div class="message">
              <div class="photo"><img src="../html/img/商品1/1.1.jpg"></div>
              <div class="test">小众设计大容量手提帆布包女夏2022新款时尚印花蝴蝶结单肩托···</div>
            </div>
            <div class="money">￥29.90</div>
            <div class="num">1</div>
            <div class="all">￥29.90</div>
            <div class="action">
              <div class="btnn">
                <input type="button" value="移入收藏夹" class="move">
                <input type="button" value="删除" class="delete" onclick="deletetuitebao()">
              </div>
            </div>
          </li>
          <li class="lining" id="lining">
            <div class="check"><input type="checkbox" id="check" name="user" value="378"></div>
            <div class="message">
              <div class="photo"><img src="../html/img/商品2/2.1.jpg"></div>
              <div class="test">李宁板鞋女鞋天迹2022新款鞋子潮流涂鸦滑板鞋运动鞋情侣小···</div>
            </div>
            <div class="money">￥378.00</div>
            <div class="num">1</div>
            <div class="all">￥378.00</div>
            <div class="action">
              <div class="btnn">
                <input type="button" value="移入收藏夹" class="move">
                <input type="button" value="删除" class="delete" onclick="deletelining()">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="total w">
      <input type="button" value="结算" id="jiesuan-btn" >
      <input type="button" id="choosesum" value="计算总价">
      <div class="jiage" id="jiage">总价：00.00</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart"
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
  width: 1200px;;
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

.path1 {
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

.path2,
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

.bd h2 {
  float: left;
  line-height: 70px;
  margin-left: 40px;
  color: #62887f;
  font-size: 20px;
}

.bd a {
  float: right;
  font-size: 12px;
  color: #a5a5a5;
  margin-top: 25px;
  margin-right: 30px;
}

.bd img {
  float: right;
  margin-top: 10px;
  margin-right: 10px;
  width: 35px;
  height: 35px;
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
  width: 610px;
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
  width: 100px;
  height: 90px;
}

.num {
  float: left;
  text-align: center;
  line-height: 90px;
  width: 100px;
}

.decrease,
.increase {
  height: 20px;
  width: 20px;
  float: left;
  margin-top: 30px;
}

.decrease {
  margin-left: 10px;
}

.quantity {
  width: 30px;
  float: left;
  margin-top: 30px;
}

.all {
  float: left;
  text-align: center;
  line-height: 90px;
  width: 130px;
}

.action {
  float: left;
  text-align: center;
  line-height: 90px;
  width: 120px;
}

.btnn {
  height: 50px;
  width: 50px;
}

.move {
  float: left;
  margin-top: 20px;
  margin-left: 30px;
  border-color: transparent;
  background-color: transparent;
  color: rgb(255, 217, 0);
}

.delete {
  float: left;
  margin-left: 50px;
  margin-top: 10px;
  border-color: transparent;
  background-color: transparent;
  color: red;
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
  position: fixed;
  bottom: 0;
  height: 50px;
  color: #fff;
  line-height: 60px;
  text-align: center;
  background-color: #62887f;
}

.jiage {
  float: right;
  width: 300px;
}

.total input {
  float: right;
  margin-top: 10px;
  margin-right: 30px;
  width: 100px;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  border-color: transparent;
  color: #62887f;
  background-color: #fff;
  cursor: pointer;
}


.lining {
  display: none;
}

.tuitebao {
  display: none;
}
</style>