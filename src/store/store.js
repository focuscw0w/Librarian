import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            currentBook: "",
        }
    },
    mutations: {
        CURRENT_BOOK (state, bookName ) {
            state.currentBook = bookName
        }
    },
    getters: {

    }
})

export default store