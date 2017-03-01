<template>
  <div class="navbar navbar-default1">
        <div class="navbar-inner">
            <a class="navbar-brand"><span style="color: white">首页导航菜单</span>
            </a>
            <!-- user dropdown starts -->

            <ul class="collapse navbar-collapse nav nav-pills navbar-nav top-menu">
              <li><a><span>菜单一</span></a></li>
              <li><a><span>菜单二</span></a></li>
              <li><a><span>菜单三</span></a></li>
              <li><a><span>菜单四</span></a></li>
            </ul>
            <!-- top nav end -->
   </div>
</template>

<script>
export default {
  name: 'Navbar1'
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
