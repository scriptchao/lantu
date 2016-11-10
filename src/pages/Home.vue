<style lang="stylus" scoped rel="stylesheet/stylus">
    .home
        .container
            .title_list
                &:after
                    clear both
            .partner
                overflow hidden
                .rd_list
                    margin 0 auto
                    padding 100px 0
                    ul
                        margin 0 auto
                        width 900px
                        overflow hidden
                        li
                            float left
                            margin 0 58px

</style>
<template>
    <div class="home">
        <div class="container">
            <bannero></bannero>
            <bannert></bannert>
            <div class="partner">
                <div class="title_list">
                    <h2><img src="../images/home/rd.png" alt=""></h2>
                    <h1>研发伙伴</h1>
                </div>
                <div class="rd_list">
                    <ul>
                        <li v-for="(item,index) of list" ><a :href="item.href"><img :src="item.src" ></a></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
</template>
<script>
    import Bannero from "../components/Bannero";
    import Bannert from "../components/Bannert";
    export default{
        data(){
            return{
                list:[
                    {
                        href:"JavaScript:;",
                        src:require("../images/home/rd1.jpg")
                    },
                    {
                        href:"JavaScript:;",
                        src:require("../images/home/rd2.jpg")
                    },
                    {
                        href:"JavaScript:;",
                        src:require("../images/home/rd3.jpg")
                    }
                ]
            }
        },
        components:{
            Bannero,
            Bannert
        },
    }
    mounted:{

    }
</script>
