import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      currentBook: {},
      loggedUser: {},
    };
  },
  mutations: {
    CURRENT_BOOK(state, book) {
      state.currentBook = book;
    },
    LOG_USER(state, user) {
      state.loggedUser = user;
    },
  },
  getters: {},
});

export default store;
