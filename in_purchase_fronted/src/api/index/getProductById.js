import axios from "axios";
import {user_host, user_port} from "@/net/base.js";

const  getProductById = async function(id){
    let result;
    await axios.get("http://" + user_host + ":" + user_port + "/product/detail?id="+`${id}`)
        .then(res => {
            console.log(res);
            result = res
        })
        .catch(error => {
            console.error(error);
        });
    return result.data.data
}
export default getProductById