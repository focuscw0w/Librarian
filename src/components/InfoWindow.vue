<template>
  <article class="info-window">
    <div class="flex-container info-window-container">
      <div class="info-window__store">
        <img
          src="../assets/images/book-store-illustration.jpg"
          alt="store image"
          class="store-img"
        />
      </div>
      <div class="store-informations">
        <div class="flex-container">
          <router-link
            tag="h4"
            class="store-informations__heading"
            to="/details"
            >Oravská knižnica Antóna Habovštiaka
          </router-link>
          <p class="opened-p"><span class="opened">Otvorené</span>do 19:00</p>
          <p class="store-informations__address">
            Samuela Nováka 1763, 026 01 <br />
            Dolný Kubín
          </p>
          <div class="store-informations__media">
            <div class="flex-container">
              <button class="book-list">Zoznam kníh</button>
              <span class="media-icon"
                ><img src="../assets/icons/location-arrow.svg" alt="route icon"
              /></span>
              <span class="media-icon" @click="toggle">
                <AnimationIcon
                  class="toggle-favorite__icon"
                  :class="iconClasses"
                  @animationend="onIconAnimationEnds"
                />
                <transition name="favorite-particles-transition">
                  <div
                    v-if="animating"
                    class="toggle-favorite__particles"
                  ></div>
                </transition>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import AnimationIcon from "./AnimationIcon.vue";
export default {
  components: { AnimationIcon },
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
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>
