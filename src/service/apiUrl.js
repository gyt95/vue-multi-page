const url = {
    loginUrl: '/login',
    getBookDataUrl: '/book',
    postBookDataUrl: '/book'
}

export default url;

/**
 * 专门管理Url
 * 
 * 安全性原因，不要把url放入vue中，转化为html
 * 
 * 如果攻击接口，能通过获取html拿到接口url，然后进行服务器攻击
 * 
 * 改写入js文件，会被转换成字母，提高安全性
 */