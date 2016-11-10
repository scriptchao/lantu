<style lang="stylus" scoped rel="stylesheet/stylus">
    .news
        .container
            .news_bg
                background-image url("../images/news/bg.jpg")
                background-size cover
                height 650px
                position relative
                .news_bg_p1
                    position absolute
                    top 50%
                    left 10%
                .news_bg_p2
                    margin 0 auto
                    width 800px
                    padding-top 260px
                .news_bg_p3
                    position absolute
                    top 40%
                    right 10%
                .news_bg_p4
                    position absolute
                    bottom 10%
                    right 5%
        .news_main
            .title_list
                margin 0 auto
            .article_list
                position relative
                margin 30px auto
                width 45%
                min-width 850px
                padding-bottom 40px
                .page_c
                    position absolute
                    bottom 0
                    right 0
                    height 22px
                    width 500px
                    .page_c_r
                        float right
                        height 22px
                        .pg_num
                            float left
                        a
                            display block
                            float left
                            margin 0 5px
                            height 22px
                            padding 0 8px
                            font-size 12px
                            line-height 22px
                            border-radius 5px
                            background black
                            color rgb(240,240,240)
                            cursor pointer
                .pg_l_m
                    display none
                    padding 25px 0
                    overflow hidden
                    .pg_l_img
                        float left
                        img
                            width 192px
                            height 118px
                    .pg_l_words
                        float left
                        margin-left 50px
                        width 600px
                        h1
                            line-height 30px
                        time
                            font-weight 600
                            line-height 30px
                            color rgb(200,200,200)
                        p
                            color rgb(150,150,150)
                            line-height 30px
                            text-indent 2em

                .pg_1_s
                    display block
    *
        margin 0
</style>
<template>
    <div class="news">
        <div class="container">
            <div class="news_bg">
                <div class="news_bg_p1"><img src="../images/news/bg_p1.png" alt=""></div>
                <div class="news_bg_p2"><img src="../images/news/bg_p2.png" alt=""></div>
                <div class="news_bg_p3"><img src="../images/news/bg_p3.png" alt=""></div>
                <div class="news_bg_p4"><img src="../images/news/bg_p4.png" alt=""></div>
            </div>
        </div>
        <div class="news_main">
            <div class="title_list">
                <p>
                    <img src="../images/news/t_n.png">
                </p>
                <h1>经典案例</h1>
            </div>
            <div class="article_list">
                <div class="page_c">
                    <div class="page_c_r">
                    <a class="first_pg" @click="firstPg">首页</a>
                    <a class="pre_pg" @click="prePg">上一页</a>
                    <div class="pg_num">
                        <a v-for="num of Math.ceil(list.length/4)" @click="flip">
                            {{num}}
                        </a>
                    </div>
                    <a class="next_pg" @click="nextPg">下一页</a>
                    <a class="last_pg" @click="lastPg">末页</a>
                    </div>
                </div>
                <div class="pg_l_m" v-for="(item,index) of list" :class="{pg_1_s:  (currentIndex-1)*4 <= index && index < currentIndex*4 }">
                    <div class="pg_l_img">
                        <img :src="item.src">
                    </div>
                    <div class="pg_l_words" >
                        <h1>
                            <a :href="item.href">
                                {{item.headlines}}
                            </a>
                        </h1>
                        <time>{{item.time}}</time>
                        <p>{{item.words}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                currentIndex:1,
                list:[
                    {
                        headlines:"**科技，运用企业号提供智慧校园解决方案",
                        time:"2016.08.22",
                        words:"据了解，由**科技筹建的北建移动门户微信企业号2.5.9已于近日正式上线。该企业号是基于智慧校园推出的微信第三方应用。根据学生反映，自北建移动门户上线以来，全校部分师生已经关注并绑定了此微信企业号...",
                         src:require("../images/news/ct8.png"),
                         href:"javascript:;"
                    },
                    {
                        headlines:"**出品 | 中财移动门户上线！",
                        time:"2016.05.30",
                        words:"中财掌上校园正式开学了！**科技承建的中央财经大学官方移动门户正式上线，现已登陆苹果、安卓各大应用市场，在校师生可第一时间前往下载使用...",
                         src:require("../images/news/ct7.png"),
                         href:"javascript:;"
                    },
                    {
                        headlines:"**科技出品：中青政“移动校园”上线",
                        time:"2016.05.26",
                        words:"昨日，中国青年政治学院“移动校园”正式上线，成为中青政“智慧校园”发展又一里程碑。同时，**科技“移动智慧校园”家族正式增添一名新成员...",
                         src:require("../images/news/ct6.png"),
                         href:"javascript:;"
                    },
                    {
                        headlines:"**科技，移动校园门户的黑马",
                        time:"2016.01.29",
                        words:"在15年三月十二届全国人大三次会议上，李克强总理在政府工作报告中首次提出“互联网+”行动计划。7月，经李克强总理签批，国务院日前印发《关于积极推进...",
                         src:require("../images/news/ct1.jpg"),
                         href:"javascript:;"
                    },
                    {
                        headlines:"**科技:搭建互联网+校园移动门户平台",
                        time:"2016.01.21",
                        words:"2016年1月8日，河南省教育科研网2016年工作会议在新乡医学院成功召开。本次会议以“‘互联网+’时代网络中心的定位与发展”为主题，由河南省教育科研网主办...",
                         src:require("../images/news/ct2.jpg"),
                         href:"javascript:;"
                    },
                    {
                        headlines:"我叫**科技，这是我的年终报告",
                        time:"2016.01.15",
                        words:"伴随着岁月急匆匆的步履，2015年已进入倒计时。回首这一年，发生了好多大事儿，抗战70周年93大阅兵、北京申冬奥成功、世界那么大我想去看看、屠呦呦...",
                         src:require("../images/news/ct3.jpg"),
                         href:"javascript:;"
                    },
                    {
                        headlines:"**科技参加中国高教学会教育信息化分会理事会议",
                        time:"2015.11.24",
                        words:"11月20日，中国高等教育学会教育信息化分会理事会议与江苏省教育信息化10周年年会在江苏南京召开。会上，**科技随新开普电子作为理事单位代表，与江苏省...",
                         src:require("../images/news/ct5.jpg"),
                         href:"javascript:;"
                    }
                ]
            }
        },
        methods:{
            flip(e){
               this.currentIndex = e.target.innerText;
                console.log(this.currentIndex)
            },
            prePg(){
               if(this.currentIndex > 1){
                   this.currentIndex --
               }
            },
            nextPg(){
                let len = Math.ceil(this.list.length/4);
                if(this.currentIndex < len){
                    this.currentIndex ++
                }
            },
            firstPg(){
                this.currentIndex = 1
            },
            lastPg(){
                let len = Math.ceil(this.list.length/4);
                this.currentIndex = len
            }
        },
    }



</script>
