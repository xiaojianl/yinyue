//导入axios模块
import axios from 'axios'
import Vue from 'vue'
//配置基础路径
axios.defaults.baseURL = process.env.VUE_APP_BaseURL;
console.log(process.env)
//配置拦截器
//拦截请求
axios.interceptors.request.use(function (config) {
    var token = localStorage.getItem('token');
	  config.headers.common['Authorization'] = "Bearer "+token
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
 
// 响应拦截器
axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

var mtaxios = {
    get:function(url,params){
        console.log("axios get 请求");
        return axios.get(url,{params:params})
    },
    post:function(url,params){
        console.log("axios post 请求")
        return axios.post(url,{params})
    }
}

Vue.prototype.$http = mtaxios;

export default mtaxios;