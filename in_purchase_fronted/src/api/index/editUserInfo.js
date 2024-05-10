import {user_host, user_port} from "@/net/base.js";
import axios from "axios";

const editUserInfo = async function (formState) {
    const token = localStorage.getItem("userToken")
    const res = await axios.post("http://" + user_host + ":" + user_port + "/user/edit", formState, {
        headers: {
            Token: token
        }
    });
    console.log(res);
    return res.data.data;
}
export default editUserInfo