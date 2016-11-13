<style lang="stylus" scoped rel="stylesheet/stylus">
    .bannert
        background-image url("../images/home/bg.png")
        background-size 100% 100%
        .banner
            margin 40px 0
            position relative
            .ban_mobile
                overflow hidden
                width 1500px
                margin 0 auto
                ul
                    position relative
                    padding 80px 0
                    width 4500px
                    height 740px
                    left -1500px
                    li
                        float left
                        width 300px
                        vertical-align top
                        transition all 0.5s
                        img
                            width 100%
                    .ban_min
                        transform scale(0.8)
                    .ban_normal
                        transform scale(1)
                    .ban_max
                        transform scale(1.2)
            .ban_page
                .left
                    position absolute
                    top 40%
                    left 5%
                    cursor pointer
                .right
                    position absolute
                    top 40%
                    left 95%
                    cursor pointer
    .runLeft
        animation runLeft 1s ease forwards
    @keyframes runLeft
        to
            transform translateX(300px)
    .runRight
        animation runRight 1s ease forwards
    @keyframes runRight
        to
            transform translateX(-300px)



    body
        width 100%


</style>
<template>
    <div class="bannert">
        <div class="title_list">
            <h2><img src="../images/home/t_c.png" alt=""></h2>
            <h1>经典案例</h1>
        </div>
        <div class="banner">
            <div class="ban_mobile">
            <ul :style="{'left':(-1500 + 300*num)+'px'}" :class="{expand:(num !=5) && (num != -5)}" ref="box">
                <li v-for="(item,index) of list" class="ban_min" :class="{ban_normal: index == (8-num) ||index ==(6-num),ban_max:index == (7 - num) }">
                    <a :href="item.href">
                        <img :src="item.src">
                    </a>
                </li>
            </ul>
        </div>
            <div class="ban_page">
                <div class="left" @click="leftPage">
                    <img src="../images/home/left.png" alt="">
                </div>
                <div class="right" @click="rightPage">
                    <img src="../images/home/right.png" alt="">
                </div>
            </div>
            <div class="ban_nav"></div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                show:0,
                num:0,
                list:[
                    {
                        href:"javascript:;",
                        src:require("../images/home/i1.png")
                    },
                    {
                        href:"javascript:;",
                        src:require("../images/home/i5.png")
                    },
                    {
                        href:"case#bjjt",
                        src:require("../images/home/i2.png")
                    },
                    {
                        href:"case#zgxq",
                        src:require("../images/home/i4.png")
                    },
                    {
                        href:"case#zycj",
                        src:require("../images/home/i3.png")
                    },
                    {
                        href:"javascript:;",
                        src:require("../images/home/i1.png")
                    },
                    {
                        href:"javascript:;",
                        src:require("../images/home/i5.png")
                    },
                    {
                        href:"case#bjjt",
                        src:require("../images/home/i2.png")
                    },
                    {
                        href:"case#zgxq",
                        src:require("../images/home/i4.png")
                    },
                    {
                        href:"case#zycj",
                        src:require("../images/home/i3.png")
                    },
                    {
                        href:"javascript:;",
                        src:require("../images/home/i1.png")
                    },
                    {
                        href:"javascript:;",
                        src:require("../images/home/i5.png")
                    },
                    {
                        href:"case#bjjt",
                        src:require("../images/home/i2.png")
                    },
                    {
                        href:"case#zgxq",
                        src:require("../images/home/i4.png")
                    },
                    {
                        href:"case#zycj",
                        src:require("../images/home/i3.png")
                    }
                ]
            }
        },
        components:{

        },
        mounted(){
            console.log(this);
            this.$refs.box.addEventListener('animationend',() => {
                console.log(this.num);
                if(this.$refs.box.classList.contains('runLeft')){
                    this.$refs.box.classList.remove('runLeft');
                    if(this.num === 4 ){
                        this.num = 0;
                    }else {
                        this.num = this.num + 1;
                    }
                }else{
                    this.$refs.box.classList.remove('runRight');
                    if(this.num === -4 ){
                        this.num = 0;
                    }else {
                        this.num = this.num - 1;
                    }
                }
            })
        },
        methods:{
            leftPage(){
                console.log(this);
                console.log(this.$refs.box);
                this.$refs.box.classList.add('runLeft');
            },
            rightPage(){
                this.$refs.box.classList.add('runRight');
            }
        }
    }
</script>
