<template>
  <article class="selected-book">
    <div class="flex-container">
      <router-link :to="`/kniha/${bookData.slug}`">
        <img
          :src="require('@/assets/images/book-product.jpg')"
          alt="book"
          class="product-img"
        />
      </router-link>
      <div class="books__info">
        <router-link :to="`/kniha/${bookData.slug}`">
          <h3 class="books__name" @click="$store.commit('CURRENT_BOOK', bookData)">{{ bookData.name }}</h3>
        </router-link>
        <!--
        <button class="books__link" @click="shareData">
          <p class="books__author">Andrzej Sapkowski</p>
        </button>
        -->
        <p class="books__author">Andrzej Sapkowski</p>
      </div>

      <img
        @click="hideFilterProduct"
        :src="require('@/assets/icons/close-icon.svg')"
        alt="close icon"
        class="close-icon"
      />
    </div>
  </article>
</template>

<script>
export default {
  props: ["bookData"],
  emits: ["hideFilterProduct"],
  data() {
    return {
      selectedBook: false,
      data: [],
    };
  },
  watch: {
    bookName() {
      this.selectedBook = true;
    },
  },
  methods: {
    hideFilterProduct() {
      this.selectedBook = false;
      this.$emit("hideFilterProduct");
    },
  },
};
</script>


