import {user_host, user_port} from "@/net/base.js";
import axios from "axios";

const getUserInfo = async function () {
    const token = localStorage.getItem("userToken")
    let res;
    await axios.get("http://" + user_host + ":" + user_port + "/user/user_info",
        {
            headers: {
                Token: token
            }
        })
        .then(resp => {
            res = resp.data.data
        })
    return res
}
export default getUserInfo