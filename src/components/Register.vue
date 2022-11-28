<template>
  <div class="register">
    <div class="flex-container">
      <div class="register__interface">
        <div class="register__interface__wrapper">
          <header class="register__interface__header">
            <h3 class="register__interface__heading">Registrácia</h3>
            <img src="../assets/icons/close-icon.svg" alt="close icon" class="close-icon" @click="closeRegister"/>
          </header>
          <figcaption class="register__interface__figcaption">
            Zaregistrujte sa a odomknite mravú tvar Librarianu
          </figcaption>
          <div class="register__interface__integration">
            <button class="integration__btn" type="submit">Apple</button>
            <button class="integration__btn" type="submit">Google</button>
          </div>
          <p class="register__interface__paragraph">Nemáte registráciu?</p>
          <div class="register__interface__registration">
            <div class="register__interface__registration-box">
              <label for="username">Username</label>
              <input type="text" name="username">
            </div>
            <div class="register__interface__registration-box">
              <label for="mail">Email</label>
              <input type="email" name="mail">
            </div>
            <div class="register__interface__registration-box">
              <label for="password">Password</label>
              <input type="text" name="password">
            </div>
          </div>
          <LoginBtn />
        </div>
      </div>
      <div class="register__illustration">
        <img src="../assets/images/illustration.png" alt="illustration image" />
      </div>
    </div>
  </div>
</template>

<script>
import LoginBtn from './LoginBtn.vue'
export default {
  emits: ['hideRegister'],
  components: { LoginBtn },
  data() {
    return {
      user: {
        emial: '',
        password: ''
      }
    }
  },
  methods: { 
    closeRegister() {
      this.$emit('hideRegister')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>
