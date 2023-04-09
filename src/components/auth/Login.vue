<template>
  <Modal id="LoginModal" ref="modal">
    <div class="login">
      <div class="flex-container">
        <div class="login__interface">
          <form class="wrapper-padding" @submit="validateLogin">
            <header class="user-access__header">
              <h3 class="user-access__heading">Prihlásenie</h3>
              <img
                :src="require('@/assets/icons/close-icon.svg')"
                alt="close icon"
                class="close-icon"
                @click="hide"
              />
            </header>
            <figcaption class="user-access__figcaption">
              Prihlásením sa do účtu získate dodatočné funkcionality, prehľad o
              vaších výpožičkách a mnoho ďaĺšieho
            </figcaption>
            <div class="user-access__get-in">
              <div class="user-access__get-in__box">
                <label for="username">
                  Meno používateľa<span style="color: red"> *</span>
                </label>
                <input type="text" name="username" v-model="email" />
                <p
                  class="position-absolute text-danger top-100"
                  v-if="emptyInputs"
                >
                  Políčka nesmú byť prázdne!
                </p>
              </div>
              <div class="user-access__get-in__box">
                <label for="password">
                  Heslo<span style="color: red"> *</span>
                </label>
                <input :type="type" name="password" v-model="password" />
                <img
                  :src="require('@/assets/icons/eye.svg')"
                  alt="show password icon"
                  class="password-toggle"
                  @click="togglePasswordVisibility"
                />
              </div>
            </div>
            <div class="login__interface__stay-logged-ing">
              <label for="logged-in" class="label">
                <input type="checkbox" name="logged-in" id="logged-in" />
                <span class="checkmark bg-2"></span>
                Ostať prihlásený
              </label>
              <a class="forgotten-password">Zabudnuté heslo?</a>
            </div>

            <button class="login-btn" type="submit" @click="validateLogin">
              Prihlásiť sa
            </button>

            <div class="login-interface__integration">
              <a class="login-interface__integration__box">
                <img
                  :src="require('@/assets/icons/bxl-google.svg')"
                  alt="google icon"
                />
              </a>
              <a class="login-interface__integration__box">
                <img
                  :src="require('@/assets/icons/bxl-apple.svg')"
                  alt="apple icon"
                />
              </a>
              <a class="login-interface__integration__box">
                <img
                  :src="require('@/assets/icons/bxl-facebook.svg')"
                  alt="facebook icon"
                />
              </a>
            </div>
            <p class="user-access__paragraph">
              Nemáte registráciu?
              <span class="text-underlined cursor-pointer" @click="showRegister"
                >Vytvorte si účet</span
              >
            </p>
          </form>
        </div>
        <div class="login__illustration">
          <img
            :src="require('@/assets/images/illustration.png')"
            alt="illustration image"
          />
        </div>
      </div>
      <transition name="slide-in">
        <div
          class="warning-modal position-absolute bg-light p-3"
          v-if="loginError"
        >
          <p class="text-dark">Prihlásenie nebolo úspešné!</p>
        </div>
      </transition>
    </div>
  </Modal>
</template>

<script>
import axios from "axios";
import Modal from "@/components/common/Modal.vue";

export default {
  components: { Modal },
  emits: ["show", "hideLogin"],

  data() {
    return {
      type: "password",
      email: "",
      password: "",
      loginError: null,
      emptyInputs: null,
      // modal_demo: null,
    };
  },
  // mounted() {
  //   this.modal_demo = new Modal('#modal_demo', {})
  // },
  methods: {
    togglePasswordVisibility() {
      this.type = this.type === "text" ? "password" : "text";
    },
    showRegister() {
      this.hide();
      this.$parent.$refs.RegisterModal.show();
    },
    show() {
      this.$refs.modal.show();
    },
    hide() {
      this.$refs.modal.hide();
      this.clearForm();
    },
    clearForm() {
      this.email = "";
      this.password = "";
      this.emptyInputs = false;
    },
    triggerWarning() {
      this.loginError = true;
      setTimeout(() => {
        this.loginError = false;
      }, 3000);
    },
    // close() {
    //   this.$store.commit("TOGGLE_LOGIN", false);
    //   this.$store.commit("TOGGLE_BLUR", false)
    // },
    async validateLogin(e) {
      e.preventDefault();

      if (!this.email || !this.password) {
        this.emptyInputs = true;
      } else {
        await axios
          .post("login", {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("roles", response.data.roles);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            this.$emit("hideLogin");
            window.location.reload();
          })
          .catch((err) => {
            this.triggerWarning();
          });
      }
    },
  },
};
</script>
