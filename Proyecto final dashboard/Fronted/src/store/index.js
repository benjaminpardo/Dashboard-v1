import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: JSON.parse(localStorage.getItem("user")),
        isLoading: true,
        snackbar: {
            isOpen: false,
            text: "",
            color: "success"
        }
    },
    getters: {
        userName(state) {
            return `${state.user.firstName} ${state.user.lastName}`
        },
        isAuth(state) {
            return state.user !== null;
        },
        isAdmin(state) {
            return state.user.role === 'Admin';
        },
        userID(state) {
            return `${state.user._id} `
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setSnack(state, { isOpen, text, color }) {
            state.snackbar.isOpen = isOpen;
            state.snackbar.text = text;
            state.snackbar.color = color;
        },
        setLoading(state, payload) {
            state.isLoading = payload;
        }
    },
    actions: {},
})

export default store