<template>
  <article class="info-window">
    <div class="flex-container info-window-container">
      <div class="info-window__store">
        <img
          :src="require('../assets/images/book-store-illustration.jpg')"
          alt="store image"
          class="store-img"
        />
      </div>
      <div class="store-informations">
        <div class="flex-container">
          <router-link
            tag="h4"
            class="store-informations__heading"
            to="/kniznica/oravska-kniznica-antona-habovstiaka"
          >
          {{ libraryName }}
          </router-link>
          <div class="opened-p">
            <span class="opened">{{ libraryStatus }}</span
            >do {{ libraryTime }}
          </div>
          <div class="store-informations__address">
            {{ libraryStreet }} {{ libraryHouseNumber }} <br />
            {{ libraryPostCode }} {{ libraryCity }}
          </div>
          <div class="store-informations__media">
            <div class="flex-container">
              <button class="book-list">Zoznam kníh</button>
              <span class="media-icon"
                ><img
                  :src="require('../assets/icons/location-arrow.svg')"
                  alt="route icon"
              /></span>
              <span class="media-icon" @click="toggle">
                <AnimationIcon
                  class="toggle-favorite__icon"
                  :class="iconClasses"
                  @animationend="onIconAnimationEnds"
                />
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
  props: [
    "id",
    "libraryName",
    "libraryCity",
    "libraryStreet",
    "libraryPostCode",
    "libraryHouseNumber",
    "libraryTimeDirection",
    "libraryTime",
    "libraryStatus",
  ],
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
    },
  },
};
</script>


