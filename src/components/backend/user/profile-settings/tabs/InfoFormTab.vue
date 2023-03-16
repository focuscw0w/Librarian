<template>
  <form @submit="sendForm">
    <b-col>
      <p class="mb-3 text-md-emp form-card-title">Zakladne informacie</p>
      <b-row class="mb-3">
        <InputWithTitle class="col" inputId="nameInput"  title="Meno" :model="name"/>
        <InputWithTitle class="col" inputId="surnameInput" title="Priezvisko" :model="surname"/>
      </b-row>
      <b-row class="mb-3">
        <InputWithTitle class="col" inputId="nameInput" title="Meno" :model="name"/>
        <InputWithTitle class="col" inputId="surnameInput" title="Priezvisko" :model="surname"/>
      </b-row>
      <b-row class="mb-3">
        <InputWithTitle class="col" inputId="nameInput" title="Meno" :model="name"/>
        <InputWithTitle class="col" inputId="surnameInput" title="Priezvisko" :model="surname"/>
      </b-row>
      <b-row class="mb-3">
        <InputWithTitle class="col" inputId="nameInput" title="Meno" :model="name"/>
        <InputWithTitle class="col" inputId="surnameInput" title="Priezvisko" :model="surname"/>
      </b-row>
    </b-col>
    <p class="mb-3 text-md-emp form-card-title">Doplnujuce informacie</p>
    <b-row class="mb-3">
      <InputWithTitle class="col" inputId="nameInput" title="O mne" :model="name"/>
    </b-row>
    <div class="d-flex justify-content-end">
      <button type="submit" class="my-btn my-primary-btn me-2" @click="sendForm">
        Odoslať
      </button>
      <button type="submit" class="my-btn" @click="$emit('hide')">
        Zrušiť
      </button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import InputWithTitle from "@/components/form/InputWithTitle.vue";

export default {
  components: {InputWithTitle},
  emits: ['hide'],
  data() {
    return {name: '', surname: ''};
  },
  methods: {
    togglePasswordVisibility() {
      this.type = this.type === "text" ? "password" : "text";
    },
    async sendForm(e) {
      e.preventDefault();
      // await axios
      //     .post("login", {
      //       email: this.email,
      //       password: this.password,
      //     })
      //     .then((response) => {
      //       localStorage.setItem("token", response.data.token);
      //       localStorage.setItem("roles", response.data.roles);
      //       localStorage.setItem("user", JSON.stringify(response.data.user));
      //       this.$emit("hideLogin")
      //       window.location.reload()
      // $emit('hide')
      //     })
      //     .catch((err) => console.log(err));
    },
  },
};
</script>
