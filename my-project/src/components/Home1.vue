<template>
  <div>
    <navbar1></navbar1>
    <div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Navbar1 from 'components/Navbar1'

export default {
  name: 'home1',
  components: {
    Navbar1
  }
}
</script>
