<style lang="stylus" scoped rel="stylesheet/stylus">
    .contact
        .container
            margin-top 72px
            .contact_bg
                width 100%
                background-image url(../images/contact/bg.jpg)
                .title_list
                    margin 0 auto
                .wx
                    margin 70px 0 30px 0

                    .wx_img
                        width 150px
                        margin 0 auto
                    p
                        font-size 16px
                        line-height 20px
                        color white
                        margin-top 20px
                        text-align center
                ul
                    overflow hidden
                    width 580px
                    margin 0 auto
                    li
                        float left
                        margin-bottom 70px
                        &:not(:last-of-type)
                            margin-right 50px
                        div
                            margin 0 auto
                            width 70px
                        span
                            display block
                            text-align center
                            color white
                            line-height 20px
                            margin-top 20px
        .route
            background-image url("../images/contact/ct_map.png")
            background-repeat no-repeat
            background-position 100% 100%
            .route_a
                width 60%
                margin 0 auto
                .title_list
                    background-image url("../images/contact/line.png")
                    margin 0 auto
                ul
                    padding 150px 0 70px 0
                    pa
                    li
                        font-size 20px
                        margin-bottom 50px

                        img
                            width 70px
                        span
                            display inline-block
                            line-height 70px
                            vertical-align middle
                            margin-left 40px
                        i
                            display inline-block
                            height 70px
                            vertical-align middle




*
    margin 0

</style>
<template>
    <div class="contact">
        <div class="container">
            <div class="contact_bg">
                    <div class="title_list">
                        <p>
                            <img src="../images/contact/t_c.png">
                        </p>
                        <h1>联系我们</h1>
                    </div>
                    <div class="wx">
                        <div class="wx_img">
                            <img src="../images/contact/wx.png">
                        </div>
                        <p>打开微信，扫描二维码关注我们</p>
                    </div>
                    <ul>
                        <li v-for="item of list" >
                           <div class="contact_address"><img :src="item.src"></div>
                            <span>{{item.massage}}</span>
                        </li>
                    </ul>

            </div>
        </div>
        <div class="route">
            <div class="route_a">
                <div class="title_list">
                    <p>
                        <img src="../images/contact/t_r.png">
                    </p>
                    <h1>乘车路线</h1>
                </div>
                <ul>
                    <li v-for="item of travel" >
                        <i class="contact_travel"><img :src="item.src"></i>
                        <span>{{item.massage}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                list:[
                    {
                        src:require("../images/contact/bg_email.png"),
                        massage:"service@******.com"
                    },
                    {
                        src:require("../images/contact/bg_phone.png"),
                        massage:"400-000-0000"
                    },
                    {
                         src:require("../images/contact/bg_location.png"),
                         massage:"成都市***环球中心E2"
                    }
                ],
                travel:[
                    {
                        src:require("../images/contact/ct_bus.png"),
                        massage:"125路、171A路、171B路、240路到环球中心站下"
                    },
                    {
                        src:require("../images/contact/ct_subway.png"),
                        massage:"乘坐地铁一号线在锦城广场站下车，地铁A或B出口"
                    },
                    {
                         src:require("../images/contact/ct_search.png"),
                         massage:"搜索成都市***环球中心E2"
                    }
                ]
            }
        },
        components:{

        }
    }
</script>
