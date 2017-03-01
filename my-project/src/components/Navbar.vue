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
            <!-- top nav starts
             <ul class="dropdown-menu">
                                 <li><a id="updatePassword">修改密码</a></li>
                                 <li class="divider"></li>
                                 <li><a onclick="logout()">注销登录</a></li>
                             </ul>
             -->
            <ul class="collapse navbar-collapse nav nav-pills navbar-nav top-menu">
            <li>

            </li>
            </ul>
            <!-- top nav end -->
   </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>
