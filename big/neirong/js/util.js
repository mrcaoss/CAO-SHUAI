//工具函数
var token = window.localStorage.getItem('token') || ''
//1.提取公共的baseURL
//请求拦截器
//login请求一进来  携带者请求的选项success、URL等
$.ajaxPrefilter(function (options) {
    //当login请求发起时，传入/api/login====>options.url
    //项目的请求根路径是http://ajax.frontend.itheima.net
    //options.url  =>  /api/login
    options.url = 'http://ajax.frontend.itheima.net' + options.url

    //统一设置请求头
    options.headers = {
        Authorization: token,
    }
})