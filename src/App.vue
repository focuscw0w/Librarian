<template>
  <MainNavigation />

  <main id="main-content" :class="{ blur: $store.state.blurEffect }">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
  </main>

  <transition name="show-modal">
    <Register v-if="$store.state.activeRegister" />
  </transition>

  <transition name="show-modal">
    <Login v-if="$store.state.activeLogin" />
  </transition>

  <div
    v-if="$store.state.blurEffect"
    class="dead-background"
    @click="$store.commit('CLOSE_ALL')"
  ></div>
</template>

<script>
import RegisterButton from "./components/main-navigation/RegisterButton.vue";
import Register from "./components/login-register/Register.vue";
import Login from "./components/login-register/Login.vue";
import MainNavigation from "./components/main-navigation/MainNavigation.vue";
export default {
  components: { RegisterButton, MainNavigation, Register, Login },
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
