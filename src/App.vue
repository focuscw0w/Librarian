<template>
  <div :class="{blur: blurEffect}">
    <MainNavigation @openRegister="openRegister" />
  </div>
  
    <main id="main-content">
      <router-view @hideBlur="hideBlur" @hideRegister="closeRegister" :openRegister="visibleRegister"/>
    </main>
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
      this.blurEffect = true
      this.visibleRegister = true
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
</style>
