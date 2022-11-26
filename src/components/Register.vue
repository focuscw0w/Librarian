<template>
  <div class="register">
    <div class="flex-container">
      <div class="register__interface">
        <div class="register__interface__wrapper">
          <header class="register__interface__header">
            <h3 class="register__interface__heading">Registrácia</h3>
            <img src="../assets/icons/close-icon.svg" alt="close icon" />
          </header>
          <figcaption class="register__interface__figcaption">
            Zaregistrujte sa a odomknite mravu tvar Librarianu
          </figcaption>
          <div class="register__interface__integration">
            <button class="integration__btn" type="submit">Apple</button>
            <button class="integration__btn" type="submit">Google</button>
          </div>
        </div>
      </div>
      <div class="register__illustration">
        <img src="../assets/images/illustration.png" alt="illustration image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>
