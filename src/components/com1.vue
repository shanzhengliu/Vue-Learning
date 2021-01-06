<template>
  <div>我是抖动教程
  <input v-model="search"/>
    <span>{{result}}</span>
  </div>

</template>

<script>
import debounce from 'lodash/debounce'

export default {
  name: 'Com1',
  data () {
    return {
      search: '',
      searchQueryIsDirty: false,
      isCalculating: false
    }
  },
  computed: {
    result: function () {
      if (this.isCalculating && this.searchQueryIsDirty) {
        return this.search
      }
    }
  },
  watch: {
    search: function () {
      this.searchQueryIsDirty = true
      this.expensiveOperation()
    }
  },

  methods: {
    expensiveOperation: debounce(function () {
      this.isCalculating = true
      setTimeout(function () {
        this.isCalculating = false
        this.searchQueryIsDirty = false
      }.bind(this), 1000)
    }, 500)
  }
}
</script>

<style scoped>

</style>
