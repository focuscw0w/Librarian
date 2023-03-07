<template>
  <div class="d-flex gap-2em">

    <section class="news">
      <div class="articles" v-for="event in 3" :key="event.id">
        <NewsEventArticle
            event="event"
        />
      </div>
      <p class="text-center" v-if="events.length === 0">
        Nástenka knižnice je zatiaľ prázdna :(
      </p>
    </section>

    <NewsAside :library="library"/>
  </div>
</template>

<script>
import NewsAside from "./NewsAside.vue";
import AnimationIcon from "../AnimationIcon.vue";
import NewsEventArticle from "./NewsEventArticle.vue";

export default {
  components: {NewsAside, AnimationIcon, NewsEventArticle},
  data() {
    return {
      events: [],
    }
  },
  props: {
    library: null,
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
  created() {
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
</style>
