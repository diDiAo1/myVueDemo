<template>
  <div class="container">
    <div class="col-md-12 map-content">
      <div class="electronic-body" id="electronic-bg">
        <h1>{{msg}}</h1>
        <button v-on:click="toLogin()">跳转到登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'second',
  data () {
    return {
      msg: '第二个页面'
    }
  },
  methods: {
    toLogin: function () {
      this.$router.push({path: '/home'})
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
