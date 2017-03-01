<template>
  <div>
    <navbar></navbar>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Navbar from 'components/Navbar'

export default {
  name: 'home',
  components: {
    Navbar
  }
}
</script>
