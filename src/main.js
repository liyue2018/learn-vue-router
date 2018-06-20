/*
* @Author: yongze-chen
* @Date:   2018-06-20 10:56:57
* @Last Modified by:   yongze-chen
* @Last Modified time: 2018-06-20 14:54:07
*/

import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import router from './router.js'


import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})