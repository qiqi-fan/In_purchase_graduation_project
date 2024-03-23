<template>
      <a-form
          :model="formState"
          name="normal_login"
          class="login-form"
          :rules="[rules]"
      >
        <a-form-item
            label="用户名"
            name="username"
            :rules="[{ message: '请输入用户名' }]"
        >
          <a-input v-model:value="formState.username">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            label="邮箱"
            name="email"
            :rules="rules.email"
            id="registerEmail"
        >
          <a-input v-model:value="formState.email" autocomplete="off">
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
          <a-input-password v-model:value="formState.password" autocomplete="off"   id="registerPassword">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item
            label="确认密码"
            name="confirmPassword"
            :rules="rules.password"

        >
          <a-input-password v-model:value="formState.confirmPassword" autocomplete="off" id="confirmPass">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>
<!--        <a-form-item>-->
<!--          <a-form-item name="remember" no-style>-->
<!--            <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>-->
<!--          </a-form-item>-->
<!--        </a-form-item>-->

        <a-form-item>
          <a-button type="primary" html-type="submit" class="login-form-button" @click="registerForm">
            注册
          </a-button>
          <a style="float: right" @click="$emit('showLogin')">返回登录</a>
        </a-form-item>
      </a-form>
</template>
<script setup>
import {UserOutlined,LockOutlined,MailOutlined} from '@ant-design/icons-vue';
import {reactive, computed, inject} from 'vue';
import {dealPassword, getKey, register} from '../net/login.js'
import {JSEncrypt} from "jsencrypt";
import axios from "axios";
import {user_host, user_port} from "@/net/base.js";
const formState = reactive({
  username:'',
  email: '',
  password: '',
  confirmPassword:'',
});
const show=true;
const goLogin = function (){
this.show=false;
}
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
        reject(new Error("密码长度必须为8-16且包含大小写，数字"))
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
const message=inject('message')
const registerForm = async () => {
  //先发出一个请求获取服务端的秘钥
  const key = await getKey();
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(await key);
  let encryptData = {
    name: formState.username,
    email: formState.email,
    password: await dealPassword(formState.password),
    retryPassword: await dealPassword(formState.confirmPassword),
    userEnum: 'COMMON_USER',
  };
  axios.post("http://" + user_host + ":" + user_port + "/user/register", encryptData)
      .then(resp => {
        if(resp.data.code===200){
          console.log(resp)
          message.success('注册成功！')
        }else{
          message.error(resp.data.msg)
        }
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
</style>
