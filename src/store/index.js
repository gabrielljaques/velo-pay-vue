import Vue from 'vue'
import Vuex from 'vuex'

// store modules
import auth from './modules/auth';
import home from './modules/home';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        messages: [],
        barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
        barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
        drawer: null,
    },
    mutations: {
        SET_BAR_IMAGE(state, payload) {
            state.barImage = payload
        },
        SET_DRAWER(state, payload) {
            state.drawer = payload
        },
    },
    actions: {

    },
    modules: {
        auth,
        home
    }
})

export default store;