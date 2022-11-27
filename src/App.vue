<template>
  <div :class="{blur: blurEffect}">
    <MainNavigation @openRegister="openRegister" />
  </div>
  
    <main id="main-content">
      <router-view @hideBlur="hideBlur" @hideRegister="closeRegister" :openRegister="visibleRegister"/>
    </main>

    <div v-if="blurEffect" class="dead-background"></div>
</template>

<script>
import RegisterButton from "./components/RegisterButton.vue";
import MainNavigation from "./components/MainNavigation.vue";
export default {
  components: { RegisterButton, MainNavigation },
  data() {
    return {
      blurEffect: true,
      visibleRegister: false
    }
  },
  methods: {
    hideBlur() {
      this.blurEffect = false
    },
    openRegister() {
      this.visibleRegister = true
      this.blurEffect = true
    },
    closeRegister() {
      this.visibleRegister = false
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
.dead-background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 500;
}
</style>
