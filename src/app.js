import Vue from "vue";
import Button from './button'

Vue.component('one-button',Button)
new Vue({
    el: '#app',
    data: {
        message: 'hi'
    }
})
