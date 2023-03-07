<template>
  <div class="d-flex gap-2em">

    <section class="news">
      <div class="articles" v-for="article in articleData" :key="article.id">
        <NewsArticle
            :text="article.text"
            :image="article.image"
            :competition="article.competition"
        />
      </div>
    </section>

    <NewsAside/>
  </div>
</template>

<script>
import NewsAside from "./NewsAside.vue";
import AnimationIcon from "../AnimationIcon.vue";
import NewsArticle from "./NewsArticle.vue";

export default {
  components: {NewsAside, AnimationIcon, NewsArticle},
  data() {
    return {
      favorited: false,
      animating: false,
      articleData: [
        {
          id: 0,
          text: "| Túto krásnu lúku sme kúpili, aby sme ju zaliali betónom a postavili na nom garáže a parkovacie miesta pre vás všetkých",
          image: "article-img.jpg",
          competition: false,
        },
        {
          id: 1,
          text: "Chcete vyhrať balíček kníh od Ikaru? Zapojte sa do súťaže tak , že nám na email tvojpipikjekratky@haha.com fotku vašej poličky s ...",
          image: "background-competition.png",
          competition: true,
        },
        {
          id: 2,
          text: "Chcete vyhrať balíček kníh od Ikaru? Zapojte sa do súťaže tak , že nám na email tvojpipikjekratky@haha.com fotku vašej poličky s ...",
          image: "background-competition.png",
          competition: true,
        },
      ],
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
