<style scoped lang="stylus" rel="stylesheet/stylus">
    .butn
        display block
        width 46px
        height @width
        background-image url(../images/mobilSchool/a_d.png)
        position absolute
        left 50%
        bottom -23px
    h2
        font-size 40px
        line-height 70px
        font-weight 400
    .mobilSchool
        .floor1
            position relative
            height 860px
            margin-top 70px
            background-image url(../images/mobilSchool/bg15.jpg)
            background-size cover
            background-position center

            color white
            .flor1_top
                margin-top 0
                height 755px
                width 100%
                position relative
                .title
                    width 276px
                    height 105px
                    position absolute
                    top 40%
                    left 30%
                    p
                        text-align right
                        line-height 35px
            .word
                position absolute
                bottom 0
                width 100%
                height 106px
                background-color rgba(220, 220, 220, .5)
                text-align center
                p
                    margin  45px 0
        .floor_bg1
            height 432px
            background-image url(../images/mobilSchool/b1.jpg)
            background-size cover
            background-attachment fixed
        .floor_bg2
            height 432px
            background-image url(../images/mobilSchool/b2.jpg)
            background-size cover
            background-attachment fixed
        .floor_bg3
            height 432px
            background-image url(../images/mobilSchool/b3.jpg)
            background-size cover
            background-attachment fixed
        .floor_bg4
            height 432px
            background-image url(../images/mobilSchool/b4.jpg)
            background-size cover
            background-attachment fixed
        .floor_bg5
            height 432px
            background-image url(../images/mobilSchool/b5.jpg)
            background-size cover
            background-attachment fixed

        .floor_box
            position relative
            height 602px
            width 100%
            background-color rgb(240, 242, 245)
            .w_at
                padding 126px 0
                height 350px
                margin 0 auto
                width 1100px
                .fb_title_lf
                    float left
                    padding 100px 189px 100px 0
                    color #0080BA

                    p
                        font-size 18px
                        line-height 35px
                .fb_title_rg
                    float left
                    padding 100px 0 100px 189px
                    color #0080BA

                    p
                        font-size 18px
                        line-height 35px
                .fb_img
                    float left
                    height 100%
                    position relative
                    .roll
                        position absolute
                        top -35px
                        left 35px
                        animation roll linear 10s infinite
                    @keyframes roll
                        0%
                            transform rotate(0deg)
                        100%
                            transform rotate(360deg)
                    .f3_img
                        margin-left 80px
                        margin-top -50px
                    .f3_roll
                        position absolute
                        top 55px
                        left 295px
                        animation f3_roll linear 60s infinite
                    @keyframes f3_roll
                        0%
                            transform rotate(0deg)
                            transform-origin 41px 108px
                        100%
                            transform rotate(360deg)
                            transform-origin 41px 108px
                    .f4_roll
                        position absolute
                        top -2px
                        left -5px
                        animation roll linear 10s infinite
                    .fb_img
                        width 324px
                        height 324px
            .fb_img
                .ban_img
                    height 324px
                    .tb_img
                        background-image url("../images/mobilSchool/m5.png")
                        width 324px
                        height 324px
                        margin-right 100px
                        vertical-align middle
                        float left
                    .tb_list
                        float left
                        width 150px
                        li
                            line-height 36px
                            font-size 20px
                            color rgb(0,128,186)
                            transition all 0.2s
                            cursor pointer
                            vertical-align middle
                            position relative
                            padding-left 25px

                            span
                                border-radius 50%
                                display inline-block
                                border 5px solid rgb(182,210,48)
                                position absolute
                                top 15px
                                left  -10px
                        .liChange
                             font-size 28px
        .floor_down
            height 602px
            width 100%
            background-color rgb(240, 242, 245)
            .w_at
                margin 0 auto
                width 1100px
                padding 120px 0
                color #0080BA
                .fd_title
                    float left
                    padding-right 114px
                    p
                        font-size 18px
                        line-height 35px
                    .logo
                        ul
                            li
                                float left
                                width 37px
                                margin 10px
                                &:first-of-type
                                    margin-left 0
                                span
                                    display block
                                    text-align center
                                    margin-bottom 10px
                .fd_img
                    width 688px
                    height 362px
                    float right
</style>
<template>
    <div class="mobilSchool">
        <div class="floor1">
            <div class="word">
                <p>梳理、提升、准备，我们为您提供一站式全生命周期的呵护</p>
            </div>
            <div class="flor1_top">
                <div class="title">
                    <h2>**移动校园</h2>
                    <p>——我们做的不仅仅是APP</p>
                </div>
                <div class="butn" @click="goOne"></div>
            </div>
        </div>
        <div class="floor_bg1"></div>
        <div class="floor_box">
            <div class="w_at">
                <div class="fb_title_lf">
                    <h2>**移动校园</h2>
                    <p>国内最有粘性的定制化移动校园</p>
                    <p>不只是APP，更是新的校园生态系统</p>
                </div>
                <div class="fb_img">
                    <img src="../images/mobilSchool/m3.png">
                    <div class="roll">
                        <img src="../images/mobilSchool/ct3_out.png">
                    </div>
                </div>
            </div>
            <div class="butn" @click="go(1)"></div>
        </div>
        <div class="floor_bg2"></div>
        <div class="floor_box">
            <div class="w_at">
                <div class="fb_img" @mouseover="banEnter" @mouseout="banOut">
                    <div class="ban_img" >
                        <div class="tb_img" :style="{'background-position-y':(-324*num)+'px'}">
                    </div>
                    <div class="tb_list">
                        <ul>
                            <li v-for="(item,index) of banList" :class="{liChange: index == num}" @click="liClick(index)">
                                <span></span>{{item.name}}
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="fb_title_rg">
                    <h2>九大应用群</h2>
                    <p>60多个独具粘性的独立应用</p>
                    <p>真正离不开的一站式校园服务</p>
                </div>
            </div>
            <div class="butn" @click="go(2)"></div>
        </div>
        <div class="floor_bg3"></div>
        <div class="floor_box">
            <div class="w_at">
                <div class="fb_title_lf">
                    <h2>完善的生态系统</h2>
                    <p>快速迭代，试错响应，师生参与</p>
                    <p>以互联网方式来做服务软件</p>
                </div>
                <div class="fb_img">
                    <img src="../images/mobilSchool/m7.png" class="f3_img">
                    <div class="f3_roll">
                        <img src="../images/mobilSchool/m7_c.png">
                    </div>
                </div>
            </div>
            <div class="butn" @click="go(3)"></div>
        </div>
        <div class="floor_bg4"></div>
        <div class="floor_box">
            <div class="w_at">
                <div class="fb_img">
                    <img src="../images/mobilSchool/m9_bg.png">
                    <div class="f4_roll">
                        <img src="../images/mobilSchool/m9.png">
                    </div>
                </div>
                <div class="fb_title_rg">
                    <h2>全平台
                    </h2>
                    <p>对于重复建设，其实我是拒绝的~
                    </p>
                    <p>更纯粹的跨平台技术
                    </p>
                </div>
            </div>
            <div class="butn" @click="goBo"></div>
        </div>
        <div class="floor_bg5"></div>
        <div class="floor_down">
            <div class="w_at">
                <div class="fd_title">
                    <h2>全平台</h2>
                    <p>一次建设，全面上线</p>
                    <div class="logo">
                        <ul>
                            <li><span>PC</span><img src="../images/mobilSchool/m11_win.png"></li>
                            <li><span>苹果</span><img src="../images/mobilSchool/m11_ios.png"></li>
                            <li><span>安卓</span><img src="../images/mobilSchool/m11_an.png"></li>
                            <li><span>微信</span><img src="../images/mobilSchool/m11_we.png"></li>
                        </ul>
                    </div>
                </div>
                <div class="fd_img">
                    <img src="../images/mobilSchool/m11.png">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    let t;
    const timer = function (callback) {
        t = setInterval(
            function () {
             callback();
            }
        ,2000);
    }
    export default{
        data(){
            return {
                num:0,
                banList: [
                    {
                        name: "基础服务",
                    },
                    {
                        name: "迎新系统",
                    },
                    {
                        name: "毕业就业",
                    },
                    {
                        name: "教学教务",
                    },
                    {
                        name: "科研教务",
                    },
                    {
                        name: "智慧物联",
                    },
                    {
                        name: "生活服务",
                    },
                    {
                        name: "家长校友",
                    },
                    {
                        name: "校园社区",
                    },
                ]
            }
        },
        methods:{
            liClick(index){
               clearInterval(t);
                this.num = index;
                console.log(index);
            },
            banEnter(){
                clearInterval(t);
            },
            banOut(){
                timer(()=>{
                    let _num =this.num;
                    this.num = _num+2 > this.banList.length ? 0: _num+1;
                })
            },
            goOne(){
                let _scrollTop = document.body.scrollTop;
                let timer = setInterval(function () {
                    if(_scrollTop < 1160){
                        _scrollTop += 10;
                        scrollTo(0, _scrollTop);
                        console.log(_scrollTop);
                    }else{
                        clearInterval(timer);
                    }
                },5);
            },
            go(num){
                let _scrollTop = document.body.scrollTop;
                let timer = setInterval(function(){
                    if(_scrollTop < 1170 + num *1021){
                        _scrollTop += 10;
                        scrollTo(0, _scrollTop);
                    }else{
                        clearInterval(timer);
                    }
                },5);
            },
            goBo(){
                let _scrollTop = document.body.scrollTop;
                let timer = setInterval(function () {
                    if(_scrollTop < 5150){
                        _scrollTop += 10;
                        scrollTo(0, _scrollTop);
                    }else{
                        clearInterval(timer);
                    }
                },5);
            },

        },
        mounted(){
            timer(()=>{
                let _num =this.num;
                this.num = _num+2 > this.banList.length ? 0: _num+1;
            })
        }

    }

</script>
