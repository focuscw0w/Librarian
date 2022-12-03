<template>
  <div class="login">
    <div class="flex-container">
      <div class="login__interface">
        <div class="wrapper-padding">
          <header class="user-access__header">
            <h3 class="user-access__heading">Prihlásenie</h3>
            <img
              src="../assets/icons/close-icon.svg"
              alt="close icon"
              class="close-icon"
              @click="$emit('hideLogin')"
            />
          </header>
          <figcaption class="user-access__figcaption">
            Prihlásením sa do účtu získate dodatočné funkcionality, prehľad o
            vaších výpožičkách a mnoho ďaĺšieho
          </figcaption>
          <div class="user-access__get-in">
            <div class="user-access__get-in__box">
              <label for="username">Username</label>
              <input type="text" name="username" />
            </div>
            <div class="user-access__get-in__box">
              <label for="mail">Email</label>
              <input type="email" name="mail" />
            </div>
          </div>
          <div class="login__interface__stay-logged-ing">
            <label for="logged-in">
              <input type="checkbox" name="logged-in" />
              Ostať prihlásený
            </label>
            <a class="forgotten-password">Zabudnuté heslo?</a>
          </div>
          <LoginBtn />
          <div class="login-interface__integration">
            <a class="login-interface__integration__box">
              <img src="../assets/icons/bxl-google.svg" alt="google icon" />
            </a>
            <a class="login-interface__integration__box">
              <img src="../assets/icons/bxl-apple.svg" alt="apple icon" />
            </a>
            <a class="login-interface__integration__box">
              <img src="../assets/icons/bxl-facebook.svg" alt="facebook icon" />
            </a>
          </div>
          <p class="user-access__paragraph">Nemáte registráciu?</p>
          <CreateAccount />
        </div>
      </div>
      <div class="login__illustration">
        <img src="../assets/images/illustration.png" alt="illustration image" />
      </div>
    </div>
  </div>
</template>

<script>
import LoginBtn from "../components/LoginBtn.vue";
import CreateAccount from "../components/CreateAccount.vue";
export default {
  emits: ['hideLogin'],
  components: { LoginBtn, CreateAccount },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>
