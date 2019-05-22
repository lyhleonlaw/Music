<template>
        <div id="scroll" ref="scroll">
            <slot></slot>
        </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        data(){
            return{

            }
        },
        props:{
            probeType:{
                type:Number,
                default:1,
            },
            click:{
                type:Boolean,
                default:true
            },
            data:{
                type:Array,
                default:null
            }

        },
        mounted(){
            setTimeout(() => {
                this._initScroll();
            },20)
        },
        methods:{
            _initScroll(){
                this.scroll = new BScroll(this.$refs.scroll,{
                    // scrollY: true,
                    momentum:false,
                    click:this.click,
                    probeType:this.probeType,
                    mouseWheel: true

                });
                console.log(this.scroll)
            },
            refresh(){
                this.scroll && this.scroll.refresh();
            },
            enable(){
                this.scroll && this.scroll.enable();
            },
            disable(){
                this.scroll && this.scroll.disable();
            }
        },
        watch:{
            data(){
                this.refresh();
            }
        }
    }
</script>
