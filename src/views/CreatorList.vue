<template>
  <VueTitle title="Zoznam autorov" />
  <SubHeader title="Zoznam autorov a tvorcov" />
  <ListIntroduction heading="Zoznam autorov" :paragraph="null" />

  <SearchDetail :aboutAuthor="true" placeholder="Zadajte názov autora" />

  <div class="product-detail bg-1 pb-32">
    <div class="product-items mb-16">
      <div class="container">
        <p class="product-items__first-letters size-15 text-md-emp">
          A, Á, a, á
        </p>
        <ul class="product-items__ul grid-container">
           <BookDetail
              v-for="Product in 4"
              :key="Product"
              :isBook="false"
              :isListPage="true"
              heading="Andrzej Sapkowski"
              :description="null"
              image="author-img.jpg"
            />
        </ul>
      </div>
    </div>

    <div class="product-items">
      <div class="container">
        <p class="product-items__first-letters size-15 text-md-emp">B, b</p>
        <ul class="product-items__ul grid-container">
           <BookDetail
              v-for="Product in 4"
              :key="Product"
              :isBook="false"
              :isListPage="true"
              heading="Andrzej Sapkowski"
              :description="null"
              image="author-img.jpg"
            />
        </ul>
      </div>
    </div>
  </div>

  <SubFooter class="bg-2" />
  <PageFooter />
</template>

<script>
import VueTitle from "@/utilities/vue-title.vue";
import BookDetail from "@/components/creator-detail/BookCard.vue";
import SearchDetail from "@/components/list-page/SearchDetail.vue";
import SubHeader from "@/components/SubHeader.vue";
import SubFooter from "@/components/SubFooter.vue";
import PageFooter from "@/components/PageFooter.vue";
import ListIntroduction from "@/components/list-page/ListIntroduction.vue";
export default {
  components: {
    SubHeader,
    SubFooter,
    PageFooter,
    ListIntroduction,
    VueTitle,
    BookDetail,
    SearchDetail,
  },
};
</script>
