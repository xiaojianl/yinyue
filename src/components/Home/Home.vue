<template>
    <div id="home">
        <div id="headers">
            <el-button style="margin-top:15px;margin-left:20px;" type="danger" size='mini' @click="logout">
                <i class="el-icon-warning-outline"></i>退出
            </el-button>
        </div>
       <div id="conten">
            <div id="conten-left">
               首页
            </div>
            <div id="conten-right">
                
            </div>
       </div>
      
    </div>
</template>
<script>

export default {
    methods:{
        logout(){
          this.$confirm('是否继续退出', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
          localStorage.clear();
          this.$router.push({name:'signin'});
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
             });          
          });
        }
      }
    }
</script>
<style lang="scss" scoped>
    #home{
        width: 100%;
        height: 100%;
        
    }
    #headers{
        width: 100%;
        height: 10%;
        background: rgba(0, 223, 0, 0.657);

    }
    #conten{
        width:100%;
        height: 90%;
        display: flex;
        flex-direction: row;
        
    }
    #conten-left{
        min-width: 300px;
        width: 15%;
        height: 100%;
        background: #545c64;
    }
    #conten-right{
        width: 85%;
        height: 100%;
    }
</style>
