import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      // currentBook: {},
      loggedUser: null,
      blurEffect: null,
      activeLogin: null,
      activeRegister: null,
      activeIntroduction: null,
    };
  },
  mutations: {
    // CURRENT_BOOK(state, book) {
    //   state.currentBook = book;
    // },
    LOG_USER(state) {
      state.loggedUser = JSON.parse(localStorage.getItem("user"));
    },
    LOGOUT_USER(state) {
      localStorage.removeItem("user");
      localStorage.removeItem("roles");
      localStorage.removeItem("token");
      state.loggedUser = null;
    },
    TOGGLE_BLUR(state, value) {
      state.blurEffect = value;
    },
    TOGGLE_LOGIN(state, value) {
      state.activeLogin = value;
      state.blurEffect = true;
    },
    TOGGLE_REGISTER(state, value) {
      state.activeRegister = value;
      state.blurEffect = true;
    },
    CLOSE_ALL(state) {
      state.activeLogin = false;
      state.activeRegister = false;
      state.blurEffect = false;
    },
  },
  getters: {},
});

export default store;
