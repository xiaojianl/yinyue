<template>
    <div id="signin">
       <div id="huabu">
            <div id="container" >
                <div id="head">
            <p>个人音乐网欢迎您</p>
            </div>
                <div id="foot">
                    <div id="dl">
                        <el-form label-width="80px" :model="userInfo" :rules='rules' ref="userInfo"> 
                            <el-form-item  prop="username">
                                <el-input type="text" placeholder="请输入用户名" v-model="userInfo.username" ></el-input>
                            </el-form-item>
                            <el-form-item prop="password">
                                <el-input type="password" placeholder="请输入密码" v-model="userInfo.password"></el-input>
                            </el-form-item>
                            <el-form-item prop="verificationCode">
                                <el-input type="text" placeholder="请输入验证码" v-model="userInfo.verificationCode"></el-input>
                            </el-form-item>
                        </el-form>
                </div>
                    <div id="footcontent" >
                        <el-switch
                                v-model="remberme"
                                active-color="#13ce66"
                                inactive-color="#ff4949"
                                active-text="下次默认登录"
                                >
                        </el-switch> 
                        <p v-html="Data.data" style="textAlign:center"></p>
                    </div> 
                    
                <div id="confoot">
                    <el-button type="primary" @click="signin">登录</el-button>
                    <el-button type="primary" @click="login">取消</el-button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if(value.length<4||value.length>12){
         callback(new Error("密码长度范围4位数~12位数"));
        }else{
            callback();
        }
      };

        return{
        Data:'',
         userInfo:{
            username:'',
            password:'',
            verificationCode:''
         },
         remberme:true,
            rules:{
        username:[
            //需要：真的，消息：用户名不能为空，触发：模糊
            //规则名称
            {required:true,message:'请输入用户名',trigger:'blur' }
        ],
        password:[
            //{required:true,message:'请输入密码',trigger:'blur' },
            {validator:validatePass,trigger:'blur'}//min:4,
        ],
        verificationCode:[
            {required:true,message:'请输入验证码',trigger:'blur' }
        ],
    }
    }
    },
   methods:{
        signin(){
        // console.log(this.$refs);
          this.$refs['userInfo'].validate((valid)=>{
              if(valid){
                  this.$http.post(this.$apis.signin,this.userInfo)
                  .then((resp)=>{
                      //获取服务器返回的数据
                      console.log("resp",resp)
                      var username = resp.data.username;
                      var token = resp.data.token;
                      //保存token到本地
                      localStorage.setItem("token",resp.data.token)
                      //是否记住用户选择
                      localStorage.setItem("isRember",this.remberme);
                      localStorage.setItem("accountInfo",JSON.stringify(resp.data.response));
                      var query = this.$route.query;
                      this.$router.push({path:"/home"})
                  }).catch((err)=>{
                      console.log(err)
                  })
              }else{
                  return false;
              }
          })
      },
       login(){
            this.userInfo.username = "";
            this.userInfo.password = ""
        }
    },
    created(){
         //监听浏览器关闭动作，当关闭浏览器后
         //如果rememberme是true，则保存数据到localStorage
         //否则页面关闭localStorage数据清空
         this.remberme = localStorage.getItem("isRember")==='true'?true:false;
        window.onbeforeunload = (e)=>{
            if(!this.remberme){
                // localStorage.clear();
                localStorage.removeItem("token");

            }
            // 
            // var e = window.event||e;
            // e.returnValue=("确定离开当前页面吗？");
    }
     this.$http.get(this.$apis.checkDynamicCode)
        .then((resp)=>{
            console.log('resp',resp.data.data)
            var resp = resp.data.data;
            this.Data = resp;
        })
    }
   }

</script>
<style lang="scss" scoped>
        #signin{
            width: 100%;
            min-width: 700px;
            height: 100%;
            background:url(../../img/ti.jpg) no-repeat 0 0;
            background-size: 100% 800px;
            color: white;
        }
        #huabu{
            width: 100%;
            height: 100%;
        }
        #container{
           width: 30%;
           height: 100%;
           background:rgba($color: #FFFF84, $alpha: 0.65);
           float:right;    
        }
         #head{
            width: 100%;
            height: 30%;
            color: white;
            font-size: 30px;
            text-align: center;
            margin-top: 10%;
        }
        #confoot{
            margin-left:35%;
            min-width: 200px;
        }   
    #foot{
            width: 100%;
            display: flex;
            justify-content:center;
            flex-direction: column;
            align-items:center;
        }
        #dl{

                width: 100%;
                background:none;
                border: none;
                outline: none;
                text-align: center;
                .el-input{
                    //穿透
                    /deep/ input {
                        background: none;
                        border: none;
                        border-bottom: 1px solid #000;
                        border-radius: 0;
                    }
                }
            }
        #footcontent{
            font-size: 5px;
        }   
            
</style>