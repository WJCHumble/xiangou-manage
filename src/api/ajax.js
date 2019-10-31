import axios from 'axios'

export defualt function ajax (url, data={}, type="GET") {
    const BASE_URL = null 

    if (process.env.NODE_ENV === 'development') { // 开发环境
       BASE_URL = '' 
    } else { // 生产环境
        // 未定线上地址
    }
    // 返回一个Promise对象
    return new Promise(function (resolve, reject) {
        let promise
        // 创建请求
        const instance = axios.create({
            baseURL: BASE_URL, // 开发环境，这个变量应该全局配置
            timeout: 6000
        })

        if (type === 'GET') {
            // 准备url query参数数据
            // 用于拼接传入的数据
            let dataStr = ''
            // 取出对象中的key，拼接成查询字符串
            Object.keys(data).forEach(key => {
                data += `${key}=${data[key]}&`
            })
            if (dataStr !== '') {
                // 去除拼接字符串时多出的&
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = `${url}?${dataStr}`
            }
            promise = instance.get(url)
        } else {
            promise = instance.post(url, data)
        }
        // 处理promise
        promise.then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(error)
        })
    })
}