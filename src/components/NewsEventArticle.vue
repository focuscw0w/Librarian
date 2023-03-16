<template>
  <article class="news__article bg-2">
    <div class="flex-container p-3">
      <header class="news__article__header">
        <h4 class="article-heading">{{ creatorName }}</h4>
        <figcaption class="date-figcaption">{{ formattedCreatedAt }}</figcaption>
      </header>

      <a class="news__article__settings" href="#"
      ><img :src="require('@/assets/icons/ellipsis.svg')" alt="settings icon"
      /></a>
    </div>

    <div v-if="event.image" class="news__article__image mb-3">
      <img :src="event.image.url_asset" alt="Article image"/>
    </div>

    <footer class="news__article__footer px-3 pb-3">
      <div class="flex-container">
        <div class="wrapper">
          <div class="details" v-if="event.data.isCompetition">
            <p class="mark">
              <BIconAward class="me-1"/>
              Súťaž
            </p>
            <p>Dátum a čas <span class="date">15. August, 15:00</span></p>
            <p>Trvanie: <span class="date">2 hodiny</span></p>
          </div>

          <p class="about-event">
            <span class="location me-2" v-if="event.data.place"
            ><img
                class="location-img"
                :src="require('@/assets/icons/bx-current-location.svg')"
                alt="location icon"
            />
              {{ event.data.place }}</span
            >
            <span v-if="event.data.place" class="me-1">|</span>
            {{ event.text }}
          </p>
        </div>

        <div class="media mx-3">
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
import dateFormat, {masks} from "dateformat";

export default {
  props: ["event", 'creatorName'],
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
    formattedCreatedAt() {
      if (this.event.created_at) {
        return dateFormat(new Date(this.event.created_at), "d.m.yyyy");
      } else {
        return null;
      }
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
