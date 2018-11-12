<template>
  <div id="app">
    <!--<hr>-->
    <!--<router-view></router-view>-->
    <v-header></v-header>
    <!--<v-recommend></v-recommend>-->
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import Header from '@/components/header/Header'
  import Footer from '@/components/footer/Footer'
  import Recommend from '@/components/recommend/Recommend'
  export default {
      components:{
          'v-header':Header,
          'v-footer': Footer,
          'v-recommend' : Recommend
      }
  }
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">

</style>
