import axios from './axios'
// 接口层，封装不同的通用请求方式

// 不建议写在axios.js中
export default function requestPost(url, data){
    return axios.post(url, data)
} 

export default function requestGet(url, data){
    return axios.get(url, data)
} 

