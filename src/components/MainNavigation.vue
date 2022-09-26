<template>
    <header class="main-header">
    <div class="flex-container">
      <div class="logo"><img src="../assets/logo-web.png" alt="logo" class="logo"></div>

      <div class="container">
        <nav class="main-header__nav">
          <ul>
            <li><a href="#">Zoznam kníh <img src="../assets/icons/bx-book.svg" alt="book icon" class="navigation-icon" ></a></li>
            <li><a href="#">Zoznam autorov <img src="../assets/icons/bx-pen.svg" alt="pen icon" class="navigation-icon"></a></li>
            <li><a href="#">O aplikácii</a></li>
          </ul>
        </nav>
      </div>

      <div class="main-headaer__aside">
        <a href="#" class="language-btn">SK <img src="../assets/icons/bx-world.svg" alt="change language icon" class="navigation-icon"></a>

        <RegisterButton />
      </div>

    </div>
  </header>
</template>

<script>
import RegisterButton from './RegisterButton.vue';

    export default {
        components: {RegisterButton}
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
</style>