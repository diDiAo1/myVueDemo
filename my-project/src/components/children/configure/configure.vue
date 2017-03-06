<template>
   <div>
     <div class="col-sm-2 col-lg-2 tab-content left-menu">
       <sidebar></sidebar>
     </div>

    <div class="col-sm-10 col-lg-10">
      <router-view></router-view>
    </div>

   </div>
</template>

<script>
import Sidebar from 'components/sidebar/Sidebar'

export default {
  name: 'configure',
  components: {
      Sidebar
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
