<style lang="stylus" scoped rel="stylesheet/stylus">
    .recruit
        .container
            .recruit_bg
                background-image url("../images/recruit/bg.jpg")
                width 100%
                height auto
                background-size cover
                .join
                    width 70%
                    padding-top 137px
                    margin 0 auto
                    img
                        width 100%
        .notice
            .notice_list
                margin-top 10px
                .notice_ad
                    max-width 520px
                    margin 0 auto
                    h1
                        color rgb(47,150,197)
                        padding 25px 0
                    li
                        line-height 30px
                        color rgb(150,150,150)
            .guarantee
                width 660px
                text-align center
                color rgb(147,202,33)
                margin 30px auto
                p
                    line-height 40px
                span
                    color rgb(98,136,22)
                    &:not(:last-of-type)
                        padding-right 40px
</style>
<template>
    <div class="recruit">
        <div class="container">
            <div class="recruit_bg">
                <div class="join">
                    <img src="../images/recruit/bg_p.png">
                </div>
            </div>
        </div>
        <div class="notice">
            <div class="title_list">
                <p><img src="../images/recruit/t_r.png"></p>
                <h1>招贤纳士</h1>
            </div>
            <div class="notice_list">
                <div class="notice_ad">
                    <h1>HTML5移动app前端工程师（成都）</h1>
                    <ul>
                        <li>本职位主要进行HTML5移动应用的前端代码编写及界面设计。</li>
                        <li>1. 学历本科以上。计算机相关专业毕业优先。</li>
                        <li>2. 精通JAVASCRIPT，熟悉JS面向对象编程，熟悉Jquery或Angular优先。</li>
                        <li>3. 精通html dom 相关技术，精通css样式表。有Photoshop使用经验优先。</li>
                        <li>4. 熟悉Phonegap/Cordova优先。</li>
                        <li>5. 2年以上全职前端研发经验，有大型网站开发经验或移动应用开发经验者优先。</li>
                        <li>6. 有一定的美术鉴赏能力，一定的文字功底，对优秀产品有广泛的了解，有设计优秀产品的野心。</li>
                        <li>7. 有意愿为学校师生服务、有热情为大学校园提供最优质最有创意的产品，计算机相关专业毕业优先。</li>
                        <li>8. 具有良好的代码习惯及团队合作精神。谦虚好学，有责任心。</li>
                    </ul>
                </div>
                <div class="notice_ad">
                    <h1>JAVA软件工程师（北京）</h1>
                    <ul>
                        <li>本职位主要从事移动应用的服务端的研发工作及大客户数据调研和集成工作。后期可向售前技术支持发展。</li>
                        <li>1.本科及以上学历，计算机相关专业。</li>
                        <li>2.1年以上Java开发经验。</li>
                        <li>3.有一定的MySQL、Oracle数据库基础。</li>
                        <li>4.熟悉SpringMVC、Spring、Ibatis等框架优先。</li>
                        <li>5.熟悉Redis或memcache内存数据库者优先。</li>
                        <li>6.熟悉Tomcat、Weblogic等主流服务器。</li>
                        <li>7.熟悉应用服务器在windows、linux操作系统上的安装、调试、配置及使用。</li>
                        <li>8.性格外向、勇于挑战、服务意识好、有良好的团队精神。</li>
                        <li>9.有较强的沟通能力及文案能力，能够快速响应客户需求。</li>
                        <li>10.熟悉与第三方系统对接、有项目招投标经验者，优先考虑。</li>
                    </ul>
                </div>
            </div>
            <div class="guarantee">
                <p>
                    "我们能为您提供："
                    <br>
                    "六险一金，全额公积金呢！"
                    <br>
                    "项目提成、绩效奖金、年终奖金、优秀员工奖金拿到手软~"
                    <br>
                    "每月额外餐补、节假日慰问、旅游基金等等等"
                    <br>
                    "还有超长年假、免费体检、团队建设...各种有哦~！"
                    <br>
                    "是否羡慕别人家的公司？来看看你即将进入的公司吧，不要再感慨别人家的公司了~"
                </p>
            </div>
            <div class="guarantee">
                <span>HR:*女士</span>
                <span>招聘电话：023-12345678</span>
                <span>招聘邮箱：****@******.com</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        components:{

        }
    }
</script>
