<template>
  <header class="book-list__header">
    <div class="container">
      <div class="flex-container">
        <!-- Router link -->
        <button class="book-list__btn-previous">
          <img src="@/assets/icons/arrow-left.svg" alt="previous page" />
        </button>
        <h4 class="book-list__heading">
          <strong class="book-list__page-name">Zoznam kníh</strong> /
          <span class="book-list__book-name">
            Zaklínač IV.: Čas opovrhnutia
          </span>
        </h4>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      book: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
</style>
