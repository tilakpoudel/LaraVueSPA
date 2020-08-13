require('./bootstrap');

//load vue js
window.Vue = require('vue');
import router from './router'

Vue.component('main-app', require('./component/mainapp.vue').default);

const app = new Vue({
    el: '#app',
    name: 'mainapp',
    router
});

