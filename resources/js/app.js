require('./bootstrap');

window.Vue = require('vue').default;
import Vue from 'vue'
import VuechatScroll from 'vue-chat-scroll'
Vue.use(VuechatScroll)

Vue.component('message', require('./components/message.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    data: {
        message: '',
        chat: {
            message: []
        }
    },
    methods: {
        send() {
            if (this.message.length != 0) {
                this.chat.message.push(this.message);
                this.message = ''
            }
        }
    }
});