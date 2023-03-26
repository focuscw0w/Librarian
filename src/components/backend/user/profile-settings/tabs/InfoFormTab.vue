<template>
  <form @submit="sendForm" class="profile-settings">
    <div class="user-photo mb-4">
      <p class="mb-3 text-md-emp size-15">Profilová fotka</p>
      <div class="user-photo__avatar d-flex align-items-center gap-3">
        <b-avatar
          src="https://placekitten.com/300/300"
          size="3.5rem"
        ></b-avatar>
        <div class="user-photo__avatar-description">
          <p class="text-md-emp size-15">
            Profilová fotka napomáha ku rozoznaniu
          </p>
          <a class="upload-photo cursor-pointer size-15">Nahrať novú fotku</a>
        </div>
      </div>
    </div>
    <b-col>
      <p class="mb-3 text-md-emp form-card-title">Základné informácie</p>
      <b-row class="mb-3">
        <InputWithTitle
          class="col"
          inputId="nameInput"
          title="Meno"
          :model="name"
        />
        <InputWithTitle
          class="col"
          inputId="surnameInput"
          title="Priezvisko"
          :model="surname"
        />
      </b-row>
      <b-row class="mb-3">
        <InputWithTitle
          class="col-6"
          inputId="titleInput"
          title="Titul"
          :model="title"
        />
        <InputWithTitle
          class="col"
          id="number-input-sm"
          inputId="surnameInput"
          title="Telefónne"
          :model="surname"
        />
        <InputWithTitle
          class="col"
          id="number-input-sm-2"
          inputId="surnameInput"
          title="číslo"
          :model="surname"
        />
      </b-row>
      <b-row class="mb-3">
        <InputWithTitle
          class="col-6"
          inputId="nameInput"
          title="Email"
          :model="email"
        />
      </b-row>
      <!-- 
      <b-row class="mb-3">
        <InputWithTitle class="col" inputId="nameInput" title="Meno" :model="name"/>
        <InputWithTitle class="col" inputId="surnameInput" title="Priezvisko" :model="surname"/>
      </b-row>
      -->
    </b-col>
    <p class="mb-3 text-md-emp form-card-title">Doplňujúce informácie</p>
    <b-row class="mb-3">
      <p class="mb-1 text-md-emp form-card-title">O mne</p>
      <b-col>
        <b-form-textarea
          id="textarea-no-resize"
          class="about-user"
          placeholder="O mne..."
          rows="4"
          no-resize
        ></b-form-textarea>
      </b-col>
    </b-row>
    <p class="text-md-emp form-card-title">Dátum registrácie: 11.12. 2022</p>
  </form>
  <div class="d-flex justify-content-end mt-3">
    <button type="submit" class="my-btn my-primary-btn me-2" @click="sendForm">
      Odoslať
    </button>
    <button type="submit" class="my-btn" @click="$emit('hide')">Zrušiť</button>
  </div>
</template>

<script>
import axios from "axios";
import InputWithTitle from "@/components/form/InputWithTitle.vue";

export default {
  components: { InputWithTitle },
  emits: ["hide"],
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      title: "",
    };
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
