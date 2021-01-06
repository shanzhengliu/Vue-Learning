<template>
  <div id="app">
<!--  <index/>-->
<!--    <index/>-->
<!--  <HelloWorld/>-->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import index from './components/index'
export default {
  name: 'App',
  components: { HelloWorld, index }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

}
</style>
