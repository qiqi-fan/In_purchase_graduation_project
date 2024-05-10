import axios from "axios";
import {user_host, user_port} from "@/net/base.js";
import {message} from "ant-design-vue";

export const getAllMenu = async function (){
    let res = null
    await axios.get(
        "http://"+user_host+":"+user_port+"/menu/all",
        {
            headers: {
                'Cache-Control':"max-age=60"
            }
        }
        )
        .then(resp=>{
            res = resp;
        })
        .catch(err=>{
            res =err
        })
    return res;
}