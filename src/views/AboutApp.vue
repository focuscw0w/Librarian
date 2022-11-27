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

              <button class="like-btn" @click="toggle">
                <AnimationIcon
                  class="toggle-favorite__icon"
                  :class="iconClasses"
                  @animationend="onIconAnimationEnds"
                />
              </button>

              <!--
                <button class="save-btn">
                  <img src="../assets/icons/bookmark.svg" alt="save button" />
                </button>
              -->
            </div>
          </div>
        </div>
      </article>

      <SecondaryNavigation @showContent="showComponent($event)" />
    </div>
  </section>

  <main class="main">
    <component :is="currentComponent"></component>
  </main>

  <router-view />
</template>

<script>
import SecondaryNavigation from "../components/SecondaryNavigation.vue";
import News from "../components/News.vue";
import Gallery from "../components/Gallery.vue";
import AnimationIcon from "../components/AnimationIcon.vue";

export default {
  props: ['openRegister'],
  emits: ['showContent', 'hideBlur', 'hideRegister'],
  name: "HomePage",
  components: { SecondaryNavigation, News, Gallery, AnimationIcon },
  data() {
    return {
      currentComponent: "news",
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
    showComponent(contentToShow) {
      this.currentComponent = contentToShow;
    },
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
  created() {
    this.$emit('hideBlur')
    this.$emit('hideRegister')
  }
};
</script>

<style lang="scss">
@import "../assets/scss/main.scss";
</style>
