<template>
  <div class="list__sub-header bg-2">
    <div class="container d-flex align-items-center mt-4 mb-3">
      <button @click="$router.go(-1)" class="list__btn-previous me-3">
        <img src="@/assets/icons/arrow-left.svg" alt="previous page" />
      </button>
      <h4 class="list__heading d-flex gap-1">
        <strong class="list__page-name">{{ category }}</strong>
        <div v-if="category">
          <span> / </span>
          <span class="list__book-name">
            {{ title }}
          </span>
        </div>
        <strong v-else class="list__page-name">{{ title }}</strong>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["category", "title"],
};
</script>
