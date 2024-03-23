import {user_host, user_port} from "@/net/base.js";
import axios from "axios";

const getUserInfo = function (){
    const token = localStorage.getItem("userToken")
    axios.get("http://" + user_host + ":" + user_port + "/user/getUserInfo",
        {
            headers: {
                Token:token
            }
        })
        .then(resp=>{
            console.log(resp)

        })
}

export default getUserInfo