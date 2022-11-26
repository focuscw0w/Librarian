<template>
  <header class="main-header">
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

      <div class="main-headaer__aside">
        <a href="#" class="language-btn"
          >SK
          <img
            src="../assets/icons/bx-world.svg"
            alt="change language icon"
            class="navigation-icon"
        /></a>

        <RegisterButton @click="$emit('openRegister')"/>
      </div>
    </div>
  </header>
</template>

<script>
import RegisterButton from "./RegisterButton.vue";

export default {
  emits: ['openRegister', 'blurEffect'],
  components: { RegisterButton },
  methods: {
    sendEmits() {
      this.$emit('openRegister')
      this.$emit('blurEffect')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>
