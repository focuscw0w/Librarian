<template>
  <div class="slide-item" v-if="currentSlide === index" :key="slide">
    <transition-group>
      <div :key="index">
        <h2 class="slide-heading">{{ slide.heading }}</h2>
        <p class="slide-paragraph">{{ slide.paragraph }}</p>
      </div>
    </transition-group>
  </div>
  <a class="new-slide" @click="emitNext" v-if="currentSlide == index"
    >{{ slide.buttonText }} ></a
  >
</template>

<script>
export default {
  props: ["slide", "currentSlide", "index"],
  emits: ["next", "hideBlur", "hideIntroduction"],
  methods: {
    emitNext() {
      if (this.slide.buttonText != "Dokončiť") {
        this.$emit("next");
      } else {
        this.$emit("hideIntroduction");
        this.$emit("hideBlur");
        localStorage.setItem("activeIntroduction", false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
</style>
