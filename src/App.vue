<template>
  <div>
    <MainNavigation />

    <main
      id="main-content"
      class="bg-1"
      :class="{ blur: $store.state.blurEffect }"
    >
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </main>

    <div v-if="$store.state.activeIntroduction" class="dead-background full">
        <Introduction v-if="$store.state.activeIntroduction" />
    </div>

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
import Introduction from "@/components/web-introduction/Introduction.vue";

export default {
  components: { MainNavigation, Register, Login, Introduction },
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
