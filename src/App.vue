<template>
  <div :class="{blur: this.blurEffect}">
    <MainNavigation />
  </div>
  
    <main id="main-content">
      <router-view @hideBlur="hideBlur"/>
    </main>
</template>

<script>
import RegisterButton from "./components/RegisterButton.vue";
import MainNavigation from "./components/MainNavigation.vue";
export default {
  components: { RegisterButton, MainNavigation },
  data() {
    return {
      blurEffect: true
    }
  },
  methods: {
    hideBlur() {
      this.blurEffect = false
    }
  },
  created() {
    this.blurEffect = localStorage.getItem("activeIntroduction") == null ? true : false
  }
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
.blur {
  filter: blur(5px);
}
</style>
