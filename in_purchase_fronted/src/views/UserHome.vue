<template>
  <div class="message" id="part1" style="font-family: Arial,serif">
    <!-- <i class="fas fa-caret-down"></i> -->

    <ul class="topper">
      <li style="margin-left: 200px" class="topper-list" :class="{ actives: activeTab === '个人资料' }" id="topper-list1" @click="changeTabTop('个人资料')">个人资料</li>
      <li style="margin-left: 400px" class="topper-list" :class="{ actives: activeTab === '我的订单' }" @click="changeTabTop('我的订单')">我的订单</li>
    </ul>
    <div v-show="show">
      <div class="left">
        <ul class="btn">
          <li :class="{ active: selectedTab === '个人资料' }" @click="changeTab('个人资料')">个人资料</li>
          <li :class="{ active: selectedTab === '修改密码' }" @click="changeTab('修改密码')">修改密码</li>
          <a-modal v-model:open="changePasswordModal" title="修改密码" @cancel="cancelModal" @ok="handleChangePassword" ok-text="确认" cancel-text="取消">
              <a-input style="width: 300px;margin-top: 10px;height: 30px" v-model:value.lazy="userEmail" label="邮箱" autofocus placeholder="请输入您的邮箱" />
              <a-button danger style="margin-left: 20px; width: 80px" :disabled="!userEmail" @click="sendVerificationCode" :loading="loading" :countdown="countdown" :reset-after-countdown="true">{{ buttonText }}</a-button>
              <a-input style="width: 300px;margin-top: 10px"  v-model:value.lazy="emailCode" label="验证码" autofocus placeholder="请输入验证码" />
              <a-input-password  style="padding-left:10px;width: 300px;margin-top: 10px;height: 30px" v-model:value="historyPassword" label="旧密码" placeholder="请输入您的原密码" />
              <a-input-password  style="padding-left:10px;width: 300px;margin-top: 10px;height: 30px" v-model:value.lazy="newPassword" label="新密码" autofocus placeholder="请输入新密码" />
          </a-modal>
        </ul>
      </div>
      <div class="content" id="demo1" >
        <a-form
            ref="formRef"
            :model="userInfo"
            :rules="rules"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            style="margin-top: 30px"
            :disabled="change"
        >
          <a-form-item ref="name" label="用户名" name="name" style="margin-top: 20px">
            <a-input v-model:value="userInfo.userName" />
          </a-form-item>
          <a-form-item ref="email" label="邮箱" name="email"  style="margin-top: 20px">
            <a-input v-model:value="userInfo.userEmail" />
          </a-form-item>
          <a-form-item ref="employeeId" label="员工ID" name="employeeId"  style="margin-top: 20px">
            <a-input v-model:value="userInfo.employeeID" />
          </a-form-item>
          <a-form-item ref="score" label="积分余额" name="score"  style="margin-top: 20px">
            <a-input v-model:value="userInfo.score" disabled style="width: 430px"/>
            <a-button style="width: 80px;margin-left: 30px" :disabled="false" type="primary" @click="showModal">积分明细</a-button>

          </a-form-item>
          <a-form-item ref="card" label="员工卡" name="card"  style="margin-top: 20px">
            <a-input v-model:value="userInfo.card" />
          </a-form-item>
          <a-form-item ref="address" label="收货地址" name="address"  style="margin-top: 20px">
            <a-input v-model:value="userInfo.address" />
          </a-form-item>
        </a-form>
        <a-modal v-model:open="open" title="积分明细" >
          <template #footer>
            <a-button key="back" @click="open=!open" type="primary" style="width: 70px">确认</a-button>
          </template>
          <a-table :columns="columns" :data-source="data" bordered>
            <template #bodyCell="{ column, text }">
              <template v-if="column.dataIndex === 'name'">
                <a>{{ text }}</a>
              </template>
            </template>
          </a-table>
        </a-modal>
        <div  style="margin-top: 20px">
          <a-button type="primary" style="width: 60px;margin-left: 250px" @click="changeInfo">修改</a-button>
          <a-button style="background-color: #7fc461;width: 60px;margin-left: 200px;color: white" @click="saveInfo">保存</a-button>
        </div>

      </div>
    </div>

  <div class="order" id="part2">
    <div v-show="!show">
      <div class="left">
        <ul class="btn">
          <li :class="{ active: selectedStatus === '待付款' }" @click="filterOrders('待付款')">待付款</li>
          <li :class="{ active: selectedStatus === '待发货' }" @click="filterOrders('待发货')">待发货</li>
          <li :class="{ active: selectedStatus === '待收货' }" @click="filterOrders('待收货')">待收货</li>
          <li :class="{ active: selectedStatus === '历史订单' }" @click="filterOrders('历史订单')">历史订单</li>
        </ul>
      </div>
      <div class="content3" id="demo3">
                  <ul class="order-list">
          <li class="order-li" id="first-li">宝贝</li>
          <li class="order-li">单价</li>
          <li class="order-li">数量</li>
          <li class="order-li">订单操作</li>
          <li class="order-li">实付款</li>
          <li class="order-li">交易状态</li>
        </ul>

        <div class="order-message" v-for="item in filteredOrders" :key="item.id">

          <ul class="list-message">
            <li >&emsp;&emsp;&emsp;日期：{{item.dateTime}}</li>
            <li >订单号：{{item.id}}</li>
            <li style="color:#936a01;">店铺：{{item.brand}}</li>
          </ul>
          <ul class="goods-message">
            <a href=""></a>
            <li><img src="" alt="" width="160px" height="100px"></li>

            <li><div class="mes">加绒新款冬季爆款ins潮牌卫衣男内搭2022上衣春秋外套男装打底衫</div>
              <br>
              <div>颜色分类：{{item.type}}</div>
            </li>

            <li> ￥：{{item.originalPrice}}</li>
            <li class="quantity"> 1</li>
            <template v-if="item.status==='待支付'">
                <li class="goods-operate">
              <a href="../html/结算.html">立即付款</a>
              <br>
              <a class="cancle" href="javascript:;">取消订单</a>
            </li>
            </template>
            <template v-if="item.status==='待发货'">
                <li class="goods-operate">
              <a class="cancle" href="javascript:;">取消订单</a>
            </li>
            </template>
            <li class="total-price"> 99：00</li>
            <li class="trade-state" v-if="item.status!=='历史订单'">{{item.status}}</li>
          </ul>
        </div>


      </div>
    </div>
  </div>

  </div>

</template>

<script setup>
import {computed, reactive, ref, toRaw} from "vue";
import userStore from "@/stores/userStore.js";
import editUserInfo from "@/api/index/editUserInfo.js";
import {message} from "ant-design-vue";
import getUserInfoAPI from "@/api/index/getUserInfoAPI.js";

const show=ref(true);
const selectedTab = ref('个人资料');
const activeTab = ref('个人资料');
const userInfo = ref({})
const getUserInfo = async () => {
  userInfo.value = await getUserInfoAPI()
  console.log(123)
  console.log(userInfo.value)
}
getUserInfo()
// const formState = reactive({
//   name: userInfo.userID,
//   email:userInfo.userEmail,
//   password:userInfo.userEmail,
//   employeeId:userInfo.EmployeeID,
//   score:userInfo.score,
//   card:userInfo.score,
//   address:userInfo.sddress,
// });
// console.log(formState)
function changeTabTop(tab) {
  activeTab.value = tab;
  show.value=!show.value
}
const changePasswordModal = ref(false);
function changeTab(tab) {
  selectedTab.value = tab;
  if(selectedTab.value === '修改密码'){
    changePasswordModal.value=true
  }
}
const showInfo = ()=>{
  show.value=true;
  console.log(show.value)
}
const showList = ()=>{
  show.value=false
  console.log(show.value)

}
const listInfo = ref([
  {id:1,status:'待付款',brand:'华为',dateTime:'2020-01-29',type:'XL',productName:'卫衣',productPricture:'',originalPrice:100,count:1,price:0},
  {id:2,status:'待发货',brand:'华为',dateTime:'2020-01-29',type:'XL',productName:'卫衣卫衣卫衣卫衣卫衣卫衣',productPricture:'',originalPrice:100,count:1,price:0},
  {id:3,status:'待收货',brand:'华为',dateTime:'2020-01-29',type:'XL',productName:'卫衣',productPricture:'',originalPrice:100,count:1,price:0},
  {id:4,status:'待付款',brand:'华为',dateTime:'2020-01-29',type:'XL',productName:'卫衣卫衣卫衣卫衣卫衣卫衣',productPricture:'',originalPrice:100,count:1,price:0},
  {id:5,status:'待付款',brand:'华为',dateTime:'2020-01-29',type:'XL',productName:'卫衣卫衣卫衣卫衣卫衣卫衣卫衣卫衣卫衣卫衣卫衣卫衣卫衣卫衣',productPricture:'',originalPrice:100,count:1,price:0},
  {id:6,status:'历史订单',brand:'华为',dateTime:'2020-01-29',type:'XL',productName:'卫衣卫衣卫衣卫衣卫衣卫衣卫衣卫衣卫衣卫衣卫衣卫衣卫衣卫衣',productPricture:'',originalPrice:100,count:1,price:0}

]);
const columns = [
  {
    title: '积分详情',
    dataIndex: 'score',
  },
  {
    title: '审批人',
    className: 'column-money',
    dataIndex: 'admin',
  },
  {
    title: '原因',
    dataIndex: 'cause',
  },
];
const data = [
  {
    key: '1',
    score: 'John Brown',
    admin: '￥300,000.00',
    cause: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    score: 'Jim Green',
    admin: '￥1,256,000.00',
    cause: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    score: 'Joe Black',
    admin: '￥120,000.00',
    cause: 'Sidney No. 1 Lake Park',
  },
];
const selectedStatus = ref('待付款')
const filteredOrders = computed(() => {
  if (!selectedStatus.value) return listInfo.value;
  return listInfo.value.filter(item => item.status === selectedStatus.value);
});

function filterOrders(status) {
  selectedStatus.value = status;
}
const formRef = ref();
const labelCol = {
  span: 5,
};
const wrapperCol = {
  span: 13,
};
const change = ref(true);

const userEamil = ref('')
const emailCode = ref()
const historyPassword = ref('')
const newPassword = ref('')
const loading = ref(false);
const countdown = ref(0);

const buttonText = computed(() => {
  if (loading.value) {
    return '发送中...';
  } else if (countdown.value > 0) {
    return `${countdown.value}秒后重试`;
  } else {
    return '发送验证码';
  }
});

const sendVerificationCode = () => {
  // 发送验证码逻辑
  if (loading.value || countdown.value > 0) return;

  // 模拟发送验证码，并启动倒计时
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    countdown.value = 120;
    const timer = setInterval(() => {
      countdown.value--;
      if (countdown.value === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }, 2000); // 模拟异步发送验证码，2秒后完成
};


const rules = {
  name: [
    {
      min: 3,
      max: 6,
      message: '用户名3-6位',
      trigger: 'blur',
    },
  ],
};
const open = ref(false);
const showModal = () => {
  open.value = true;
};
const handleChangePassword = e => {
  console.log(e);
  changePasswordModal.value = false;
  selectedTab.value='个人资料'
};
const cancelModal = () => {
  selectedTab.value = '个人资料';
};

const changeInfo = () => {
  change.value = false;
  formRef.value
      .validate()
      .then(() => {
        console.log('values', userInfo, toRaw(userInfo));
      })
      .catch(error => {
        console.log('error', error);
      });
};
const saveInfo = async () => {
  change.value = true;
  formRef.value
      .validate()
      .then(async () => {
       const res =  await editUserInfo(userInfo);
               console.log(res)
        message.success("修改成功")
      })
      .catch(error => {
        console.log('error', error);
      });
};




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
.ant-input{
  padding-left: 10px;
  height: 30px;
  /*margin-top: 20px;*/
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
  background-color: rgb(0, 195, 255);
  margin-left: 200px;
}


.w h1 {
  float: right;
  margin-right: 200px;
}

.message {
  width: 1200px;
  height: 782px;
  /* background-color: antiquewhite; */
  margin: 10px auto;
  /* border: 1px solid black; */
}

.topper {
  width: 100%;
  height: 80px;
  background-color: #7A9D96;

}

.topper-list {
  width: 100px;
  height: 80px;
  float: left;
  line-height: 80px;
  margin-left: 300px;
  color: black;
  margin-left: 15px;
  padding-left: 30px;

}

.topper>button {
  width: 200px;
  background-color: #7A9D96;
  margin-left: 300px;
  height: 79px;
  border: none;
  font-size: 16px;
  cursor: pointer;
}

.left {
  width: 200px;
  height: 700px;
  background-color: #edeef0;
}
.btn{
  text-align: center;
  /* width: 200px; */
}
.btn>li {
  height: 60px;
  width: 200px;
  /* background-color: aliceblue; */
  line-height: 60px;
  border-left: none;
  cursor: pointer;
  outline: none;
  color: #000;
}
.btn li:hover{
  color: #ea7e05;
}


/* button:hover{
    background-color: aquamarine;
} */

.content {
  margin-left: 200px;
  margin-top: -700px;
}

.content-ul {
  margin: 40px 100px;
}

.content-li {
  height: 200px;
  /* border: 1px solid black; */
  /* border: none; */
}

.btn>button{
  width: 200px;
  height: 40px;
  outline: none ;
  border: 0;
  /* background-color: #eee; */
}
.person-img {
  height: 150px;
  width: 150px;
  margin-left: 100px;
}

.content-input {
  width: 150px;
  height: 30px;
  /* border: none; */
  border:1px solid rgb(216, 214, 214) ;
  background-color: aliceblue;
}

.content-btn {
  height: 33px;
  width: 80px;
  border: none;
  background-color: rgba(0, 0, 0, 0%);
  color: rgb(55, 106, 201);
  font-size: 16px;
  cursor: pointer;
}

#phone ,#worker,#jifen,#card,#company{
  margin-top: -150px;
}
#company select{
  width: 150px;
  height: 30px;
  /* border: none; */
  border:1px solid rgb(216, 214, 214) ;
  background-color: aliceblue;
}

/* 设置表格 */
.all-address {
  border: none;
}

.content2 {
  width: 1000px;
  height: 700px;
  margin-left: 200px;
  margin-top: -700px;
  overflow: auto;
}

.all-address,
.address {
  margin: 40px 100px;
}

.address-li {
  height: 60px;
  font-size: 16px;
}

.address-li>input {
  width: 400px;
  height: 30px;
  outline: none;
}

.btn2 {
  height: 40px;
  width: 60px;
  font-size: 16px;
  /* margin-left: 260px; */
  background-color: #7A9D96;
  color: white;
}

#moren {
  width: 30px;
  height: 16px;

}

.all-address {
  text-align: center;
  margin-left: 30px;
}

tr {
  height: 30px;

}

.first-tr {
  height: 50px;
  background-color: #a6d1c8;
}

/* 我的订单 */
.order {
  width: 1200px;
  height: 782px;
  /* background-color: antiquewhite; */
  margin: 10px auto;
  /* border: 1px solid black; */

}

.content3{
  margin-top: -700px;
  margin-left: 220px;
}

.order-list {
  width: 960px;
  height: 50px;
  background-color: #cfe3df;

  /* border: 1px solid rgb(193, 190, 190); */
}

.order-li {
  width: 120px;
  height: 50px;
  float: left;
  line-height: 50px;

}

#first-li {
  width: 250px;
  padding-left: 100PX;
}

.order-message {
  width: 960px;
  height: 200px;
  /* background-color: rgb(196, 208, 228); */
  margin-top: 30px;
  border: 1px solid rgb(193, 190, 190);

}

.list-message {
  width: 960px;
  height: 50px;
  background-color:#cfe3df;

}

.list-message li {
  width: 250px;
  height: 50px;
  float: left;
  line-height: 50px;
  /* margin-top: 30px; */
}

.goods-message li {
  float: left;
  margin-left: 10px;
  margin-top: 30px;
}

.quantity {
  padding-left: 70px;
  width: 60px;
}

.goods-operate {
  padding-left: 40px;
}

.total-price {
  padding-left: 40px;
}

.trade-state {
  padding-left: 50px;
}

#file {
  display: none;
}

#my-img {
  cursor: pointer;
}

.distpicker {
  margin-left: 91px;
  margin-top: -22px;
}

.distpicker div {
  float: left;

}

.distpicker div select {
  height: 30px;
  margin-left: 20px;
}
/* 遮罩层 */
#cover{
  background: #000;
  position: absolute;
  left: 0;
  top:0;
  height: 200%;
  width: 100%;
  filter: alpha(opacity=30);
  opacity: 0.3;
  display: none;
  z-index: 200;
}
/* 弹窗 */
.changeAddr{
  /* font-size: 10px; */
  position: absolute;
  left: 20%;
  top: 200px;
  background-color: #fafbfb;
  width: 800px;
  z-index: 999;
  border: 2px solid rgb(171, 171, 171);
  /* display: none; */
}
.changeAddr p{
  background-color: #edeef0;
  height: 30px;
  line-height: 30px;
}
i{
  font-size: 20px;
  color: #000;
  float: right;
  margin-right: 10px;
  line-height: 30px;
  cursor: pointer;
}
/* 积分弹出层 */

.jifendiv,.tel-check,.bindcard{
  position: absolute;
  left: 40%;
  top: 250px;
  border: 1px solid rgb(215, 215, 215);
  background-color: #ffffff;
  width: 400px;
  height: 300px;
  box-shadow: 2px 2px 2px rgb(192, 192, 192);
  z-index: 999;
}
.jifendiv p,.bindcard p,.tel-check p{
  background-color: #edeef0;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.jifendiv table {
  margin-top: 20px;
  border: none;
}
.jifendiv table tr td {
  width: 100px;
  text-align: center;
}
.jifendiv table tr td:nth-child(2){
  color: rgb(228, 128, 57);
}
/* 订单显示 */
.mes{
  display:-webkit-box;
  color: rgb(81, 80, 80);
  width: 150px;
  word-break:break-all;
  display:-webkit-box;
  -webkit-line-clamp:2;/*控制行数*/
  -webkit-box-orient:vertical;
  overflow:hidden;
}
/* 手机验证弹出层 */
.tel-check{
  /* display: none; */
  height: 160px;
  /* padding-top: 10px; */
  /* padding-left: 10px; */
  z-index: 999;
}
.tel-check input{
  margin-top: 10px;
  height: 25px;
}
#ver-code{
  border: none;
  background-color: #ffffff;
  color: rgb(220, 162, 85);
  cursor: pointer;
}
.tel-check button,.bindcard button{
  margin-left: 140px;
  margin-top: 10px;
  width: 80px;
  height: 30px;
  background-color: #7A9D96;
  cursor: pointer;
}
#sucess{
  font-size: 14px;
  color:red;
  height: 20px;
  line-height: 20px;
}
/* 绑定员工卡 */
.bindcard{
  height: 140px;
  line-height: 50px;
  /* padding-left: 20px; */
}
.bindcard input{
  width: 150px;
}
.active{
  color:#ea7e05 !important;
}
.actives{
  color: white !important;
}
</style>