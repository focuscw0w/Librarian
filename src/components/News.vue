<template>
  <div class="split-page container">
    <section class="news">
      <article class="news__article">
        <div class="flex-container padding">
          <header class="news__article__header">
            <h4 class="article-heading">
              Oravská knižnica Antóna Hrabovštiaka
            </h4>
            <figcaption class="date-figcaption">8. augusta</figcaption>
          </header>

          <a class="news__article__settings" href="#"
            ><img :src="require('../assets/icons/ellipsis.svg')" alt="settings icon"
          /></a>
        </div>

        <div class="news__article__image">
          <img :src="require('../assets/images/article-img.jpg')" alt="Article image" />
        </div>

        <footer class="news__article__footer padding">
          <div class="flex-container">
            <p class="about-event">
              <span class="location"
                ><img
                  class="location-img"
                  :src="require('../assets/icons/bx-current-location.svg')"
                  alt="location icon"
                />
                Zemianská Lúčka</span
              >
              | Túto krásnu lúku sme kúpili, aby sme ju zaliali betónom a
              postavili na nom garáže a parkovacie miesta pre vás všetkých
            </p>

            <div class="media">
              <AnimationIcon
                class="toggle-favorite__icon"
                :class="iconClasses"
                @animationend="onIconAnimationEnds"
                @click="toggle"
              />
              <img :src="require('../assets/icons/share.svg')" alt="share button" />
            </div>
          </div>
        </footer>
      </article>

      <!--In future add props for date, text, competition -->
      <NewsArticle />

      <NewsArticle />

    </section>

    <NewsAside />
  </div>
</template>

<script>
import NewsAside from "../components/NewsAside.vue";
import AnimationIcon from "../components/AnimationIcon.vue";
import NewsArticle from '../components/NewsArticle.vue';
export default {
  components: { NewsAside, AnimationIcon, NewsArticle },
  data() {
    return {
      favorited: false,
      animating: false,
    };
  },
  computed: {
    iconClasses() {
      return {
        "toggle-favorite__icon--favorited": this.favorited,
        "toggle-favorite__icon--animate": this.animating,
      };
    },
  },
  methods: {
    toggle() {
      if (!this.favorited) {
        this.animating = true;
      }
      this.favorited = !this.favorited;
    },
    onIconAnimationEnds() {
      this.animating = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>
