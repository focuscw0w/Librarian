<template>
  <div class="book-list__header bg-2">
    <div class="container d-flex align-items-center mt-4 mb-3">
      <!-- refactor class names -->
      <button class="book-list__btn-previous me-3">
        <img src="@/assets/icons/arrow-left.svg" @click="$router.go(-1)" alt="previous page"/>
      </button>
      <h4 class="book-list__heading">
        <strong class="book-list__page-name"
        >{{ category }}</strong
        >
        <span v-if="category"> / </span>
        <span class="book-list__book-name">
            {{ title }}
          </span>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["category", "title"],
};
</script>
