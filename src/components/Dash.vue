<template>
   <el-col :span=20>
    <Bread />
    <transition>
      <keep-alive>
        <router-view :key="key" mode="out-in"/>
      </keep-alive>
    </transition>
   </el-col>

</template>

<script>
import Bread from './bread'
export default {
  name: 'Dash',
  components: {Bread},
  computed: {
    key () {
      return this.$route.fullPath
    }
  }
}
</script>

<style scoped>

</style>
