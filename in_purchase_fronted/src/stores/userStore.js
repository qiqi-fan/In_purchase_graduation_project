import {defineStore} from "pinia";
import getUserInfoAPI from "@/api/index/getUserInfoAPI.js";
import getUserInfo from "@/api/index/getUserInfoAPI.js";

const userStore = defineStore("user", {
    state: () => ({
        userID: "",
        userName: "",
        userEmail: "",
        userType: "",
        employeeID: "",
        score:0,
    }),
    actions: {
        getAllUserInfo() {
            return {
                userID: this.getUserId(),
                userName: this.getUserName(),
                userEmail: this.getUserEmail(),
                userType: this.getUserType(),
                employeeId: this.getEmployeeId(),
                score: this.getScore(),
                address: this.getAddress()
            };
        },
        async fetchUserInfo() {
            try {
                const userData = await getUserInfo();
                this.setUserId(userData.userID);
                this.setUserName(userData.userName);
                this.setUserEmail(userData.userEmail);
                this.setUserType(userData.userType);
                this.setEmployeeId(userData.employeeID);
                this.setScore(userData.score)

            } catch (error) {
                console.error("Error fetching user info:", error);
            }
        },
        setUserId(newId) {
            this.userId = newId;
        },
        getUserId() {
            return this.userId;
        },
        setUserName(newName) {
            this.userName = newName;
        },
        getUserName() {
            return this.userName;
        },
        setUserEmail(newEmail) {
            this.userEmail = newEmail;
        },
        getUserEmail() {
            return this.userEmail;
        },
        setUserType(newType) {
            this.userType = newType;
        },
        getUserType() {
            return this.userType;
        },
        setEmployeeId(newId) {
            this.employeeId = newId;
        },
        getEmployeeId() {
            return this.employeeId;
        },
        setScore(newScore){
            this.score = newScore
        },
        getScore(){
            return this.score
        },
        setAddress(newAddress){
            this.address = newAddress
        },
        getAddress(){
            return this.address
        }
    },
});

export default userStore;
