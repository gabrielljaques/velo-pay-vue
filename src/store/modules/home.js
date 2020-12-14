import $ from 'jquery'

export default {
    namespaced: true,
    state: {
        homeData: {},
        bankData: [],
        contactsData: []
    },
    mutations: {
        setAplication(state, payload) {
            state.homeData = payload;
        },
        setBank(state, payload) {
            state.bankData = payload;
        },
        setContacts(state, payload) {
            state.contactsData = payload;
        }
    },
    getters: {
        getHome(state) {
            return state.homeData;
        },
        getBank(state) {
            return state.bankData;
        },
        getContacts(state) {
            return state.contactsData;
        }
    },
    actions: {
        aAplication({ commit }) {
            $.get(`https://velo.easingjob.com.br/sistema/api/aplicacao.php?token=${localStorage.getItem('token')}`, (response) => {
                const data = response[0];
                commit("setAplication", data);
            });
        },
        aBank(commit) {
            // get
            const data = [];
            commit("setBank", data);
        },
        aContacts({ commit }) {
            // get
            const data = [];
            commit("setContacts", data);

        }
    }
}