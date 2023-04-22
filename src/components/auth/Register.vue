<template>
  <Modal id="RegisterModal" ref="modal">
    <div class="register">
      <div class="flex-container">
        <div class="register__interface">
          <form class="wrapper-padding" @submit="validateRegister">
            <header class="user-access__header">
              <h3 class="user-access__heading">Registrácia</h3>
              <img
                  :src="require('@/assets/icons/close-icon.svg')"
                  alt="close icon"
                  class="close-icon"
                  @click="hide"
              />
            </header>
            <figcaption class="user-access__figcaption">
              Zaregistrujte sa a odomknite pravú tvar Librarianu
            </figcaption>
            <!--            <div class="register__interface__integration">-->
            <!--              <button class="integration__btn" type="submit">Apple</button>-->
            <!--              <button class="integration__btn" type="submit">Google</button>-->
            <!--            </div>-->
            <p class="user-access__paragraph">Alebo</p>
            <div class="user-access__get-in">
              <div class="user-access__get-in__box">
                <label for="username">
                  Meno používateľa<span style="color: red" class=""> *</span>
                </label>
                <input type="text" name="username" v-model="username"/>
                <span
                    v-if="v$.username.$error"
                    class="position-absolute top-100 text-danger"
                >
                  Nesprávne meno
                </span>
              </div>
              <div class="user-access__get-in__box">
                <label for="mail">
                  Email<span style="color: red" class=""> *</span>
                </label>
                <input type="email" name="mail" v-model="email"/>
                <span
                    v-if="v$.email.$error"
                    class="position-absolute top-100 text-danger"
                >Nesprávny mail</span
                >
              </div>
              <div class="user-access__get-in__box">
                <label for="password">
                  Heslo<span style="color: red" class=""> *</span>
                </label>
                <input :type="type" name="password" v-model="password"/>
                <span
                    v-if="v$.password.$error"
                    class="position-absolute top-100 text-danger"
                >Nesprávne heslo</span
                >
                <img
                    :src="require('@/assets/icons/eye.svg')"
                    alt="show password icon"
                    class="password-toggle"
                    @click="togglePasswordVisibility"
                />
              </div>
            </div>
            <button class="login-btn" type="submit" @click="validateRegister">
              Prihlásiť sa
            </button>
            <p class="user-access__paragraph">
              Ste zaregistrovaný?
              <span class="text-underlined cursor-pointer" @click="showLogin"
              >Prihlásite sa</span
              >
            </p>
          </form>
        </div>
        <div class="register__illustration">
          <img
              :src="require('@/assets/images/illustration.png')"
              alt="illustration image"
          />
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
// import {reactive, onMounted} from 'vue'
import Modal from "@/components/common/Modal.vue";

import {useVuelidate} from "@vuelidate/core";
import {required, email} from "@vuelidate/validators";
import axios from "axios";

export default {
  components: {Modal},
  data() {
    return {
      v$: useVuelidate(),
      type: "password",
      username: "",
      email: "",
      password: "",
      modal_demo: null,
    };
  },
  validations() {
    return {
      username: {required},
      email: {required, email},
      password: {required},
    };
  },
  mounted() {
    // this.modal_demo = new Modal('#modal_demo', {})
  },
  methods: {
    showLogin() {
      this.hide();
      this.$parent.$refs.LoginModal.show();

      // this.$store.commit("TOGGLE_LOGIN", false);
      // this.$store.commit("TOGGLE_REGISTER", true);
    },
    show() {
      this.$refs.modal.show();
    },
    hide() {
      this.$refs.modal.hide();
    },
    togglePasswordVisibility() {
      this.type = this.type === "text" ? "password" : "text";
    },
    // close() {
    //   this.$store.commit("TOGGLE_REGISTER", false);
    //   this.$store.commit("TOGGLE_BLUR", false)
    // },
    async validateRegister(e) {
      e.preventDefault();
      this.v$.$validate();

      if (this.v$.$error) return;

      await axios
          .post("register", {
            email: this.email,
            name: this.username,
            password: this.password,
          })
          .then((res) => console.log(res));

      this.$store.commit("TOGGLE_REGISTER", false);
    },
    // showLogin() {
    //   this.$store.commit("TOGGLE_REGISTER", false);
    //   this.$store.commit("TOGGLE_LOGIN", true);
    // },
  },
};
</script>
