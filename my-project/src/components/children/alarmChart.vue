<template>
  <div>
    <div class="col-md-12 map-content">
      <div class="electronic-body" id="electronic-bg">
        <h1>{{msg}}</h1>
        <h2>{{author}}</h2>
      </div>
     </div>
  </div>
</template>

<script>

export default {
  name: 'videoMonitor',
  data () {
    return {
      msg: '报表页面',
    }
  },
  computed: {
    author () {
      return this.$store.state.author
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
