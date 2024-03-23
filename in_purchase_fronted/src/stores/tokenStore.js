import {defineStore} from "pinia";
// const localToken=JSON.parse(localStorage.getItem('userToken'))
const useTokenStore = defineStore('token',{
    state:()=>({
        token:'',
        userName:'登录'
    }),
   actions:{
        setToken(newToken){
            this.token=newToken
        },
       setUserName(newName){
            this.userName=newName
       },
        clearToken(){
            this.token=null
        }
    }
})
export default useTokenStore