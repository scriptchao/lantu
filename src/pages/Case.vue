<style lang="stylus" scoped rel="stylesheet/stylus">
    .case
        .container
            .b
                height 810px
                background-size cover
                background-image url("../images/case/bg.jpg")
                .b_d
                    width 400px
                    position relative
                    top 350px
                    left 100px
                    p
                        &:nth-of-type(1)
                            margin-bottom 20px
                        &:nth-of-type(2)
                            margin-bottom 10px
        .c_cases
            .c_cases_list
                max-width 860px
                margin 0 auto
                h1
                    font-size 20px
                    font-weight 400
                    color rgb(100,100,100)
                    padding 100px 0 50px 0
                p
                    color rgb(150,150,150)
                    line-height 30px
                    text-indent: 2em
                .c_cases_img
                    margin 50px auto
                    max-width 507px

</style>
<template>
    <div class="case">
        <div class="container">
            <div class="b">
                <div class="b_d">
                    <p v-for="item of list"><img :src="item.src"></p>
                </div>
            </div>
        </div>
        <div class="c_cases">
            <div class="title_list">
                <p>
                    <img src="../images/case/t_c.png">
                </p>
                <h1>经典案例</h1>
            </div>
            <div class="c_cases_list">
                <div class="bjTraffic" id="bjjt">
                    <h1>
                        北京交通大学
                    </h1>
                    <p>
                        交大移动门户目前是我们建设最全的案例，包括50多个涉及工作、学习、生活的应用模块，每天使用人次上万。有完善的数据中心和陆续在建的各系统接口，并有多位在校生协助开发和完善，具有多套移动界面和子系统，还有物联应用部署。老师学生互动积极，反馈踊跃，对信息中心评价极高。
                    </p>
                    <div class="c_cases_img">
                        <img src="../images/case/ct1.jpg">
                    </div>
                </div>
                <div class="ctFinance" id="zycj">
                    <h1>
                        中央财经大学
                    </h1>
                    <p>
                        中央财经大学作为财经类著名院校，我们为其搭建了全面的校园服务功能。团 队根据学校计划，在极短时间内完成了APP上线，同时也满足了较高的信息安全需求。此外，我们还为中财专门策划上线运营活动，并在后期的维护运营中增强了师生与移动门户的使用黏性，保持了中财在同类学校信息化建设中的前沿地位。
                    </p>
                    <div class="c_cases_img">
                        <img src="../images/case/ct2.jpg">
                    </div>
                </div>
                <div class="cnOpera" id="zgxq">
                    <h1>
                        中国戏曲学院
                    </h1>
                    <p>
                        中国戏曲学院作为艺术教学类著名院校，为师生策划了高度定制的APP服务，尤其是在场馆预定、视频类应用上做出了多种创新，发挥了学校的专业优势和资源优势，在弘扬戏曲文化、培养国粹人才方面做出了新的尝试。
                    </p>
                    <div class="c_cases_img">
                        <img src="../images/case/ct3.jpg">
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
                list:[
                    {
                        src:require("../images/case/b_d1.png")
                    },
                    {
                        src:require("../images/case/b_d2.png")
                    },
                    {
                        src:require("../images/case/b_d3.png")
                    }
                ]
            }
        },
        components:{

        }
    }
</script>
