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
      allLibraries: null,
      role: null,
      activeNotification: null,
    };
  },
  mutations: {
    // CURRENT_BOOK(state, book) {
    //   state.currentBook = book;
    // },
    LOG_USER(state, token) {
      state.loggedUser = token;

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
    SET_LIBRARIES(state,value) {
      state.allLibraries = value
    },
    TOGGLE_NOTIFICATION(state) {
      state.activeNotification = true;
      setTimeout(() => {
        state.activeNotification = false;
      }, 2000);
    },
    SET_ROLE(state, value) {
      state.role = value
    }
  },
  getters: {},
});

export default store;
