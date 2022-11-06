<template>
  <article v-if="selectedBook" class="selected-book">
    <div class="flex-container">
      <img
        src="../assets/images/book-product.jpg"
        alt="book"
        class="product-img"
      />
      <div class="books__info">
        <h3 class="books__name">{{this.bookName}}</h3>
        <p class="books__author">Andrzej Sapkowski</p>
      </div>

      <img @click="hideFilterProduct" src="../assets/icons/close-icon.svg" alt="close icon" class="close-icon">
    </div>
  </article>
</template>

<script>
export default {
  props: ['bookName'],
  emits: ['hideFilterProduct'],
  data() {
    return {
      selectedBook: false
    }
  },
  watch: {
    bookName() {
      this.selectedBook = true
    },
  },
  methods: {
    hideFilterProduct() {
      this.selectedBook = false
      this.$emit('hideFilterProduct', false)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>
