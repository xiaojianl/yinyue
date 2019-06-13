//管理接口
import Vue from 'vue'

var apis = {
    // 登录
    checkDynamicCode:'checkDynamicCode', //动态验证码
    signin:"signin", //系统登录
    //微信端登陆接口
    denglujiekou:'/user/signin',
    //日历管理
    chaxun:'/daily/findDailyBackground?daily=2019-06-12',
    dianzan:'/daily/setDailyBackgroundLike',
    shezhi:'/daily/setDailyBackground',
    //留言管理
    liuyanguanli:'/message/addNewMessage',
    //类型管理
    shanchuyinyue:'/music/deleteMusicType',
    chaxunyinyue:'/music/findMusicTypes',
    xinzengleixing:'/music/addNewMusicType',
    //音频管理
    gengxinyinpin:'/music/updateMusicInfo',
    shanchuyinpin:'/music/deleteMusic',
    chaxunyinpin:'/music/findMusic?pubDate=1559867844317&type=%E8%87%AA%E7%84%B6%E4%B8%96%E7%95%8C&name=%E8%A1%97%E5%B7%B7&pageSize=10&pageNo=1',
    xinzengyinpin:'/music/uploadMusic',
}
Vue.prototype.$apis = apis;
export default apis;