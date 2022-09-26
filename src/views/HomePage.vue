<template>
  <section class="introduction">
      <div class="container">

        <div class="introduction__background">
          <img src="../assets/background.webp" alt="background image">
        </div>

        <article class="about">
            <div class="flex-container">
              <div class="about__library">
                <h2 class="main-heading">Oravská knižnica Antona Habovštiaka</h2>
                <figcaption class="heading-figcaption">Verejná knižnica</figcaption>
              </div>

              <div class="about__library__media">
                <div class="flex-container">
                  <!-- router link -->
                  <a href="#" class="navigate-btn">Navigovať</a>
  
                  <button class="like-btn"><img src="../assets/icons/bx-heart.svg" alt="like button"></button>
                  <button class="save-btn"><img src="../assets/icons/bx-save.svg" alt="save button"></button>
                </div>
              </div>
            </div>
          </article>

          <SecondaryNavigation />
      </div>
    </section>

    <main class="main">
      <div class="split-page container">

        <News />
        
        <NewsAside />
  
      </div>
    </main>

</template>

<script>
import SecondaryNavigation from '../components/SecondaryNavigation.vue';
import News from '../components/News.vue';
import NewsAside from '../components/NewsAside.vue';

export default {
  name: 'HomePage',
  components: {SecondaryNavigation, News, NewsAside}
}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';
</style>