<template>
  <div :class="{ dark: darkBackground }">
    <article class="search-article">
      <div class="flex-container">
        <div class="search-container flex-container">
          <img
            :src="require('@/assets/icons/bx-search.svg')"
            alt="search icon"
            class="search-icon"
          />
          <input
            type="text"
            id="search-book"
            name="search"
            size="25"
            autocomplete="off"
            placeholder="Akú knihu hľadáš?"
            v-model="searchForBook"
          />
        </div>

        <a href="#" class="drop-down flex-container dropdown" @click="dropDown">
          <span class="split"></span>
          Knihy
          <img
            class="drop-down-icon"
            :src="require('@/assets/icons/angle-down.svg')"
            alt="arrow icon"
          />
        </a>

        <DropDown v-if="showDropDown" :dropDownItems="dropDownContent" />
      </div>
    </article>
  </div>

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
            :src="require('@/assets/images/book-product.jpg')"
            alt="book"
            class="product-img"
          />
          <div class="books__info">
            <h3 class="books__name">{{ (bookName = book.name) }}</h3>
            <p class="books__author">Andrzej Sapkowski</p>
          </div>
        </div>
      </li>
    </ul>
    <p class="no-books-msg" v-if="filteredBooks.length == 0">
      Žiadne knihy sa nenašli.
    </p>
  </div>
</template>

<script>
import axios from "axios";
import SearchBookList from "./SearchBookList.vue";
import DropDown from "../DropDown.vue";
export default {
  components: { SearchBookList, DropDown },
  emits: ["addBook", "activeFilterProduct", "darkGoogleMap"],
  data() {
    return {
      showDropDown: false,
      visibleBlookList: false,
      darkBackground: false,
      searchForBook: "",
      bookName: "",
      books: [],
      creators: [],
      test: [],
      dropDownContent: [{ content: "Knihy"},{content: "Knižnice"}],
    };
  },
  watch: {
    searchForBook: function (inputValue) {
      this.visibleBlookList = inputValue === "" ? false : true;
      this.darkBackground =
        inputValue === ""
          ? this.$emit("darkGoogleMap", false)
          : this.$emit("darkGoogleMap", true);
    },
  },
  methods: {
    dropDown() {
      this.showDropDown = !this.showDropDown;
    },
    addBook(book) {
      this.$emit("addBook", book.name);
      this.$emit("activeFilterProduct");
      this.$emit("darkGoogleMap", false);

      this.visibleBlookList = false;
      this.searchForBook = "";
    },
    emitDarkBackground() {
      this.$emit("darkGoogleMap", true);
    },
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
    await axios
      .get("https://www.librarian.sk/api/books")
      .then((response) => (this.books = response.data));

    await axios
      .get("https://www.librarian.sk/api/creators")
      .then((response) => (this.creators = response.data));

    /*
    this.creators = this.creators.slice(0, 10)

    let merge = {...this.creators, ...this.books}
    console.log(merge)
    */
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
</style>
