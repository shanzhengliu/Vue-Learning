<template>
<div>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      v-for="(item,index) in breadList"
      :key="index"
      :to="{ path: item.path }"
    >{{item.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</div>
</template>

<script>

export default {
  name: 'Bread',
  data () {
    return {
      breadList: [] // 路由集合
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  mounted () {
    console.log(this.$route.meta)
  },
  methods: {
    isHome (route) {
      return route.name === 'Dashboard'
    },
    getBreadcrumb () {
      let matched = this.$route.matched
      if (!this.isHome(matched[0])) {
        matched = [{path: '/dashboard', meta: {title: 'dashboard'}}].concat(matched)
      }
      this.breadList = matched
    }
  },
  created () {
    this.getBreadcrumb()
  }
}
</script>

<style scoped>

</style>
