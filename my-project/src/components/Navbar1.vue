<template>
  <div class="navbar navbar-default1">
        <div class="navbar-inner">
            <a class="navbar-brand"><span style="color: white">首页导航菜单</span>
            </a>
            <!-- user dropdown starts -->

            <ul class="collapse navbar-collapse nav nav-pills navbar-nav top-menu">
              <li v-for="item in topMenus">
                <a @click="toPath(item.note,item.id)"
                :class="{ 'active': item.note === data.currentPath }"
                >{{item.name }}</a>
              </li>
            </ul>
            <!-- top nav end
             <ul class="collapse navbar-collapse nav nav-pills navbar-nav top-menu">
                           <li v-for="item in topMenus">
                             <router-link :to="{ name: item.note}"
                             :class="{ 'active': item.note === data.currentPath }"
                             >{{item.name }}</router-link>
                           </li>
                         </ul>
             -->
   </div>
</template>

<script>

export default {
  name: 'Navbar1',
  data () {
      return {
        topId: this.$route.params.topId,
        topMenus: '',
        data: this.$store.state
      }
    },
    created(){
      this.getTopMenu()
    },
    watch: {
      'data':{
        handler:(val,oldVal)=>{
          //要执行的任务
          //这里不知道怎么才能修改到this.data的数据，有知道的麻烦告知
          //现在知道的就是通过直接修改Store.state的方式来更新数据，当然效果和修改this.data是一样的
          //alert('成功')
        },
        // 深度观察
        deep:true
      }
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
      toPath: function (note,id) {
        this.$router.push({name: note, params:{menuId: id}})
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

.navbar-default1 .navbar-nav>li>a.active, .navbar-default .navbar-nav>a.active>a:focus, .navbar-default .navbar-nav>a.active>a:hover {
    color: #178acc;
    background-color: #ffffff;
}
</style>
