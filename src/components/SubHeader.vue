<template>
  <div class="book-list__header">
    <div class="container">
      <div class="flex-container">
        <!-- Router link -->
        <!-- refactor class names -->
        <button class="book-list__btn-previous">
          <img src="@/assets/icons/arrow-left.svg" @click="$router.go(-1)" alt="previous page" />
        </button>
        <h4 class="book-list__heading">
          <strong class="book-list__page-name"
            >{{ category }}</strong
          >
          /
          <span class="book-list__book-name" >
            {{title}}
          </span>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["category",'title'],
};
</script>
