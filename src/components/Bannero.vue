<style lang="stylus" scoped rel="stylesheet/stylus">
.bannero
    position relative
    .banner
        height 850px
        position relative
        overflow hidden
        li
            background-size cover
        .ban_b3
            display none
            background url(../images/home/bg3.png) no-repeat center
            width 100%
            float right
            .ban_b3_pic
                float right
                margin-top 100px
                .ban_b3_video
                    position absolute
                    right 168px
                    top 138px
                    z-index 1
                    width 668px
                    height 451px
                    .play_icon
                        position absolute
                        left 0
                        top 0
                        z-index 2
                        width 100%
                        height 100%
                        background url("../images/home/play.png") no-repeat center
                        background-size 20%
                        cursor pointer
                        &:hover
                            background url("../images/home/play_hover.png") no-repeat center
                            background-size 20%
                    video
                        display block
                        object-fit fill
                        width 100%
                        height 100%
                img
                    display block
                    width 986px
            .ban_b3_d
                float left
                margin 500px 0 0 100px
                width 305px
                p
                    padding 8px 3px
                    border-radius 5px
                    img
                        display block
                        width 100%

        .ban_b2
            display none
            background url(../images/home/bg2.jpg) no-repeat center
            background-size cover
            width 100%
            height 100%
            position absolute

            .ban_b2_pic
                float left
                margin 120px 0 0 70px
                img
                    width 100%
            .ban_b2_d
                float right
                margin 200px 200px 0 0
                p
                    &:nth-of-type(2)
                        margin 10px 0
                    &:last-of-type
                        padding 8px 3px
                        background-color rgb(179,205,53)
                        border-radius 5px

        .ban_b1
            display none
            background url(../images/home/bg1.jpg) no-repeat center
            background-size cover
            width 100%
            height 100%
            position absolute
            .ban_b1_pic
                float right
                margin 100px 50px 0 0
            .ban_b1_d
                float left
                margin 500px 0 0 100px
                width 305px
                p
                    &:nth-of-type(2)
                        margin 10px 0
                    &:last-of-type
                        padding 8px 3px
                        background-color rgb(179,205,53)
                        border-radius 5px
        .ban_d
            display block
    .ban_b_dot
        position absolute
        top 95%
        width 100%
        z-index 2
        ul
            margin 0 auto
            width 55px
            overflow hidden
            li
                background no-repeat center center
                width 15px
                height 15px
                float left
                cursor pointer
                &:not(:first-of-type)
                    margin-left 5px
            .ban_b_dot_m
                background-image url("../images/home/b_dot.png")
            .ban_b_dot_s
                background-image url("../images/home/b_dot_s.png")
</style>
<template>
    <div class="bannero">
        <ul class="banner">
            <li class="ban_b3" :class="{ban_d:num == 1 }">
                <div class="ban_b3_pic">
                    <div class="ban_b3_video">
                        <video controls id="ban_video" @mouseenter="banEnter" @mouseout="banOut">
                            <source :src="video" type="video/mp4" >
                            您的浏览器不支持此种视频格式。
                        </video>
                        <div class="play_icon" @click="play"></div>
                    </div>
                    <img src="../images/home/ih3.png" alt="">
                </div>
                <div class="ban_b3_d">
                    <p><img src="../images/home/b3_d3.png" alt=""></p>
                </div>
            </li>
            <li class="ban_b1" :class="{ban_d:num == 2 }" >
                <div class="ban_b1_pic"><img src="../images/home/ih1.png" alt=""></div>
                <div class="ban_b1_d">
                    <p ><img src="../images/home/b1_d1.png" alt=""></p>
                    <p><img src="../images/home/b1_d2.png" alt=""></p>
                    <p><img src="../images/home/b1_d3.png" alt=""></p>
                </div>
            </li>
            <li class="ban_b2" :class="{ban_d:num == 3 }">
                <div class="ban_b2_pic"><img src="../images/home/ih2.png" alt=""></div>
                <div class="ban_b2_d">
                    <p><img src="../images/home/b2_d1.png" alt=""></p>
                    <p><img src="../images/home/b2_d2.png" alt=""></p>
                    <p><img src="../images/home/b2_d3.png" alt=""></p>
                </div>
            </li>
        </ul>
        <div class="ban_b_dot">
            <ul>
                <li class="ban_b_dot_m" v-for = "(item,index) of len" :class="{ban_b_dot_s:index== num-1}" @click="banChange(index)"></li>
            </ul>
        </div>
    </div>
</template>
<script>
    let t;
    const timer = function(callback){
        t = setInterval(function () {
            callback();
        }, 5000);
    }
    export default{
        data(){
            return{
                len:3,
                num:1,
                video:require("../images/home/v123.mp4"),
            }
        },
        methods:{
            play(e){
                let oVideo = this.$el.querySelector("#ban_video");
                e.target.style.display="none";
                oVideo.play();
            },
            banChange(index){
                clearInterval(t);
                this.num = index +1;
                timer(() => {
                    let _num = this.num;
                this.num = _num +1 >this.len ? 1: _num+1;
            }
            );
            },
            banEnter(){
                clearInterval(t);
            },
            banOut(){
                timer(() => {
                    let _num = this.num;
                this.num = _num +1 >this.len ? 1: _num+1;
            }
            )
            }
        },
        mounted(){
            timer(() => {
                let _num = this.num;
            this.num = _num +1 >this.len ? 1: _num+1;
        }
        );
        }

    }
</script>
