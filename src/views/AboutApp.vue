<template>
  <div :class="{ blur: openRegister || openLogin }">
    <section class="introduction">
      <div class="container">
        <div class="introduction__background">
          <img
            :src="require('../assets/images/background.webp')"
            alt="background image"
          />
        </div>

        <article class="about">
          <div class="flex-container">
            <div class="about__library">
              <h2 class="main-heading">Oravská knižnica Antona Habovštiaka</h2>
              <figcaption class="heading-figcaption">
                Verejná knižnica
              </figcaption>
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

    <PageFooter />

    <div v-if="openRegister || openLogin" class="dead-background"></div>
  </div>
</template>

<script>
import SecondaryNavigation from "../components/SecondaryNavigation.vue";
import News from "../components/news/News.vue";
import Gallery from "../components/news/Gallery.vue";
import AnimationIcon from "../components/AnimationIcon.vue";
import PageFooter from "../components/PageFooter.vue";

export default {
  props: ["openRegister", "openLogin"],
  emits: ["showContent", "hideBlur", "hideRegister"],
  name: "HomePage",
  components: { SecondaryNavigation, News, Gallery, AnimationIcon, PageFooter },
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
    this.$emit("hideBlur");
    this.$emit("hideRegister");
  },
};
</script>
