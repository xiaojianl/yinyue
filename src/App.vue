<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$apis);
  }
}
</script>


<style lang="scss"> 
    #app{
      position: absolute;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
    }
</style>
