<template>
  <div class="navbar navbar-default" role="navigation">
        <div class="navbar-inner">
            <a class="navbar-brand"><span style="color: white">智慧监所平台</span>
            </a>
            <!-- user dropdown starts -->
            <div class="btn-group pull-right">
                <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    <i class="glyphicon glyphicon-user"></i><span class="hidden-sm hidden-xs" id="lbl_userName">admin</span>
                    <span class="caret"></span>
                </button>

            </div>
            <!-- user dropdown ends -->

            <!-- <ul class="collapse navbar-collapse nav nav-pills navbar-nav top-menu">
              <li><a><span>菜单一</span></a></li>
              <li><a><span>菜单二</span></a></li>
              <li><a><span>菜单三</span></a></li>
              <li><a><span>{{topId}}</span></a></li>
              <li v-for="item in topMenus">
                <span>item.name</span>
              </li>
            </ul>-->
            <!-- top nav end -->
   </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      topId: this.$route.params.topId,
      topMenus: ''
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
    }
  }
}
</script>
