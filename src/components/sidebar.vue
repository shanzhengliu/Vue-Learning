
<template>
<div >
  <el-col :span="4" >
<!--  <a href="/com1">1</a>-->
<!--  <a href="/com2">2</a>-->
   <el-menu id="el-menu" :default-active="activeIndex" class="el-menu-vertical-demo"  :router=true  background-color="#545c64"  active-text-color="#ffd04b" text-color="#ffffff">
    <el-menu-item index="/dashboard/com1">COM1</el-menu-item>
    <el-menu-item index="/dashboard/com2">COM2</el-menu-item>
    <el-submenu index="/com3">
      <template slot="title">COM3</template>
         <el-menu-item index="/dashboard/com3/1">COM3.1</el-menu-item>
    </el-submenu>
  </el-menu>
  </el-col>
</div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: 'dashboard/com1'
    }
  },
  name: 'sidebar'
}
</script>

<style scoped>
  #el-menu {
   height:calc(100vh);
  }
</style>
