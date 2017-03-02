<template>
    <div class="sidebar-nav tab-pane fade in" style="display:block">
      <div class="nav-canvas">
        <ul class="nav nav-pills nav-stacked main-menu">
          <li class="nav-header">菜单列表</li>
          <li>
            <a data-toggle="pill">
              <i class="glyphicon glyphicon-user"></i>
              <span>菜单一</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'sidebar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
