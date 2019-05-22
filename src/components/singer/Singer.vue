<template>
    <div id="singer">
        <div class="singer-list">
            <div class="">
                <div class="type-title">热门</div>
                <div class="singer-item">
                    <div class="item">
                        <img src="static/images/loading.png" alt=""  class="img">
                        <div class="name">11</div>
                    </div>
                    <div class="item">
                        <img src="static/images/loading.png" alt="" class="img">
                        <div class="name">11</div>
                    </div>
                    <div class="item">
                        <img src="static/images/loading.png" alt="" class="img">
                        <div class="name">11</div>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="type-title">A</div>
                <div class="singer-item">
                    <div class="item">
                        <img src="static/images/loading.png" alt=""  class="img">
                        <div class="name">11</div>
                    </div>
                    <div class="item">
                        <img src="static/images/loading.png" alt=""  class="img">
                        <div class="name">11</div>
                    </div>
                    <div class="item">
                        <img src="static/images/loading.png" alt=""  class="img">
                        <div class="name">11</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import {getSinger} from '@/api/singer'
    import {ERR_OK} from '@/api/config'

    const HOTNAME = '热门';
    const HOTID = -100;
    export default {
        data(){
            const HOST = '热门';
            return {
                singerList:[],
                tags:[],
                hot:{
                    'name':[HOTNAME],
                    'id':[HOTID]
                },
                singers:[]
            }
        },
        created(){
            this._initSinger();

        },
        // mounted(){
        //     setTimeout(()=>{
        //
        //     },2000)
        // },
        methods:{
            _initSinger(){
                getSinger().then((res) => {
                    if(res.code == ERR_OK){
                        this.singerList = res.singerList.data.singerlist;
                        this.tags = res.singerList.data.tags.index;
                        this._normalist();
                    }else {
                        console.log('error')
                    }
                })
            },
            _normalist(){
                this.tags.forEach((val) => {
                    if(val.name == HOTNAME || val.id == HOTID){
                        return;
                    }
                    this.hot.name.push(val.name);
                    this.hot.id.push(val.id);
                });
                console.log( this.singerList);
                console.log(this.tags );
                this.singerList.sort((val1,val2) => {
                    // console.log(val1.singer_name.localeCompare(val2.singer_name,'zh'));
                    // val.sort((par1,par2) => {
                    //     console.log(par1,par2);
                    // })
                });
                // console.log(this.singerList);
            }
        }
    }
</script>
<style lang="stylus">
    @import  "../../common/stylus/varibale"
    .singer-list
        display flex
        flex-direction column
        .type-title
            background-color $color-dialog-background
            font-size $font-size-medium
            color: $color-text
            padding 0.25rem 0 0.25rem 1rem
        .singer-item
            .item
                height: 3rem;
                display: flex;
                padding: 0.75rem
                /*border-bottom 0.01rem solid #666*/
                .img
                    height 2.5rem
                    width: 2.5rem;
                    -webkit-border-radius: 50%
                    -moz-border-radius: 50%
                    border-radius: 50%
                    margin: auto 0;
                .name
                    color #666
                    padding-left:1rem
                    line-height:3rem
                    font-size $font-size-medium-x

</style>