<template>
 
    <MainNavigation @openRegister="openRegister" @openLogin="openLogin" :hideBlurProp="blurEffect"/>
  
    <main id="main-content">
      <router-view @hideBlur="blurOff" :openRegister="visibleRegister" :openLogin="visibleLogin"/>
    </main>

    <Register v-if="visibleRegister" @hideRegister="closeRegister"/>

    <Login v-if="visibleLogin" @hideLogin="closeLogin"/>

    <div v-if="blurEffect" class="dead-background" @click="closeAll"></div>
</template>

<script>
import RegisterButton from "./components/RegisterButton.vue";
import Register from "./components/Register.vue";
import Login from './components/Login.vue';
import MainNavigation from "./components/MainNavigation.vue";
export default {
  components: { RegisterButton, MainNavigation, Register, Login },
  data() {
    return {
      blurEffect: false,
      visibleRegister: false,
      visibleLogin: false
    }
  },
  methods: {
    blurOff() {
      this.blurEffect = false
    },
    openRegister() {
      this.visibleRegister = true
      this.blurEffect = true
    },
    closeRegister() {
      this.visibleRegister = false
      this.blurEffect = false
    },
    openLogin() {
      this.visibleLogin = true
      this.blurEffect = true
    },
    closeLogin() {
      this.visibleLogin = false
      this.blurEffect = false
    },
    closeAll() {
      this.visibleRegister = false
      this.visibleLogin = false
      this.blurEffect = false
    }
  },
  created() {
    this.blurEffect = localStorage.getItem("activeIntroduction") == null ? true : false
  }
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
.blur {
  filter: blur(5px);
  max-height: 100vh;
  overflow-y: hidden;
}
.dead-background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 500;
}
</style>
