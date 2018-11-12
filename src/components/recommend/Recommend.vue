<template>
    <div id="recommend" class="recommend">
        <div class="recommend-content">
            <div v-if="list.length" class="slider-wrapper">
                <div class="slider-content">
                    <v-slider>
                        <div v-for="item in list" >
                            <a :href="item.linkUrl">
                                <img :src="item.picUrl" class="img"/>
                            </a>
                        </div>
                    </v-slider>
                </div>
            </div>
            <div class="recommend-list">
                <h1 class="list-title">热门推荐歌曲</h1>
                <div>
                    <ul></ul>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    import {getRecommend} from '@/api/recommend'
    import {ERR_OK} from '@/api/config'
    import Slider from 'base/slider/slider'

    export default {
        data(){
            return{
                list:''
            }
        },
        methods:{
            _getRecommend(){
                getRecommend().then((res)=>{
                    if(res.code == ERR_OK){
                        this.list = res.data.slider
                        console.log( this.list)
                    } else {
                        console.log(1)
                    }
                })
            }
        },
        created:function (){
           this._getRecommend();
        },
        components:{
            'v-slider':Slider
        }
    }
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
    @import "../../common/stylus/varibale"
     .recommend
        position: fixed;
        width: 100%;
        top: 44px;
        bottom: 0;
        .recommend-content
            height: 100%
            overflow:hidden
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
            height: 65px;
            line-height: 65px;
            text-align: center;
            font-size: $font-size-medium;
            color: $color-theme;


</style>