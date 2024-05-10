<template>
  <a-modal :open="props.open" :footer="null" title="登录注册" @cancel="closeModal">

<!--    <a-image src="src/assets/OnlineShopping.png" :preview="false" width="600px" style="margin-top: 20px"></a-image>-->
    <div :style="loginDiv">
      <a-form
          :model="formState"
          name="normal_login"
          class="login-form"
          @finishFailed="onFinishFailed"
          :rules="[rules]"
      >
        <a-form-item
            label="邮箱"
            name="email"
            :rules="rules.email"
        >
          <a-input v-model:value="formState.email" autocomplete="off" id="loginEmail">
            <template #prefix>
              <MailOutlined />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            label="密码"
            name="password"
            :rules="rules.password"
        >
          <a-input-password v-model:value="formState.password" autocomplete="off" id="loginPassword">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-form-item name="remember" no-style>
            <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
          </a-form-item>
          <a class="login-form-forgot" @click="showForgotPassword()">忘记密码</a>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" class="login-form-button" @click="submitForm">
            登录
          </a-button>
          或
          <a @click="showRegister()">注册账号</a>
        </a-form-item>
      </a-form>
    </div>
    <div :style="registerDiv">
      <register @showLogin="showLogin"></register>

    </div>
    <div :style="forgotPasswordDiv">
      <forgot-password @showLogin="showLogin"></forgot-password>
    </div>
  </a-modal>

</template>
<script setup>

import {UserOutlined,MailOutlined,LockOutlined} from '@ant-design/icons-vue';
import {reactive, computed, inject} from 'vue';
import Register from "@/components/Register.vue";
import ForgotPassword from "@/components/ForgotPassword.vue";
import axios from "axios";
import {user_host, user_port} from "@/net/base.js";
import {dealPassword} from '../net/login'
import userStore from "@/stores/userStore.js";
const props=defineProps({
  open:{
    type:Boolean,
    require:true,
    default:false,
  }
})
const emits=defineEmits(['closeLogin'])
const closeModal=function (){
  emits('closeLogin')
}
const formState = reactive({
  email: '',
  password: '',
  remember: true,
});

const loginDiv=reactive({
  width: '80%',
  display:'block',
})
const registerDiv=reactive({
  width: '80%',
  display:'none',
})
const forgotPasswordDiv=reactive({
  width: '80%',
  display:'none',
})
const showRegister = () =>{
  loginDiv.display='none';
  registerDiv.display='block';
}
const showLogin = () => {
  registerDiv.display='none';
  forgotPasswordDiv.display='none';
  loginDiv.display = 'block';
}
const showForgotPassword = ()=>{
  loginDiv.display='none'
  forgotPasswordDiv.display='block'
}
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const validateEmailFormat = function (email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email)
}
const validateEmail = (rule, value) => {
  return new Promise((resolve, reject) => {
    if (value === '') {
      reject(new Error('必须输入邮箱'));
    } else {
      if (!validateEmailFormat(value)) {
        reject(new Error('邮箱格式不合法'));
      } else {
        resolve();
      }
    }
  });
};

const validatePasswordFormat = function (password) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
  return passwordRegex.test(password)
}
const validatePassword = (rule, value) => {
  return new Promise((resolve,reject)=>{
    if (value === '') {
      reject(new Error("必须输入密码"))
    } else {
      if (!validatePasswordFormat(value)) {
        // reject(new Error("密码长度必须为8-16且包含大小写，数字"))
      }else{
        resolve()
      }
    }
  })

}
const rules = {
  email: [{validator: validateEmail, trigger: 'change'}],
  password: [{validator: validatePassword, trigger: 'change'}]
}
const message = inject('message')
const useStore=userStore()
const submitForm = async () => {
  //先发出一个请求获取服务端的秘钥
  const encryptData = {
    email: formState.email,
    password: await dealPassword(formState.password),
    userEnum: "COMMON_USER"
  };
  axios.post("http://" + user_host + ":" + user_port + "/user/login", encryptData)
      .then(resp => {
        if(resp.data.code===200){
          const res_data = resp.data.data;
          console.log(res_data)
          sessionStorage.setItem("currentUserName",res_data.userInfo.userName)
          // useStore.setUserId(res_data.userInfo.userID)
          // useStore.setUserName(res_data.userInfo.userName)
          localStorage.setItem('userToken',resp.data.data.token)
          console.log(useStore.getUserId()+useStore.getUserName())
          console.log(localStorage.getItem('userToken'))
          emits('closeLogin')
          location.reload()
          message.success('登录成功')

        }else{
          message.error(resp.data.msg)
        }
      }).catch(error=>{
    console.log(error)
        message.error(error)
  })
}

</script>
<style scoped>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
.fadeout{
  -webkit-transition: all 1.5s;
  -moz-transition: all 1.5s;
  -ms-transition: all 1.5s;
  -o-transition: all 1.5s;
  transition: all 1.5s;
  opacity: 0;
}
.fadein{
  -webkit-transition: all 1.5s;
  -moz-transition: all 1.5s;
  -ms-transition: all 1.5s;
  -o-transition: all 1.5s;
  transition: all 1.5s;
  opacity: 1;
}
</style>

