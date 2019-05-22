<template>
    <div id="recommend" class="recommend" >
        <v-scroll class="recommend-content" :data="songList" ref="scroll">
            <div>
                <div v-if="list.length" class="slider-wrapper">
                    <div class="slider-content">
                        <v-slider>
                            <div v-for="item in list" >
                                <a :href="item.linkUrl">
                                    <img :src="item.picUrl" class="img" @load="loadImg" />
                                </a>
                            </div>
                        </v-slider>
                    </div>
                </div>
                <div class="recommend-list">
                    <h1 class="list-title">热门</h1>
                    <div class="hot-music-list" ref="hotGroup">
                        <div v-for="v in songList" class="hot-list">
                            <div class="icon">
                                <img class="img"  v-lazy="v.picUrl">
                            </div>
                            <div class="sin-content">
                                <div class="flex">{{v.songListAuthor}}</div>
                                <div class="flex">{{v.songListDesc}}{{v.songListDesc}}</div>
                            </div>
                        </div>
                        <div v-for="v in songList" class="hot-list">
                            <div class="icon">
                                <img class="img"  v-lazy="v.picUrl"  >
                            </div>
                            <div class="sin-content">
                                <div class="flex">{{v.songListAuthor}}</div>
                                <div class="flex">{{v.songListDesc}}{{v.songListDesc}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-scroll>
    </div>
</template>
<script>
    import {getRecommend} from '@/api/recommend'
    import {ERR_OK} from '@/api/config'
    import Slider from 'base/slider/slider'
    import Scroll from 'base/scroll/scroll'
    export default {
        data(){
            return{
                list:[],
                songList:[],
            }
        },
        methods:{
            _getRecommend(){
                getRecommend().then((res)=>{
                    if(res.code == ERR_OK){
                        this.list = res.data.slider;
                        this.songList = res.data.songList;
                    } else {
                        console.log(1)
                    }
                })
            },
            loadImg(){
                if(!this.loadFalg){
                   this.$refs.scroll.refresh();
                   this.loadFalg = true;
                }
            }

        },
        created:function (){
            this._getRecommend();
        },
        mounted(){
            this.loadImg();
        },
        components:{
            'v-slider':Slider,
            'v-scroll':Scroll
        },

    }
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
    @import "../../common/stylus/varibale"
    @import "../../common/stylus/mixin"
     .recommend
        position: fixed;
        width: 100%;
        /*height: 100%;*/
        overflow: hidden;
        top: 44px;
        bottom:44px;
        .recommend-content
            height: 100%
            overflow:hidden
            position: relative;
            .slider-wrapper
                position: relative
                width: 100%
                height: 0
                padding-top: 40%
                overflow: hidden
                .slider-content
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
    .recommend-list
        pointer-events: auto;
    .list-title
        height:; 65px
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
    .hot-music-list
        display:flex;
        flex-direction :column;
        padding-left: 1rem;
        .hot-list
            list-style: none;
            display:flex;
            height 5rem
            border-bottom: 0.01rem solid #123456
            margin 0.5rem 0
            .icon
                width: 30%;
                .img
                    width :5rem
            .sin-content
                display:flex;
                flex-direction :column;
                padding-left 1rem
                font-size $font-size-medium
                color: #908382
                width: 70%;
                .flex
                    flex: 1
                    padding-top 0.75rem
                    text-overflow ellipsis
                    overflow hidden
                    white-space nowrap
</style>