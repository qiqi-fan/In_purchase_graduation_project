import axios from "axios";
import {user_host, user_port} from "@/net/base.js";

const getAllProduct = async function (requestData) {
    let result;
   await axios.post("http://" + user_host + ":" + user_port + "/product/all", requestData)
        .then(res => {
            console.log(res);
            result = res
        })
        .catch(error => {
            console.error(error);
        });
   return result
}


export default getAllProduct

