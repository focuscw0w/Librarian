<template>
  <article class="search-article">
    <div class="flex-container">
      <div class="search-container flex-container">
        <img
          src="../assets/icons/bx-search-alt-2.svg"
          alt="search icon"
          class="search-icon"
        />
        <input
          type="text"
          id="search-book"
          name="search"
          size="25"
          placeholder="Akú knihu hľadáš?"
          @keypress="showBookList"
          v-model="searchForBook"
        />
      </div>

      <span class="split"></span>

      <a href="#" class="drop-down flex-container" @click="dropDown">
        Knihy
        <img src="../assets/icons/bx-down-arrow-alt.svg" alt="arrow icon" />
      </a>

      <button type="submit" class="find-book">Hľadaj</button>
    </div>

    <div v-if="showDropDown" class="sub-menu">
      <ul class="sub-menu__ul">
        <li><a href="#">Knižnice</a></li>
        <li><a href="#">Autori</a></li>
      </ul>
    </div>
  </article>

  <div v-if="this.searchForBook != '' && visibleBlookList" class="books">
    <ul
      v-for="book in filteredBooks.slice(0, 9)"
      :key="book.id"
      ref="book"
      class="books__ul"
      @click="addBook(book)"
    >
      <li class="books__li">
        <div class="flex-container">
          <img
            src="../assets/images/book-product.jpg"
            alt="book"
            class="product-img"
          />
          <div class="books__info">
            <h3 class="books__name">{{bookName = book.name }}</h3>
            <p class="books__author">Andrzej Sapkowski</p>
          </div>
        </div>
      </li>
    </ul>
    <p v-if="filteredBooks.length == 0">Žiadne knihy sa nenašli.</p>
  </div>
</template>

<script>
import axios from "axios";
import SearchBookList from "../components/SearchBookList.vue";
export default {
  components: { SearchBookList },
  emits: ['addBook'],
  data() {
    return {
      showDropDown: false,
      visibleBlookList: false,
      searchForBook: '',
      bookName: '',
      books: [],
    };
  },
  watch: {
    searchForBook: function (inputValue) {
      if (inputValue === "") this.visibleBlookList = false;
      else this.visibleBlookList = true;
    },
  },
  methods: {
    dropDown() {
      this.showDropDown = !this.showDropDown;
    },
    addBook(book) {
      this.$emit('addBook', book.name)
      this.visibleBlookList = false
      this.searchForBook = ''
    }
  },
  computed: {
    filteredBooks: function () {
      return this.books.filter((book) => {
        return book.name
          .toLowerCase()
          .includes(this.searchForBook.toLocaleLowerCase());
      });
    },
  },
  async mounted() {
    /*
    await axios
      .get(
        "https://librarian.sk/api/v1/libraries?fbclid=IwAR30KArgSArjG6F1QLOaJN5b0DvG05bO7gQ0BM9SUuN0WVyuB7Kv8ex0sFE"
      )
      .then((response) => (this.books = response.data));
    */

    await axios
      .get("https://www.librarian.sk/api/v1/books")
      .then((response) => (this.books = response.data));
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>
