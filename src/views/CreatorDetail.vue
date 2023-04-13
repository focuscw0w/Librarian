<template>
  <section class="author-list-page detail-page" style="padding-top: 70px">
    <VueTitle :title="creator.name" />
    <SubHeader category="Zoznam autorov" :title="creator.name" />
    <div class="author">
      <div class="container">
        <div class="flex-container">
          <img
            src="@/assets/images/author-img.jpg"
            class="author__image"
            alt="author"
          />
          <article class="author__information">
            <h4 class="author__information__heading">{{ creator.name }}</h4>
            <p class="author__information__life-length">
              * {{ formattedBirthDate }}
              <span class="ms-3" v-if="creator.death_date !== null">
                † {{ formattedDeathDate }}</span
              >
            </p>
            <p class="author__information__biography mb-4">
              {{ creator.description }}
            </p>
          </article>
        </div>
        <nav class="secondary-nav pb-3">
          <ul class="mb-0 ps-0">
            <li><a class="active">Beletria</a></li>
            <li><a>Sci-fi</a></li>
            <li><a>Fantasy</a></li>
            <li><a>A oveľa viac</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="product-items bg-1">
      <div class="container">
        <ul class="product-items__ul grid-container">
          <BookDetail
            v-for="Product in 12"
            :key="Product"
            :isBook="true"
            :isListPage="false"
            heading="Zaklínač IV.: Čas opovrhnutia"
            :description="null"
            image="book-product.jpg"
          />
        </ul>
      </div>
    </div>
    <SubFooter class="bg-2" />
    <PageFooter />
  </section>
</template>

<script>
// import SecondaryNavigation from "@/components/SecondaryLibraryNavigation.vue";
import SubHeader from "@/components/SubHeader.vue";
import SubFooter from "@/components/SubFooter";
import PageFooter from "@/components/PageFooter";
import BookDetail from "@/components/creator-detail/BookCard.vue";
import axios from "axios";
import VueTitle from "@/utilities/vue-title.vue";
import dateFormat, { masks } from "dateformat";

export default {
  components: {
    SubHeader,
    // SecondaryNavigation,
    SubFooter,
    PageFooter,
    BookDetail,
    VueTitle,
  },
  data() {
    return {
      favorited: false,
      animating: false,
      creator: false,
    };
  },
  computed: {
    iconClasses() {
      return {
        "toggle-favorite__icon--favorited": this.favorited,
        "toggle-favorite__icon--animate": this.animating,
      };
    },
    formattedBirthDate() {
      if (this.creator.birth_date) {
        return dateFormat(new Date(this.creator.birth_date), "d.m.yyyy");
      } else {
        return null;
      }
    },
    formattedDeathDate() {
      if (this.creator.death_date) {
        return dateFormat(new Date(this.creator.death_date), "d.m.yyyy");
      } else {
        return null;
      }
    },
  },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData();
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    );
  },
  methods: {
    showComponent(contentToShow) {},
    toggle() {
      if (!this.favorited) {
        this.animating = true;
      }

      this.favorited = !this.favorited;
    },
    onIconAnimationEnds() {
      this.animating = false;
    },
    async fetchData() {
      await axios
        .get("creators/" + this.$route.params.slug)
        .then((response) => {
          this.creator = response.data;
          // this.loadedItem = true
        });
    },
  },
};
</script>
