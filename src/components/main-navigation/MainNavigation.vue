<template>
  <header class="main-header bg-2" :class="{ blur: $store.state.blurEffect }">
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
            <router-link to="/knihy"
              >Zoznam kníh
              <img
                :src="require('@/assets/icons/bx-book.svg')"
                alt="book icon"
                class="navigation-icon"
            /></router-link>
          </li>
          <li>
            <router-link to="/autori"
              >Zoznam autorov
              <img
                :src="require('@/assets/icons/bx-pen.svg')"
                alt="pen icon"
                class="navigation-icon"
            /></router-link>
          </li>
          <li>
            <a href="#">O aplikácii </a>
          </li>
        </ul>
      </div>

      <div v-if="$store.state.loggedUser">
        <LoggedUserProfileBadge />
      </div>
      <div v-else>
        <button
          @click="openLoginModal()"
          class="login-nav-btn border border-dark py-2 px-3"
        >
          Prihlásiť sa
        </button>

        <LoginModal ref="LoginModal" />
        <RegisterModal ref="RegisterModal" />
      </div>
    </div>
    <!--    </div>-->
  </header>
</template>

<script>
import RegisterModal from "@/components/auth/Register.vue";
import LoginModal from "@/components/auth/Login.vue";
import LoggedUserProfileBadge from "@/components/backend/user/LoggedUserProfileBadge.vue";
import axios from "axios";

export default {
  components: { RegisterModal, LoginModal, LoggedUserProfileBadge },
  data() {
    return {};
  },
  created() {
    this.$store.commit("LOG_USER");
  },
  methods: {
    openLoginModal() {
      this.$refs.LoginModal.show();
    },
  },
};
</script>
