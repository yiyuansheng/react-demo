import axios from 'axios';
import { message } from 'antd'
// 跨域访问需要发送cookie时需要以下配置
axios.defaults.withCredentials = true;
// 全局请求路径
const globalUrl = 'http://47.96.117.121:8088' ;

const http = (config = {}) => {
    const key = 'global'
    config.url = globalUrl + config.url
    message.loading({ content: '加载中...', key });
    return new Promise((resolve, reject) => {
        axios(config)
        .then(res => {
            if (res.status === 200) {
                if (res.data.code === 20000) {
                    resolve(res.data.data)
                }
                else reject(res.data)
            }
            else reject(res.data)
            message.success({ content: '加载成功!', key, duration: 1 });
        })
        .catch(err => {
            reject(err)
            message.error({ content: '加载失败!', key, duration: 3 });
          })
    })
}

export default http