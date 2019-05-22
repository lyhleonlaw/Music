<template>
    <div class="footer" >
        <router-link tag="div" to="/recommend" class="item-tab">
            <span class="tab-link">1</span>
        </router-link>
        <router-link tag="div" to="/singer" class="item-tab">
            <span class="tab-link">2</span>
        </router-link>
        <router-link tag="div" to="/rank" class="item-tab">
            <span class="tab-link">3</span>
        </router-link>
        <router-link tag="div" to="/search" class="item-tab">
            <span class="tab-link">4</span>
        </router-link>
    </div>
</template>
<script>
//    import Header from '@/components/Header'
    export default {
        data(){
            return{

                selected:this.footerId,
                lists:[
                    {
                        'id':"1",
                        'title':'首页',
                        'url':'http://localhost:8080/static/icon/homepage_1.png',
                        "path":'/home',
                    },
                    {
                        'id':"2",
                        'title':'发现',
                        'url':'http://localhost:8080/static/icon/find.png',
                        "path":'/find',
                    },
                    {
                        'id':"3",
                        'title':'我的',
                        'url':'http://localhost:8080/static/icon/user.png',
                        "path":'/mine',
                    }
                ]
            }
        },
        components:{
//            'v-header':Header
        },
        props:['footer-id'],

    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/varibale"
    .footer
        position : fixed
        display :flex
        display: -webkit-flex
        bottom : 0
        width: 100%
        height : 3rem
        background-color:#31384f
        line-height :3rem

        font-size :$font-size-medium
        .item-tab
            display :inline-block
            flex:1
            text-align :center
            .tab-link
                padding-bottom: 5px
                color: $color-text-l
            &.router-link-active
                .tab-link
                    color:$color-theme
                    border-bottom: 0.02rem solid $color-theme


</style>