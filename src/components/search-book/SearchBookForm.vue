<template>
  <div :class="{ dark: darkBackground }">
    <div class="search-article bg-2">
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

  <div v-if="this.searchForBook != '' && visibleBlookList" class="books bg-2">
    <div v-if="loading" class="text-center">
      <!--      Nacitavam...-->
    </div>
    <div v-else>
      <div
          v-for="book in results"
          :key="book.id"
          ref="book"
          class="books-result-item bg-2 flex-container pt-1 pb-1"
          @click="click(book)"
      >
        <img
            :src="require('@/assets/images/book-product.jpg')"
            alt="book"
            class="product-img me-3"
        />
        <div class="books__info justify-content-center">
          <span class="books__name">{{ (bookName = book.name) }}</span>
          <div class="d-flex gap-2 mb-2">
            <span
                class="books__author"
                v-for="creator in book.creators"
                :key="creator.id"
            >{{ creator.name }}</span
            >
          </div>
        </div>
      </div>
      <p class="text-center" v-if="results.length === 0">
        Nenašli sa žiadne výsledky :(
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchBookList from "./SearchBookList.vue";
import {BIconSearch} from "bootstrap-icons-vue";
import login from "@/components/auth/Login.vue";
import router from "@/router";

export default {
  components: {
    SearchBookList,
    BIconSearch,
  },
  emits: ["addBook", "activeFilterProduct", "darkGoogleMap"],
  data() {
    return {
      visibleBlookList: false,
      loading: false,
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
      this.load()
    },
    type: function (value) {
      if (value === "book") {
        this.placeholder = "Akú knihu hľadáš?";
      } else {
        this.placeholder = "Akého autora hľadáš?";
      }
      this.load()
    },
  },
  methods: {
    // router() {
    //   return router
    // },
    async load() {
      let q = "";
      if (this.searchForBook !== "") {
        q += "?search_word=" + this.searchForBook;
      }
      this.loading = true;
      await axios
          .get((this.type === "book" ? "books" : "creators") + q)
          .then((response) => {
            this.results = response.data;
            this.loading = false;
          });
    }, click(item) {
      if (this.type === 'book') {
        this.addBook(item)
      } else {
        router.push('/autor/' + item.slug)
      }
    },
    addBook(book) {
      this.$emit("addBook", book);
      this.$emit("activeFilterProduct");
      this.$emit("darkGoogleMap", false);

      this.visibleBlookList = false;
      this.searchForBook = "";

      const id = book.id

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
