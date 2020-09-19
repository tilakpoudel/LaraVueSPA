require("./bootstrap");

//load vue js
window.Vue = require("vue");
import router from "./router";

import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import common from "./common";

Vue.mixin(common);

Vue.use(ViewUI);

Vue.component("main-app", require("./component/mainapp.vue").default);

const app = new Vue({
    el: "#app",
    name: "mainapp",
    router
});
