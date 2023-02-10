import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      currentBook: {},
<<<<<<< HEAD
=======
      loggedUser: {},
>>>>>>> fdfbd7a2b7ba4fa63e2f1b5839ef95380464c550
    };
  },
  mutations: {
    CURRENT_BOOK(state, book) {
      state.currentBook = book;
    },
<<<<<<< HEAD
=======
    LOG_USER(state, user) {
      state.loggedUser = user;
    },
>>>>>>> fdfbd7a2b7ba4fa63e2f1b5839ef95380464c550
  },
  getters: {},
});

export default store;
