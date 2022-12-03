<template>
  <div class="register">
    <div class="flex-container">
      <div class="register__interface">
        <div class="wrapper-padding">
          <header class="user-access__header">
            <h3 class="user-access__heading">Registrácia</h3>
            <img src="../assets/icons/close-icon.svg" alt="close icon" class="close-icon" @click="$emit('hideRegister')"/>
          </header>
          <figcaption class="user-access__figcaption">
            Zaregistrujte sa a odomknite mravú tvar Librarianu
          </figcaption>
          <div class="register__interface__integration">
            <button class="integration__btn" type="submit">Apple</button>
            <button class="integration__btn" type="submit">Google</button>
          </div>
          <p class="user-access__paragraph">Nemáte registráciu?</p>
          <div class="user-access__get-in">
            <div class="user-access__get-in__box">
              <label for="username">Username</label>
              <input type="text" name="username">
            </div>
            <div class="user-access__get-in__box">
              <label for="mail">Email</label>
              <input type="email" name="mail">
            </div>
            <div class="user-access__get-in__box">
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
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>
