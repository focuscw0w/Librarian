<template>
  <article class="selected-book">
    <div class="flex-container">
      <router-link to="/zoznam-knih">
        <img
          :src="require('@/assets/images/book-product.jpg')"
          alt="book"
          class="product-img"
        />
      </router-link>
      <div class="books__info">
        <router-link to="/zoznam-knih">
          <h3 class="books__name" @click="$store.commit('CURRENT_BOOK', bookName)">{{ bookName }}</h3>
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
  props: ["bookName"],
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
    shareData() {
      this.$router.push({
        name: "zoznam-knih",
        params: { name: this.data },
      });
    },
  },
};
</script>


