<template>
  <article class="selected-book">
    <div class="flex-container">
      <img
        :src="require('../assets/images/book-product.jpg')"
        alt="book"
        class="product-img"
      />
      <div class="books__info">
        <h3 class="books__name">{{bookName}}</h3>
        <p class="books__author">Andrzej Sapkowski</p>
      </div>

      <img @click="hideFilterProduct" :src="require('../assets/icons/close-icon.svg')" alt="close icon" class="close-icon">
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
      this.$emit('hideFilterProduct')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>
