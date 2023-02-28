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
        <!--        <bs-modal>-->
        <!--          <button class="btn btn-info" slot="trigger"> Bootstrap modal </button>-->
        <!--          <div slot="target" class="modal" tabindex="-1">-->
        <!--            <div class="modal-dialog">-->
        <!--              <div class="modal-content">-->
        <!--                <div class="modal-header">-->
        <!--                  <h5 class="modal-title">Modal title</h5>-->
        <!--                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
        <!--                </div>-->
        <!--                <div class="modal-body">-->
        <!--                  <p>Modal body text goes here.</p>-->
        <!--                </div>-->
        <!--                <div class="modal-footer">-->
        <!--                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>-->
        <!--                  <button type="button" class="btn btn-primary">Save changes</button>-->
        <!--                </div>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </bs-modal>-->
        <!--        <LoginButton @click="$store.commit('TOGGLE_LOGIN', true)" v-else />-->
        <div v-else>
          <button @click="openLoginModal()" class="login-nav-btn border border-dark py-2 px-3">Prihlásiť sa</button>
          <LoginModal ref="LoginModal"/>
          <RegisterModal ref="RegisterModal"/>
        </div>
      </div>
    </div>
  </header>

</template>

<script>
import RegisterModal from "@/components/auth/Register.vue";
import LoginModal from "@/components/auth/Login.vue";

export default {
  components: {RegisterModal, LoginModal},
  data() {
    return {
      // dataModal: false
    }
  },
  created() {
    this.$store.commit("LOG_USER");
  },
  methods: {
    openLoginModal() {
      this.$refs.LoginModal.show();
    }
  }

};
</script>
