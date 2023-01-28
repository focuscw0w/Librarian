<template>
  <header class="main-header" :class="{blur: hideBlurProp}">
    <div class="flex-container justify-content-between">
      <div class="d-flex gap-2em align-items-center">
        <div class="logo">
          <router-link to="/"
          ><img :src="require('@/assets/images/logo-web.png')" alt="logo" class="logo"
          /></router-link>
        </div>
        <ul class="d-flex gap-2em mb-0">
          <li>
            <a href="#"
            >Zoznam kníh
              <img
                  :src="require('@/assets/icons/bx-book.svg')"
                  alt="book icon"
                  class="navigation-icon"
              /></a>
          </li>
          <li>
            <a href="#"
            >Zoznam autorov
              <img
                  :src="require('@/assets/icons/bx-pen.svg')"
                  alt="pen icon"
                  class="navigation-icon"
              /></a>
          </li>
          <li>
            <a href="#"
            >O aplikácii
              </a>
          </li>
<!--          <router-link to="/kniznica/oravska-kniznica-antona-habovstiaka">O aplikácii</router-link>-->
        </ul>
      </div>

      <div class="main-header__aside">
        <LoginButton @click="$emit('openLogin')"/>
      </div>
    </div>
  </header>
</template>

<script>
import RegisterButton from "./RegisterButton.vue";
import LoginButton from "./LoginButton.vue"

export default {
  props: ['hideBlurProp'],
  emits: ['openRegister', 'openLogin'],
  components: {RegisterButton, LoginButton},
  data() {
    return {}
  },
};
</script>
