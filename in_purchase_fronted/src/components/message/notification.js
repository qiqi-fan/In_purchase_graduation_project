// notification.js

import { createApp } from 'vue';
import AlertBox from './AlertBox.vue';

// 创建应用实例
const app = createApp({});

// 注册全局组件
app.component('GlobalAlert', AlertBox);
// import {h} from
// 命名导出 $alert 函数
export default function $alert(options) {
    const { title, type, closable, duration } = options;
    const alertInstance = app.mount(document.createElement('div'), {
        // 使用注册的 GlobalAlert 组件
        render() {
            return app.h('global-alert', { // 使用组件名
                title,
                type,
                closable,
                visible: true
            });
        }
    });
    if (duration) {
        setTimeout(() => {
            alertInstance.$emit('update:visible', false);
        }, duration);
    }
}
