import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import firstPage from "./component/pages/firstPage";
import secondPage from "./component/pages/secondPage";
import hook from "./component/pages/basic/hooks.vue";
import methods from "./component/pages/basic/methods.vue";

//project pages
import home from "./component/pages/home.vue";
import tags from "./component/pages/tags.vue";
const routes = [
    //projects routes

    {
        path: "/",
        component: home,
        name: "homePage"
    },

    {
        path: "/tags",
        component: tags,
        name: "tagPage"
    },

    //basic tutorial routes
    {
        path: "/first-vue",
        component: firstPage,
        name: "home"
    },
    {
        path: "/second-vue",
        component: secondPage
    },
    // basic routes
    //vue hooks
    {
        path: "/hooks",
        component: hook
    },

    //vue basic routes
    {
        path: "/methods",
        component: methods
    }
];

export default new Router({
    mode: "history",
    routes
});
