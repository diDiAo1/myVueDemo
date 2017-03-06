<template>
   <div>
     <div class="electronic-body" id="electronic-bg">
       <h1>{{msg}}</h1>
       <h2>{{author}}</h2>
     </div>
   </div>
</template>

<script>

export default {
  name: 'regionalManage',
  data () {
    return {
      msg: '系统配置页面',
    }
  },
  created(){
      this.setCurrentPath();
  },
  computed: {
    author () {
      return this.$store.state.author
    }
  },
    methods: {
      setCurrentPath: function () {
        this.$store.state.currentPath = 'start.systemStart.regionalManage'
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
