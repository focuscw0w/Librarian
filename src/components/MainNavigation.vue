<template>
  <header class="main-header" :class="{blur: hideBlurProp}">
    <div class="flex-container">
      <div class="logo">
        <router-link to="/"
          ><img src="../assets/images/logo-web.png" alt="logo" class="logo"
        /></router-link>
      </div>

      <div class="container">
        <nav class="main-header__nav">
          <ul>
            <li>
              <a href="#"
                >Zoznam kníh
                <img
                  src="../assets/icons/bx-book.svg"
                  alt="book icon"
                  class="navigation-icon"
              /></a>
            </li>
            <li>
              <a href="#"
                >Zoznam autorov
                <img
                  src="../assets/icons/bx-pen.svg"
                  alt="pen icon"
                  class="navigation-icon"
              /></a>
            </li>
            <router-link to="/details">O aplikácii</router-link>
          </ul>
        </nav>
      </div>

      <div class="main-header__aside">
        <LoginButton />

        <RegisterButton @click="hideBlur"/>
      </div>
    </div>
  </header>
</template>

<script>
import RegisterButton from "./RegisterButton.vue";
import LoginButton from "./LoginButton.vue"

export default {
  props:['hideBlurProp'],
  emits: ['openRegister'],
  components: { RegisterButton, LoginButton },
  data() {
    return {
    }
  },
  methods: {
    hideBlur() {
      this.$emit('openRegister')
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.blur {
  filter: blur(5px) !important;
}
</style>
