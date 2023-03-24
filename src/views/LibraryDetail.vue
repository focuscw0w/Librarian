<template>
  <div v-if="library">
    <VueTitle :title="library.name"/>

    <section class="introduction">
      <div class="container">
        <div class="introduction__background">
          <img
              :src="require('../assets/images/background.webp')"
              alt="background image"
          />
        </div>

        <article class="about bg-2">
          <div class="flex-container">
            <div class="about__library">
              <h2 class="main-heading">{{ library.name }}</h2>
              <figcaption class="heading-figcaption">
                {{ library.type.name }}
              </figcaption>
            </div>

            <div class="about__library__media">
              <div class="flex-container">
                <router-link to="/" class="navigate-btn"
                >Navigovať
                </router-link>

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

        <SecondaryLibraryNavigation :library="library" @showContent="showComponent($event)"/>
      </div>
    </section>

    <div class="main pt-4">
      <div class="container">
        <component :library="library" :is="currentComponent"></component>
      </div>
    </div>

    <router-view/>

    <PageFooter/>

    <div v-if="$store.state.blurEffect" class="dead-background"></div>
  </div>
</template>

<script>
import SecondaryLibraryNavigation from "../components/SecondaryLibraryNavigation.vue";
import News from "../components/news/News.vue";
import Gallery from "../components/news/Gallery.vue";
import AnimationIcon from "../components/AnimationIcon.vue";
import PageFooter from "../components/PageFooter.vue";
import axios from "axios";
import VueTitle from "@/utilities/vue-title.vue";

export default {
  // title: 'Knižnica',
  components: {SecondaryLibraryNavigation, News, Gallery, AnimationIcon, PageFooter, VueTitle},
  data() {
    return {
      currentComponent: "news",
      favorited: false,
      animating: false,
      library: null,
    };
  },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
        () => this.$route.params,
        () => {
          this.fetchData()
        },
        // fetch the data when the view is created and the data is
        // already being observed
        {immediate: true}
    )
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
    async fetchData() {
      await axios
          .get('libraries/' + this.$route.params.slug
          )
          .then((response) => {
                this.library = response.data
              }
          );
    },
  },
};
</script>
