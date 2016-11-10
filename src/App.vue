<template>
    <div id="app">
        <my-header></my-header>
        <router-view></router-view>
        <my-footer></my-footer>
    </div>
</template>

<script>
    import MyHeader from "./components/Header";
	import MyFooter from "./components/Footer";
	export default {
		components : {
			MyHeader,
			MyFooter

		}
	};
</script>

<style lang="stylus" rel="stylesheet/stylus">
    *
        margin 0
        padding 0
        line-height 1
        font-family Microsoft Yahei
        box-sizing border-box
    a
        text-decoration none
        color inherit
    ul
    ol
        list-style none
    em
    i
        font-style normal
    h1
        font-size 20px
        font-weight 400
    .w1100
        margin 0 auto
        width 1100px
    .container
        position relative
        overflow hidden
        width 100%
        margin-top 72px
    .title_list
        background-image url("./images/currency/line.png")
        background-position bottom
        line-height 40px
        max-width 520px
        padding 30px 0
        text-align center
        background-repeat no-repeat
        margin 0 auto
        p
            line-height inherit
            img
                width 50%
        h1
            font-size 20px
            font-weight 400
            line-height inherit
</style>
