<template>
  <header class="main-header" :class="{ blur: $store.state.blurEffect }">
    <div class="flex-container justify-content-between">
      <div class="d-flex gap-2em align-items-center">
        <div class="logo">
          <router-link to="/"
            ><img
              :src="require('@/assets/images/logo-web.png')"
              alt="logo"
              class="logo"
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
            <a href="#">O aplikácii </a>
          </li>
        </ul>
      </div>

      <div class="main-header__aside">
        <div
          class="logged-user d-flex gap-2em align-items-center"
          v-if="$store.state.loggedUser"
        >
          <p>{{ $store.state.loggedUser.name }}</p>
          <a
            class="user"
            role="button"
            @click="this.$store.commit('LOGOUT_USER')"
            >Odhlásiť sa</a
          >
        </div>
        <LoginButton @click="$store.commit('TOGGLE_LOGIN', true)" v-else />
      </div>
    </div>
  </header>
</template>

<script>
import RegisterButton from "./RegisterButton.vue";
import LoginButton from "./LoginButton.vue";

export default {
  components: { RegisterButton, LoginButton },
  created() {
    this.$store.commit("LOG_USER");
  },
};
</script>
