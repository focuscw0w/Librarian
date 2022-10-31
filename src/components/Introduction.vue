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
              @hideIntroduction="blurEffect"
            />
        
          <div class="controls">
            <div class="flex-container">
              <SlideIndicator :total="this.slides.length" :current-index="currentSlide"/>
            </div>
          </div>
        </div>
      </div>
      <div class="first-introduction__illustration">
        <img
          src="../assets/images/introduction-img.png"
          alt="introduction image"
        />
      </div>
    </div>
  </article>
</template>

<script>
import SlideItem from "../components/SlideItem.vue";
import SlideIndicator from '../components/SlideIndicator.vue';
import 'swiper/css';
export default {
  components: { SlideItem, SlideIndicator },
  data() {
    return {
      currentSlide: 0,
      slideInterval: null,
      activeIntroduction: true,
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
    blurEffect() {
      this.activeIntroduction = false
      this.$emit("blurEffect", false)
    }
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.my-swiper {
  width: 400px;
}
</style>
