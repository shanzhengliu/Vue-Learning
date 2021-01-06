<template>
<div >
  <Sidebar />
    <Dash />

</div>
</template>

<script>
import Dash from './Dash'
import Sidebar from './sidebar'
import Bread from './bread'
export default {
  name: 'HelloWorld',
  components: {Sidebar, Dash, Bread},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
