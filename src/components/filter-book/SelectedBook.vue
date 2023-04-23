<template>
  <div class="selected-book bg-2">
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
          <h3 class="books__name">{{ bookData.name }}</h3>
        </router-link>

        <router-link v-if="bookData.creators.length > 0" :to="`/autor/${bookData.creators[0].slug}`">
          <a class="books__author">{{bookData.creators[0].name}}</a>
        </router-link>
      </div>

      <img
          @click="hideFilterProduct"
          :src="require('@/assets/icons/close-icon.svg')"
          alt="close icon"
          class="close-icon"
      />
    </div>
  </div>
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


