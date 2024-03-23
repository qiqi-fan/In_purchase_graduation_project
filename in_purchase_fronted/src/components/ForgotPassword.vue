<template>
  <a-form
      :model="formState"
      name="normal_login"
      class="login-form"
      :rules="[rules]"
  >
    <a-form-item
        label="邮箱"
        name="email"
        :rules="rules.email"
    >
      <a-input v-model:value="formState.email" autocomplete="off" id="registerForgot">
        <template #prefix>
          <MailOutlined />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item
        label="验证码"
        name="code"
        :rules="[{message: 'Please input verify code!' }]"
    >
      <a-input v-model:value="formState.username">
        <template #prefix>
          <InfoCircleOutlined />
        </template>
      </a-input>
    </a-form-item>
    <a-form-item
        label="密码"
        name="password"
        :rules="rules.password"
            >
      <a-input-password v-model:value="formState.password" autocomplete="off" id="forgotPassword">
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
      <a-input-password v-model:value="formState.confirmPassword" autocomplete="off"  id="forgotConfirm">
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
        确认
      </a-button>
      <a style="float: right" @click="$emit('showLogin')">返回登录</a>
    </a-form-item>
  </a-form>
</template>
<script setup>
import {LockOutlined,MailOutlined,InfoCircleOutlined} from '@ant-design/icons-vue';
import { reactive, computed } from 'vue';
import {register} from '../net/login.js'
const formState = reactive({
  email: '',
  code:'',
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
const registerForm = async () => {
  //先发出一个请求获取服务端的秘钥
  await register(formState)

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
