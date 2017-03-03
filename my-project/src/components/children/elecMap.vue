<template>
  <div>
    <div class="col-md-12 map-content">
      <div class="electronic-body" id="electronic-bg">
        <h1>{{msg}}</h1>
        <button v-on:click="toSecond()">跳转到第二个页面</button>
        <h2>{{author}}</h2>
        <h2>传递过来的topId：{{topId}}</h2>
        <ul class="collapse navbar-collapse nav nav-pills navbar-nav top-menu">
          <li v-for="item in systemList">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
     </div>
  </div>
</template>

<script>

export default {
  name: 'elecMap',
  data () {
    return {
      msg: '电子地图页面',
      systemList: '',
      topId: this.$route.params.topId
    }
  },
  created(){
      this.getSystemList();
      this.setCurrentPath();
  },
  computed: {
    author () {
      return this.$store.state.author
    }
  },
  methods: {
    toSecond: function () {
      this.$router.push({path: '/home1/second'})
    },
    setCurrentPath: function () {
      this.$store.state.currentPath = 'start.electronicMap'
    },
   getSystemList: function () {
     this.$http.post('/Jails/servlet/AccessManagementServlet',
       {
         methodName: 6
       })
       .then(function (res) {
         console.log(res)
         this.systemList = res.body.data
       }, function (err) {
         console.warn(err)
       })
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
