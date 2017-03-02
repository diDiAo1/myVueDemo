<template>
  <div class="navbar navbar-default1">
        <div class="navbar-inner">
            <a class="navbar-brand"><span style="color: white">首页导航菜单</span>
            </a>
            <!-- user dropdown starts -->

            <ul class="collapse navbar-collapse nav nav-pills navbar-nav top-menu">
              <li v-for="item in topMenus">
                <a @click="toPath(item.note)"><span>{{item.name}}</span></a>
              </li>
            </ul>
            <!-- top nav end -->
   </div>
</template>

<script>
export default {
  name: 'Navbar1',
  data () {
      return {
        topId: this.$route.params.topId,
        topMenus: ''
      }
    },
    created(){
      this.getTopMenu()
    },
    methods: {
      getTopMenu: function () {
        this.$http.post('/Jails/servlet/SystemFunctionServlet',
           {
              methodName  :   17,
              id:             this.$route.params.topId
           })
           .then(function (res) {
             console.log(res)
             if (res.body.success) {
              this.topMenus = res.body.data
             }
           }, function (err) {
             console.warn(err)
           })
      },
      toPath: function (note) {
        this.$router.push({name: note})
      }
    }
}
</script>

<style>
.navbar-default1 {
  background-color: #2faaa7;
  border-color: #1995dc;
}

.navbar-default1 a{
  color: #ffffff;
}
</style>
