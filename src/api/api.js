import requestPost from '../service/common'

// 用于统一管理所有业务接口

export function postRequest(url, data){
    return new Promise(resolve, reject){
        requestPost(url, data)
            .then(res => resolve(res))
            .catch(error => reject(error))
    }
}