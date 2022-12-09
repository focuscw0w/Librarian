<template>
  <article v-if="activeIntroduction" class="first-introduction">
    <div class="flex-container">
      <div class="first-introduction__text">
        <div class="flex-container">
          <SlideItem
            v-for="(slide, index) in this.slides"
            :slide="slide"
            :key="index"
            :current-slide="currentSlide"
            :index="index"
            @next="nextSlide"
            @hideIntroduction="activeIntroduction = false;"
            @hideBlur="$emit('hideBlur')"
          />

          <div class="controls">
            <div class="flex-container">
              <SlideIndicator
                :total="this.slides.length"
                :current-index="currentSlide"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="first-introduction__illustration">
        <img
          :src="require('@/assets/images/introduction-img.png')"
          alt="introduction image"
        />
      </div>
    </div>
  </article>
</template>

<script>
import SlideItem from "./SlideItem.vue";
import SlideIndicator from "./SlideIndicator.vue";
export default {
  emits: ['hideBlur'],
  components: { SlideItem, SlideIndicator },
  data() {
    return {
      currentSlide: 0,
      slideInterval: null,
      activeIntroduction: null,
      slides: [
        {
          heading: "Vítajte vo svete librarianu",
          paragraph:
            "Vyhľadávanie kníh v knižniciach nikdy nebolo jednoduchšie. Vytvorené (budúcim bc.) Jakubom Rončákom.",
          buttonText: "Ďalej",
        },
        {
          heading: "Úplne nové možnosti, hravo a pohromade",
          paragraph:
            "Navštívte knižnice s istotou, že budú obsahovať vašu knihu, bez potreby overovania s personálom knižnice.",
          buttonText: "Ďalej",
        },
        {
          heading: "Neváhajte objaviť librarian a ponorte sa do čítania",
          paragraph:
            "Veríme, že nájdete čo hľadáte a ponoríte sa do vašej obľúbenej knihy bez zbytočného zdržovania.",
          buttonText: "Dokončiť",
        },
      ],
    };
  },
  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index;
    },
    nextSlide() {
      const index =
        this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0;
      this.setCurrentSlide(index);
    },
    hideIntroduction() {
      this.activeIntroduction = false;
    },
  },
  computed: {
    getData() {
      return localStorage.getItem("activeIntroduction");
    },
  },
  created() {
    this.activeIntroduction = this.getData == null ? true : false;
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
</style>
