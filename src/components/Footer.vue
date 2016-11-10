<style lang="stylus" scoped rel="stylesheet/stylus">
    .footer
        width 100%
        height 88px
        position absolute
        background-color rgb(233,235,238)
        border-top 1px solid rgb(201,201,201)
        .w1100
            color rgb(174,174,174)
            .footer-p
                margin 0 auto
                width: 740px
                p
                    margin-top 20px
                    display inline-block
                    text-align center
                    &:not(:last-of-type)
                        margin-right 70px

</style>
<template>
    <div class="footer">
        <div class="w1100">
            <div class="footer-p">
                <p>备案号：*********</p>
                <p>©2013-2016 版权所有</p>
                <p>成都****科技有限公司</p>
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
