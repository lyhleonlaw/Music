<template>
	<div id ='home' class="home">
        <mt-header fixed title="首页" class="header "></mt-header>
        <!--<mt-search   cancel-text="取消" placeholder="搜索" ></mt-search>-->
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="(item,index) in lists" :key="index" class="mint-swipe">
            	<a :href="item.href" >
            	   <img :src="item.url" class="img"/>
            	   <!--<span class="desc"></span>-->
                </a>
            </mt-swipe-item>
        </mt-swipe>
        <v-navbar></v-navbar>

        <v-footer :footer-id="selected"></v-footer>
    </div>

</template>


<script>
    import Navbar from '@/components/Navbar'
    import Footer from '@/components/footer/Footer'
//    import Header from '@/components/Header'
    import Mine from '@/components/Mine'
    import {getRecommend} from '@/api/recommend'
    import {ERR_OK} from '@/api/config'
	export default{
		data(){
			return{
				msg:'首页',
				items: [{
				    title: '你的名字',
				    href: 'http://google.com',
					url: 'http://localhost:8080/static/images/1.jpg'
				  }, {
				    title: '我的名字',
				    href: 'http://baidu.com',  
					url: 'http://localhost:8080/static/images/2.jpg'
				  }, {
                    title: '我的名字',
                    href: 'http://baidu.com',
                    url: 'http://localhost:8080/static/images/3.jpg'
                }],
                selected:"1",
                lists:'',
			}
		},
		methods:{
            getNow(){
                // GET /someUrl
                this.$http.get('http://www.nshop.com/index.php?s=apps/index/homePagePic').then(response => {
                    // get body data
                    this.lists = response.data.bgImage;
                }, response => {
                    // error callback
                });
            },
            _getRecommend(){
                getRecommend().then((res ) => {
                    if (res.code == ERR_OK) {
                        console.log(res.data)
                    } else {
                        console.log(1)
                    }
                })
            }
		},

        mounted:function () {
		    this._getRecommend();
//            this.getNow()
        },
        components: {
//            'v-footer': Footer,
//            'v-home': Home,
            'v-mine':Mine,
            'v-navbar':Navbar,
        }

	}
</script>
<style scoped>
    .header{
        background-color:#F3726D
    }
     img {
         width: 100%;
     }
    .mint-swipe {
        height: 218px;

    }

    .desc {
        font-weight: 600;
        opacity: .9;
        padding: 5px;
        height: 20px;
        line-height: 20px;
        width: 100%;
        color: #fff;
        background-color: gray;
        position: absolute;
        bottom: 0;
    }

    .home{
        background-color:#fbf5f5;
    }
    .footer{
        position: fixed;

    }
    .link{
        display: block;
        flex:1;
        text-decoration: none;
        color:#000;

    }
    .link img{
        width: 24px;
        height: 24px;
        margin: 0 auto 5px;
    }

    .mint-header.is-fixed{
        z-index: 99999;
    }



</style>