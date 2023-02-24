<template>
  <div :class="{ dark: darkBackground }">
    <div class="search-article">
      <div class="flex-container">
        <div class="search-container flex-container">
          <BIconSearch alt="search icon" class="search-icon ms-3" />

          <input
            type="text"
            id="search-book"
            name="search"
            size="25"
            autocomplete="off"
            placeholder="Akú knihu hľadáš?"
            class="w-100"
            v-model="searchForBook"
          />
        </div>
        <span class="split"></span>
        <select
          name=""
          id=""
          class="form-control w-auto form-select border-0 shadow-none cursor-pointer"
        >
          <option value="">Knihy</option>
          <option value="">Autori</option>
        </select>
      </div>
    </div>
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
            <span class="books__name">{{ (bookName = book.name) }}</span>
            <div class="d-flex gap-2">
              <span
                class="books__author"
                v-for="creator in book.creators"
                :key="creator.id"
                >{{ creator.name }},</span
              >
            </div>
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
import { BIconSearch } from "bootstrap-icons-vue";

export default {
  components: { SearchBookList, DropDown, BIconSearch },
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
      this.$emit("addBook", book);
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
      .get("https://api.librarian.sk/api/books")
      .then((response) => (this.books = response.data));

    /*
    this.creators = this.creators.slice(0, 10)

    let merge = {...this.creators, ...this.books}
    console.log(merge)
    */
  },
};
</script>
