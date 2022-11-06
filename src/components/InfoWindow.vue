<template>
  <article class="info-window">
    <div class="flex-container">
      <div class="info-window__store">
        <img
          src="../assets/images/book-store-illustration.jpg"
          alt="store image"
          class="store-img"
        />
      </div>
      <div class="store-informations">
        <div class="flex-container">
          <router-link tag="h4" class="store-informations__heading" to="/details">Oravská knižnica Antóna Habovštiaka</router-link>
          <p class="opened-p"><span class="opened">Otvorené</span>do 19:00</p>
          <p class="store-informations__address">
            Samuela Nováka 1763 <br>
            026 01 Dolný Kubín
          </p>
          <div class="store-informations__media">
            <div class="flex-container">
              <button class="book-list">Zoznam kníh</button>
              <span class="media-icon"
                ><img src="../assets/icons/route-icon.svg" alt="route icon"
              /></span>
              <span class="media-icon"
                ><img src="../assets/icons/bx-heart.svg" alt="like icon"
              /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>
