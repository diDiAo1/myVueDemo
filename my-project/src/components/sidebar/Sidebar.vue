<template>
    <div class="sidebar-nav tab-pane fade in" style="display:block">
      <div class="nav-canvas">
        <ul class="nav nav-pills nav-stacked main-menu">
          <li class="nav-header">菜单列表</li>
          <li v-for="item in sideBarMenus">
            <a>
              <i class="glyphicon glyphicon-user"></i>
              <span>{{item.name}}</span>
            </a>
          </li>
          <!--
          <li v-for="item in topMenus">
             <router-link :to="{ name: item.note}"
             :class="{ 'active': item.note === data.currentPath }"
             >{{item.name }}</router-link>
           </li>
          -->
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      sideBarMenus: '',
    }
  },
  created () {
    this.getSideBarMenu()
  },
  methods: {
    getSideBarMenu: function () {
      this.$http.post('/Jails/servlet/SystemFunctionServlet',
         {
            methodName  :   18,
            id:             this.$route.params.menuId
         })
         .then(function (res) {
           console.log(res)
           if (res.body.success) {
            this.sideBarMenus = res.body.data
           }
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
