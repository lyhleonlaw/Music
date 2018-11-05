<template>
  <div id="app">
    <!--<hr>-->
    <!--<router-view></router-view>-->
    <v-header></v-header>

    <v-footer></v-footer>
  </div>
</template>
<script>
  import Header from '@/components/header/Header'
  import Footer from '@/components/footer/Footer'

  export default {
      components:{
          'v-header':Header,
          'v-footer': Footer
      }
  }
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">

</style>
