<template>
  <article class="books bg-2">
    
  
  </article>
</template>

<script>
export default {
  props: ["allBooks"],
  data() {
    return {
      books: [],
    };
  },
  computed: {
    filteredBooks: function () {
    
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>
