import {defineStore} from "pinia";

const userStore = defineStore("user",{
    state:()=>({
        userId:"",
        userName:"",
        userEmail:"",
        userType:"",
        employeeId:"",
    }),
    actions:{
        setUserId(newId){
            this.userId = newId;
        },
        getUserId(){
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
        }
    },

})
export default userStore;