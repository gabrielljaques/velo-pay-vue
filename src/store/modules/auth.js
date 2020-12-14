import $ from 'jquery'
import router from "../../routers";

export default {
    namespaced: true,
    state: {
        conta: {},
        drawerData: {},
        qrcode: null
    },

    getters: {
        getConta(state) {
            return state.conta;
        },
        getQrCode(state) {
            return state.qrcode;
        }
    },

    actions: {
        logout({ commit }) {
            commit("logout");
        },
        login({ commit }, creden) {
            commit("logar", creden);
        },
        aConta({ commit }) {
            $.get(`https://velo.easingjob.com.br/sistema/api/conta.php?token=${localStorage.getItem('token')}`, (response) => {
                const data = response[0];
                const qrcode = `https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl={agencia:"${data.agencia}",conta:"${data.numero}",cpf:"${data.cpf}",nome:"${data['163121498_usuarios_nome']}"}`
                commit('setConta', data);
                commit('setQrCode', qrcode);
            });
        }
    },
    mutations: {
        logar(state, payload) {
            $.post('https://velo.easingjob.com.br/sistema/api/Login.php',
                {
                    "login": payload.login,
                    "senha": payload.senha
                }, (response) => {

                    if (response.msg !== undefined) {
                        alert(response.msg);
                        return false;
                    }

                    state.auth = response;
                    localStorage.setItem("token", response.token);
                    localStorage.setItem("dsUsuario", response.nome);
                    router.push('/home');
                });
        },

        logout() {
            localStorage.removeItem("token");
            localStorage.removeItem("dsUsuario");
            router.push('/login');
        },

        setConta(state, payload) {
            state.conta = payload;
        },

        setQrCode(state, payload) {
            state.qrcode = payload
        }
    }
}