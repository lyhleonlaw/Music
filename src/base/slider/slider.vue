<template>
    <div id="slider" class="slider" ref="slider">
        <div class="slider-group" ref="sliderGroup">
            <slot></slot>
        </div>
        <div class="dots">
            <span class="dot" v-for="(item,index) in dots" :class="{active:(index==currPage) }"></span>
        </div>
    </div>
</template>
<script>
    import {addClass} from '@/common/js/dom';
    import BScroll from 'better-scroll'
    export default {
       data(){
           return{
                dots:[],
                currPage:0
           }
       },
       props:{
           loop:{
               type:Boolean,
               default:true
           },
           autoPlay:{
               type:Boolean,
               default:true
           },
           setTime:{
               type:Number,
               default:4000
           },
       },
       mounted(){
           setTimeout(() => {
               this._sliderSetWidth();
               this._initDots();
               this._initSlider();
               this._initPlay();
               if(this.autoPlay) {
                   this._play();
               }
           },20);
           window.addEventListener('resize', () =>{
              this. _sliderSetWidth(true);
              this.slider.refresh();
           });
       },
       methods:{
           _sliderSetWidth(isResize){
               this.children = this.$refs.sliderGroup.children;
                let sliderWidth = this.$refs.slider.clientWidth;
                let width = 0;
                for (let i = 0; i <this.children.length; i++) {
                    let child = this.children[i];
                    addClass(child,'slider-item');
                    child.style.width = sliderWidth +'px';
                    width += sliderWidth;
                }
               if (this.loop && !isResize){
                    width += 2*sliderWidth;
               }
               this.$refs.sliderGroup.style.width = width +'px';

           },
           _initSlider(){

               this.slider = new BScroll(this.$refs.slider,{
                   scrollY: false,
                   scrollX: true,
                   momentum:false,
                   snap:{
                       loop:this.loop,
                       threshold:0.3,
                       speed:400
                   },
               });

               this.slider.on('scrollEnd',()=>{
                   let newCurrPage = this.slider.getCurrentPage().pageX;
                   this.currPage = newCurrPage;
                   if(this.autoPlay){
                       clearTimeout(this.time);
                       this._play();

                   }
               })

           },
           _initDots(){
               this.dots = new Array(this.children.length);
           },
           _initPlay(){
               this.slider.auto_play = this.autoPlay;
           },
           _play(){
               let pageIndex = this.currPage+1;
               this.time = setTimeout(() => {
                   if (pageIndex == this.dots.length){
                       this.currPage = 0;
                       pageIndex = 0;
                   }
                   this.slider.goToPage(pageIndex);


               },this.setTime);

           }


       }
   }
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
    .slider
        min-height: 1px
        .slider-group
            position: relative;
            overflow: hidden;
            white-space: nowrap;
            .slider-item
                float: left;
                box-sizing: border-box;
                overflow: hidden;
                text-align: center;
                a
                    display: block;
                    width: 100%;
                    overflow: hidden;
                    text-decoration: none;
                .img
                    display: block;
                    width: 100%;
        .dots
            position: absolute;
            right: 0;
            left: 0;
            bottom: 12px;
            transform: translateZ(1px);
            text-align: center;
            font-size: 0;
            /*top: 130px;*/

            .dot
                display: inline-block;
                margin: 0 4px;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: hsla(0,0%,100%,.5);
            .active
                width: 20px;
                border-radius: 5px;
                background: hsla(0,0%,100%,0.8);


</style>