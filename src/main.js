import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/mtaxios'
import './apis'
//导入element-ui(css库)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

router.beforeEach((to,from,next)=>{
  if(to.path==='/login'){
    next();
  }else{
    //判断是否登陆(是否有token 本地获取)
    var token = localStorage.getItem('token')
    if(token){
      next();
    }else{
      next({path:'/login',query:{redirect:to.path}})
    }
  }
})

Vue.config.productionTip = false
import "reset-css"
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
