import {user_host, user_port} from "./base.js"

// 导出异步函数
import axios from "axios";
import {JSEncrypt} from "jsencrypt";


export const getKey = async function () {
    try {
        // 获取公钥
        const response = await axios.get("http://" + user_host + ":" + user_port + "/user/pub_key");
        return response.data.data;
    } catch (error) {

        console.log('获取公钥'+error.toString());
        return null; // 或者抛出错误 throw error;
    }
}
export const dealPassword = async function (password) {
    const key = await getKey();
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(await key);
    const passArr = [];
    let i = 0;
    let len = password.length;
    let passLen = 1;
    while (len > 0) {
        passArr.push(encrypt.encrypt(password.substring(i, i + passLen)));
        i += passLen;
        len -= passLen;
    }
    return passArr;
}


export const register = async function (form) {

}