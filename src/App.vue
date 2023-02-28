<template>
  <MainNavigation />

  <main id="main-content" :class="{ blur: $store.state.blurEffect }">
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
</template>

<script>
import Register from "./components/auth/Register.vue";
import Login from "./components/auth/Login.vue";
import MainNavigation from "./components/main-navigation/MainNavigation.vue";
export default {
  components: { MainNavigation, Register, Login },
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
