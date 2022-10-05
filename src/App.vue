<template>
  <MainNavigation />

  <main id="main-content">
    <router-view />
  </main>
</template>

<script>
import RegisterButton from "./components/RegisterButton.vue";
import MainNavigation from "./components/MainNavigation.vue";

export default {
  components: { RegisterButton, MainNavigation }
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
