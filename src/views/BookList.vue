<template>
  <VueTitle title="Zoznam kníh" />
  <SubHeader :title="`Zoznam kníh`" />
  <ListIntroduction :heading="null" :paragraph="null" />

  <div class="product-detail bg-1 pt-32 pb-32">
    <div class="product-items">
      <div class="container">
        <ul class="product-items__ul grid-container">
          <BookDetail v-for="Product in 12" :key="Product" />
        </ul>
      </div>
    </div>
  </div>

  <SubFooter class="bg-2" />
  <PageFooter />
</template>

<script>
import axios from "axios";
import VueTitle from "@/utilities/vue-title.vue";
import BookDetail from "@/components/creator-detail/BookCard.vue";
import SubHeader from "@/components/SubHeader.vue";
import SubFooter from "@/components/SubFooter.vue";
import PageFooter from "@/components/PageFooter.vue";
import ListIntroduction from "@/components/ListIntroduction.vue";

export default {
  // title: 'Knižnica',
  components: {
    VueTitle,
    BookDetail,
    SubHeader,
    ListIntroduction,
    SubFooter,
    PageFooter,
  },
  data() {
    return {
      books: [],
    };
  },
  async mounted() {
    // watch the params of the route to fetch the data again
    await axios.get("books").then((response) => {
      console.log(response.data);
      this.libraries = response.data;
    });
  },
};
</script>
