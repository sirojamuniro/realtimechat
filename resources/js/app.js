require('./bootstrap');

window.Vue = require('vue').default;
import Echo from 'laravel-echo';
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
                axios.post('/send', {
                        message: this.message
                    })
                    .then(response => {
                        console.log(response);
                        this.message = ''
                    })
                    .catch(error => {
                        console.log(error.response);
                    });
            }
        }
    },
    mounted() {
        window.Echo.private(`chat`)
            .listen('ChatEvent', (e) => {
                this.chat.message.push(e.message);
                // console.log(e);
            });
    }
});