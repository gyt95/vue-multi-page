<template>
    <div id="app">
        <h3>这是主页</h3>
        <button @click="login">发送请求</button>
    </div>
</template>

<script>
import url from '../../service/apiUrl'
import { postRequest } from '../../api/api'
export default {
    name: 'home',
    methods: {
        async login(){
            let params = {
                username: 'admin',
                password: '123456'
            }
            // postRequest(url.getBookDataUrl, params).then(res => console.log(res))

            // es7
            try{
                let loginData = await postRequest(url.getBookDataUrl, params)
                console.log(loginData)
            }catch(err){
                console.log(err)
            }
        }
    }
}
</script>

<style>

</style>
