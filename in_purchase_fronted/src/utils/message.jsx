// import {createApp} from "vue";
// import { h } from 'vue';
// import Alert from "@/components/message/AlertBox.vue";
// const AlertBox = {
//     props:{
//         msg:{
//             type:String,
//             required:true,
//         },
//         type:{
//
//         }
//     },
//     render() {
//         return h('div', [
//             h(Alert, this.msg),
//             h('button', { onClick: this.handleClick }, '确认')
//         ]);
//     },
//     methods: {
//         handleClick() {
//             this.$emit('onClick');
//         }
//     }
// }
// export function showMsg(msg,type,onClick){
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const app = createApp(AlertBox,{
//         msg,
//         type,
//         onClick(){
//             onclick(()=>{
//                 app.unmount();
//                 div.remove();
//             })
//         }
//     });
//     app.mount(div)
//
// }