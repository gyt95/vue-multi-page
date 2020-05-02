import axios from 'axios';
// 服务层

function getTokenByLocal(){
    let token = sessionStorage.getItem('token' '';
    return token;
}

const instance = axios.create({
    baseUrl: '',
})

instance.interceptors.request.use(
    config => {
        // if(getTokenByLocal()){
        //     config.headers['token'] = getTokenByLocal();
        // }
        config.headers['ContentType'] = "application/json;charset=utf-8"
        return config;
    }, 
    error => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    response => {
        let res = response.data;
        // if(res.code == '200'){

        // }
        return response;
    },
    error => {
        return Promise.reject(error)
    }
)

export default instance;

/**
 * 统一管理代码的前提是：把代码细分解耦，再高度封装/统一管理
 * 
 * 不要把所有的相关代码都放在一个文件里，维护成本较高
 */