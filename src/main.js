import Vue from "vue";
import App from "./App";
import Router from "vue-router";
import Home from "./pages/Home";
import MobilSchool from "./pages/MobilSchool";
import Case from "./pages/Case";
import News from "./pages/News";
import Recruit from "./pages/Recruit";
import Contact from "./pages/Contact";
//将Vue的Router中间件注册给Vue框架
Vue.use(Router);
new Vue({
    el: '#app',
    router : new Router({
        mode : "history", //确保服务端开放了路径访问权限
        routes : [
            {
                path : "/",
                component : Home
            },
            {
                path : "/mobilSchool",
                component : MobilSchool
            },
            {
                path : "/case",
                component : Case
            },
            {
                path : "/news",
                component : News
            },
            {
                path : "/recruit",
                component : Recruit
            },
            {
                path : "/contact",
                component : Contact
            }
        ]
    }),
    render : h => h(App)
})
