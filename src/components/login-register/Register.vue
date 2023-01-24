<template>
  <div class="register">
    <div class="flex-container">
      <div class="register__interface">
        <div class="wrapper-padding">
          <header class="user-access__header">
            <h3 class="user-access__heading">Registrácia</h3>
            <img
                :src="require('@/assets/icons/close-icon.svg')"
                alt="close icon"
                class="close-icon"
                @click="$emit('hideRegister')"
            />
          </header>
          <figcaption class="user-access__figcaption">
            Zaregistrujte sa a odomknite pravú tvar Librarianu
          </figcaption>
          <div class="register__interface__integration">
            <button class="integration__btn" type="submit">Apple</button>
            <button class="integration__btn" type="submit">Google</button>
          </div>
          <p class="user-access__paragraph">Alebo</p>
          <div class="user-access__get-in">
            <div class="user-access__get-in__box">
              <label for="username">
                Meno používateľa<span style="color: red" class="text-underlined">*</span>
              </label>
              <input type="text" name="username"/>
            </div>
            <div class="user-access__get-in__box">
              <label for="mail">
                Email<span style="color: red" class="text-underlined">*</span>
              </label>
              <input type="email" name="mail"/>
            </div>
            <div class="user-access__get-in__box">
              <label for="password">
                Heslo<span style="color: red" class="text-underlined">*</span>
              </label>
              <input :type="type" name="password"/>
              <img
                  :src="require('@/assets/icons/eye.svg')"
                  alt="show password icon"
                  class="password-toggle"
                  @click="togglePasswordVisibility"
              />
            </div>
          </div>
          <button class="login-btn" type="submit">Prihlásiť sa</button>
          <p class="user-access__paragraph">Ste zaregistrovaný? <span class="text-underlined cursor-pointer" @click="$emit('hideRegister')">Prihlásite sa</span></p>

        </div>
      </div>
      <div class="register__illustration">
        <img
            :src="require('@/assets/images/illustration.png')"
            alt="illustration image"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  emits: ["hideRegister"],
  components: {},
  data() {
    return {
      type: "password",
      user: {
        emial: "",
        password: "",
      },
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.type = this.type === "text" ? "password" : "text";
    },
  },
};
</script>
