<template>
    <div id="mine">
        <mt-header fixed title="我的" class="header " size="15"></mt-header>
        <div class="top-user">
            <div class="logo">
                <!--<img  src="" width="80" height="80">-->

            </div>
            <div class="user-text">
                <p>赵完松</p>
                <p>130*****123</p>
            </div>
            <!--<div  class="user-text">-->
            <!--</div>-->
        </div>
        <div class="page-cell">
            <mt-cell title="个人信息" is-link to="/header" >
                <img slot="icon" src="http://localhost:8080/static/icon/people.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="我的订单"  is-link to="/home">
                <img slot="icon" src="http://localhost:8080/static/icon/order.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="我的订单"  is-link to="/home">
                <img slot="icon" src="http://localhost:8080/static/icon/order.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="我的订单"  is-link to="/home">
                <img slot="icon" src="http://localhost:8080/static/icon/order.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="我的订单"  is-link to="/home">
                <img slot="icon" src="http://localhost:8080/static/icon/order.png" width="24" height="24">
            </mt-cell>

            <mt-button size="large" class="lar-btn">退出登录</mt-button>
        <v-footer :footer-id="selected"></v-footer>

        </div>
    </div>
</template>
<script>
    import Footer from '@/components/footer/Footer'
    export default {
        data(){
            return{
                msg:'个人中心',
                nam:'1',
                selected:'3'
            }
        },
        components:{
            'v-footer':Footer
        }
    }
</script>
<style>
    .page-cell{
        position: absolute;
        left: 0;
        right: 0;
        top: 200px
    }
    .mine-link{
        /*display: block;*/
        text-decoration: none;
        text-align: left;
    }
    .mint-cell{
        text-align: left;
    }
    .lar-btn{
        margin-top:3rem;
    }

    .user{
        padding: 5px;
        /*height: 4rem;*/
        /*position: relative;*/
        /*top:0;*/
    }
    .top-user{
        top: 40px;
        right: 0;
        left: 0;
        position: absolute;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #26a2ff;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #fff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        font-size: 14px;
        height: 140px;
        line-height: 1;
        padding: 0 10px;
        text-align: center;
        white-space: nowrap;
    }
    .top-user .logo{
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 70px;
        width: 70px;
        border-radius: 50%;
        background-color: #fff;
        background-image:url("http://localhost:8080/static/icon/people.png");
        margin: 0.5rem;


    }
    .top-user .user-text{
        text-align: left;
        margin-left: 1rem;
        font-size:15px;
    }
</style>