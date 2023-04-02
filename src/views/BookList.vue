<template>
  <section>
    <VueTitle title="Zoznam kníh" />
    <SubHeader title="Zoznam kníh" />
    <ListIntroduction heading="Zoznam kníh" :paragraph="null" />

    <SearchDetail :aboutAuthor="false" placeholder="Zadajte názov knihy" />

    <div class="product-detail bg-1 pb-32">
      <div class="product-items mb-16">
        <div class="container">
          <p class="product-items__first-letters size-15 text-md-emp">
            A, Á, a, á
          </p>
          <ul class="product-items__ul grid-container">
            <BookDetail v-for="Product in 4" :key="Product" />
          </ul>
        </div>
      </div>

      <div class="product-items">
        <div class="container">
          <p class="product-items__first-letters size-15 text-md-emp">B, b</p>
          <ul class="product-items__ul grid-container">
            <BookDetail v-for="Product in 4" :key="Product" />
          </ul>
        </div>
      </div>
    </div>

    <SubFooter class="bg-2" />
    <PageFooter />
  </section>
</template>

<script>
import axios from "axios";
import VueTitle from "@/utilities/vue-title.vue";
import BookDetail from "@/components/creator-detail/BookCard.vue";
import SearchDetail from "@/components/list-page/SearchDetail.vue";
import SubHeader from "@/components/SubHeader.vue";
import SubFooter from "@/components/SubFooter.vue";
import PageFooter from "@/components/PageFooter.vue";
import ListIntroduction from "@/components/list-page/ListIntroduction.vue";

export default {
  // title: 'Knižnica',
  components: {
    VueTitle,
    BookDetail,
    SubHeader,
    ListIntroduction,
    SubFooter,
    PageFooter,
    SearchDetail,
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
