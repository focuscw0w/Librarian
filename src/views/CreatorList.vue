<template>
  <section style="padding-top: 70px">
    <VueTitle title="Zoznam autorov" />
    <SubHeader title="Zoznam autorov a tvorcov" />
    <ListIntroduction heading="Zoznam autorov" :paragraph="null" />

    <SearchDetail :aboutAuthor="true" placeholder="Zadajte názov autora" />

    <div v-for="(creators, letter) in allCreators" :key="letter" class="product-detail bg-1 pb-32">
      <div class="product-items mb-16">
        <div class="container">
          <p class="product-items__first-letters size-15 text-md-emp">
            {{ letter }}
          </p>
          <ul class="product-items__ul grid-container">
            <BookDetail
              v-for="creator in creators"
              :key="creator"
              :productData="creator"
              :isBook="false"
              :isListPage="true"
              :likeBtn="false"
              image="author-img.jpg"
            />
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
  components: {
    SubHeader,
    SubFooter,
    PageFooter,
    ListIntroduction,
    VueTitle,
    BookDetail,
    SearchDetail,
  },
  data() {
    return {
      allCreators: [],
    };
  },
  async mounted() {
    // watch the params of the route to fetch the data again
    await axios.get("/creators?group_by=name").then((response) => {
      this.allCreators = response.data;
    });
  },
};
</script>
