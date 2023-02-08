import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      currentBook: {},
    };
  },
  mutations: {
    CURRENT_BOOK(state, book) {
      state.currentBook = book;
    },
  },
  getters: {},
});

export default store;
