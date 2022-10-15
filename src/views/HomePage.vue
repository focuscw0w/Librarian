<template>
  <section class="introduction">
    <div class="container">
      <div class="introduction__background">
        <img src="../assets/images/background.webp" alt="background image" />
      </div>

      <article class="about">
        <div class="flex-container">
          <div class="about__library">
            <h2 class="main-heading">Oravská knižnica Antona Habovštiaka</h2>
            <figcaption class="heading-figcaption">Verejná knižnica</figcaption>
          </div>

          <div class="about__library__media">
            <div class="flex-container">

              <router-link tag="a" to="/" class="navigate-btn"
                >Navigovať</router-link
              >

              <button class="like-btn">
                <img src="../assets/icons/bx-heart.svg" alt="like button" />
              </button>
              <button class="save-btn">
                <img src="../assets/icons/bx-save.svg" alt="save button" />
              </button>
            </div>
          </div>
        </div>
      </article>

      <SecondaryNavigation @showContent="showComponent($event)" />
    </div>
  </section>

  <main class="main">
    <div class="split-page container">
      <!-- Refactor it with dynamic component -->
      <News v-if="showNews"/>
      <NewsAside v-if="showNews" />

      <Gallery v-if="showGallery" />
    </div>
  </main>

  <router-view />
</template>

<script>
import SecondaryNavigation from "../components/SecondaryNavigation.vue";
import News from "../components/News.vue";
import NewsAside from "../components/NewsAside.vue";
import Gallery from "../components/Gallery.vue";

export default {
  emits: ["showContent"],
  name: "HomePage",
  components: { SecondaryNavigation, News, NewsAside, Gallery },
  data() {
    return {
      show: "",
      showNews: true,
      showGallery: false,
    };
  },
  methods: {
    showComponent(contentToShow) {
      // REFACTOR IT
      if (contentToShow == "gallery") {
        this.showGallery = true;
        this.showNews = false;
      } else {
        this.showNews = true;
        this.showGallery = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/main.scss";
</style>
