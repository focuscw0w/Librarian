<template>
  <div class="book-list__header">
    <div class="container">
      <div class="flex-container">
        <!-- Router link -->
        <!-- refactor class names -->
        <button class="book-list__btn-previous">
          <img src="@/assets/icons/arrow-left.svg" alt="previous page" />
        </button>
        <h4 class="book-list__heading">
          <strong class="book-list__page-name" v-if="displayBook"
            >Zoznam kníh</strong
          >
          <strong v-else class="book-list__page-name">Zoznam autorov</strong>
          /
          <span class="book-list__book-name" v-if="displayBook">
            {{ $store.state.currentBook.name }}
          </span>
          <span v-else class="book-list__book-name">Andrzej Sapkowski</span>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["displayBook"],
};
</script>
