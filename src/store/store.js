import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      currentBook: {},
      loggedUser: null,
      blurEffect: null,
    };
  },
  mutations: {
    CURRENT_BOOK(state, book) {
      state.currentBook = book;
    },
    LOG_USER(state) {
      state.loggedUser = JSON.parse(localStorage.getItem("user"));
    },
    LOGOUT_USER(state) {
      localStorage.removeItem("user");
      state.loggedUser = null;
    },
    TOGGLE_BLUR(state, value) {
      state.blurEffect = value
    }
  },
  getters: {},
});

export default store;
