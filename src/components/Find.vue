<template>
    <div id="find">
        <mt-header fixed title="固定在顶部" class="header "></mt-header>
        {{msg}}
        <v-footer :footer-id="selected"></v-footer>

    </div>
</template>
<script>
    import Footer from '@/components/footer/Footer'
    export default {
        data(){
            return{
                msg:'发现',
                selected:'2'

            }
        },
        components:{
            'v-footer':Footer
        }
    }
</script>