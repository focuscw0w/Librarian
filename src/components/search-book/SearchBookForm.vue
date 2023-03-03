<template>
  <div :class="{ dark: darkBackground }">
    <div class="search-article">
      <div class="flex-container">
        <div class="search-container flex-container">
          <BIconSearch alt="search icon" class="search-icon ms-3"/>

          <input
              type="text"
              id="search-book"
              name="search"
              size="25"
              autocomplete="off"
              :placeholder="placeholder"
              class="w-100"
              v-model="searchForBook"
          />
        </div>
        <span class="split"></span>
        <select
            v-model="type"
            id=""
            class="form-control w-auto form-select border-0 shadow-none cursor-pointer"
        >
          <option value="book">Knihy</option>
          <option value="author">Autori</option>
        </select>
      </div>
    </div>
  </div>

  <div v-if="this.searchForBook != '' && visibleBlookList" class="books">
    <ul
        v-for="book in results.slice(0, 9)"
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
              >{{ creator.name }}</span
              >
            </div>
          </div>
        </div>
      </li>
    </ul>
    <p class="text-center" v-if="results.length === 0">
      Nenašli sa žiadne výsledky :(
    </p>
  </div>
</template>

<script>
import axios from "axios";
import SearchBookList from "./SearchBookList.vue";
import {BIconSearch} from "bootstrap-icons-vue";
import login from "@/components/auth/Login.vue";

export default {
  components: {
    SearchBookList,
    BIconSearch
  },
  emits: ["addBook", "activeFilterProduct", "darkGoogleMap"],
  data() {
    return {
      visibleBlookList: false,
      darkBackground: false,
      searchForBook: "",
      bookName: "",
      type: "book",
      placeholder: "Akú knihu hľadáš?",
      results: [],
      creators: [],
      test: [],
    };
  },
  watch: {
    searchForBook: async function (inputValue) {

      this.visibleBlookList = inputValue !== "";
      this.darkBackground =
          inputValue === ""
              ? this.$emit("darkGoogleMap", false)
              : this.$emit("darkGoogleMap", true);
      let q = '';
      if (inputValue !== '') {
        q += '?search_word=' + inputValue
      }

      await axios
          .get((this.type === 'book' ? 'books' : 'creators') + q
          )
          .then((response) => {
                console.log(response.data)
                this.results = response.data
              }
          );
    },
    type: function (value) {
      if (value === 'book') {
        this.placeholder = "Akú knihu hľadáš?"
      } else {
        this.placeholder = "Akého autora hľadáš?"
      }
    },
  },
  methods: {
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
    // filteredResults: function () {
    // return this.results.filter((res) => {
    //   return res.name
    //       .toLowerCase()
    //       .includes(this.searchForBook.toLocaleLowerCase());
    // });
    // },
  },
  // async mounted() {
  //   console.log((this.type === 'book' ? 'books' : 'creators') + '?search_word='
  //       + this.searchForBook)
  //   console.log(this.searchForBook)
  //   await axios
  //       .get((this.type === 'book' ? 'books' : 'creators') + '?search_word='
  //           + this.searchForBook
  //       )
  //       .then((response) => (this.results = response.data));
  //
  //   /*
  //   this.creators = this.creators.slice(0, 10)
  //
  //   let merge = {...this.creators, ...this.results}
  //   console.log(merge)
  //   */
  // },
};
</script>
