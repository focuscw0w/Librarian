<template>
  <div :class="{blur: this.blurEffect}">
    <MainNavigation />
  
    <main id="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import RegisterButton from "./components/RegisterButton.vue";
import MainNavigation from "./components/MainNavigation.vue";

import mitt from 'mitt'

const emitter = mitt()

export default {
  components: { RegisterButton, MainNavigation },
  data() {
    return {
      blurEffect: false
    }
  },
  mounted() {
    emitter.on("hideBlur", e => console.log(e))
  }
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
.blur {
  filter: blur(5px);
}
</style>
