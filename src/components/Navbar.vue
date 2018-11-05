<style lang="css" scoped>
    .tab-container{
        text-align: left;
        margin: 10px;
        z-index: 0;
    }
    .mint-tab-container-wrap .mint-cell{
        margin-top:10px !important;
        border-radius: 5px;
    }

</style>
<template>
    <div id="navbar">
        <mt-navbar class="page-part" v-model="selected" >
            <mt-tab-item id="1" >选项一</mt-tab-item>
            <mt-tab-item id="2">选项二</mt-tab-item>
            <mt-tab-item id="3" >选项三</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected" class="tab-container">
            <mt-tab-container-item id="1">
                <mt-cell v-for="n in 10" :title="'内容 ' + n" :key ="n"></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 4" :title="'测试 ' + n" :key ="n"></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 6" :title="'选项 ' + n" :key ="n"></mt-cell>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    /**
     * mt-navbar
     * @module components/navbar
     * @desc 顶部 tab，依赖 tab-item
     *
     * @param {boolean} [fixed=false] - 固定底部
     * @param {*} selected - 返回 item component 传入的 value
     *
     * @example
     * <mt-navbar :selected.sync="selected">
     *   <mt-tab-item value="订单">
     *     <span slot="label">订单</span>
     *   </mt-tab-item>
     * </mt-navbar>
     *
     * <mt-navbar :selected.sync="selected" fixed>
     *   <mt-tab-item :value="['传入数组', '也是可以的']">
     *     <span slot="label">订单</span>
     *   </mt-tab-item>
     * </mt-navbar>
     *
     */
    export default {
        data(){
            return {
                selected:'1',
                content1:10
            }
        },
        methods:{

        }
//        name: 'mt-navbar',
//
//        props: {
//            fixed: false,
//            selected: '*',
//            value: {}
//        }
    };
</script>


