<template>
  <div class="mt-5">
    <VueTitle title="Zoznam kníh"/>
    <div class="product-items bg-1">
      <div class="container">
        <ul class="product-items__ul grid-container">
          <BookDetail v-for="Product in 12" :key="Product"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import VueTitle from "@/utilities/vue-title.vue";
import BookDetail from "@/components/creator-detail/BookCard.vue";

export default {
  // title: 'Knižnica',
  components: {VueTitle, BookDetail},
  data() {
    return {
      books: [],
    };
  },
  async mounted() {
    // watch the params of the route to fetch the data again
    await axios
        .get('books')
        .then((response) => {
              console.log(response.data)
              this.libraries = response.data
            }
        );
  },
};
</script>
