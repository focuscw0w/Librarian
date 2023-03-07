<template>
  <article class="news__article bg-2">
    <div class="flex-container p-3">
      <header class="news__article__header">
        <h4 class="article-heading">Oravská knižnica Antóna Hrabovštiaka</h4>
        <figcaption class="date-figcaption">8. augusta</figcaption>
      </header>

      <a class="news__article__settings" href="#"
      ><img :src="require('@/assets/icons/ellipsis.svg')" alt="settings icon"
      /></a>
    </div>

    <div v-if="image" class="news__article__image mb-3">
      <img :src="require(`@/assets/images/${image}`)" alt="Article image"/>
    </div>

    <footer class="news__article__footer px-3 pb-3">
      <div class="flex-container">
        <div class="wrapper">
          <div class="details" v-if="competition">
            <p class="mark">
              <BIconAward class="me-1"/>
              Súťaž
            </p>
            <p>Dátum a čas <span class="date">15. August, 15:00</span></p>
            <p>Trvanie: <span class="date">2 hodiny</span></p>
          </div>

          <p class="about-event">
            <span class="location" v-if="!competition"
            ><img
                class="location-img"
                :src="require('@/assets/icons/bx-current-location.svg')"
                alt="location icon"
            />
              Zemianská Lúčka</span
            >
            {{ text }}
          </p>
        </div>

        <div class="media">
          <AnimationIcon
              class="toggle-favorite__icon"
              :class="iconClasses"
              @animationend="onIconAnimationEnds"
              @click="toggle"
          />
          <img :src="require('@/assets/icons/share.svg')" alt="share button"/>
        </div>
      </div>
    </footer>
  </article>
</template>

<script>
import AnimationIcon from "../AnimationIcon.vue";
import {BIconAward} from "bootstrap-icons-vue";

export default {
  props: ["event"],
  components: {AnimationIcon, BIconAward},
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
  created() {
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
</style>
