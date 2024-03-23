
import Notification from './notification'
//调用notification创建实例，并通过add把数据传过去，这是组件开发的最后一步
let messageInstance;

function getMessageInstance(){
//     获取实例
    messageInstance = messageInstance || Notification.newInstance();
    return messageInstance;
}
function notice({duration=1.5, content=''}){
    let instance = getMessageInstance();
    instance.add({
        content:content,
        duration:duration
    })
}
export default {
    info(options){
        return notice(options)
    }
}