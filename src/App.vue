<template>
  <div
      style="padding-top: 70px"
  >
  <MainNavigation/>

  <main id="main-content" :class="{ blur: $store.state.blurEffect}" class="bg-1">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
  </main>

  <div
      v-if="$store.state.blurEffect"
      class="dead-background"
      @click="$store.commit('CLOSE_ALL')"
  ></div>
  </div>
</template>

<script>
import Register from "./components/auth/Register.vue";
import Login from "./components/auth/Login.vue";
import MainNavigation from "./components/main-navigation/MainNavigation.vue";

export default {
  components: {MainNavigation, Register, Login},
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
