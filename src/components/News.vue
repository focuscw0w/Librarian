<template>

<div class="split-page container">

    <section class="news">
      <article class="news__article">
        <div class="flex-container padding">
          <header class="news__article__header">
            <h4 class="article-heading">
              Oravská knižnica Antóna Hrabovštiaka
            </h4>
            <figcaption class="date-figcaption">8. augusta</figcaption>
          </header>

          <a href="#"
            ><img src="../assets/icons/bx-cog.svg" alt="settings icon"
          /></a>
        </div>

        <div class="news__article__image">
          <img src="../assets/images/article-img.jpg" alt="Article image" />
        </div>

        <footer class="news__article__footer padding">
          <div class="flex-container">
            <p class="about-event">
              <span class="location"
                ><img
                  class="location-img"
                  src="../assets/icons/bx-current-location.svg"
                  alt="location icon"
                />
                Zemianská Lúčka</span
              >
              | Túto krásnu lúku sme kúpili, aby sme ju zaliali betónom a
              postavili na nom garáže a parkovacie miesta pre vás všetkých
            </p>

            <div class="media">
              <img src="../assets/icons/bx-heart.svg" alt="like button" />
              <img src="../assets/icons/bx-save.svg" alt="save button" />
              <img src="../assets/icons/bx-comment.svg" alt="comment button" />
            </div>
          </div>
        </footer>
      </article>

      <article class="news__article margin-top">
        <div class="flex-container padding">
          <header class="news__article__header">
            <h4 class="article-heading">
              Oravská knižnica Antóna Hrabovštiaka
            </h4>
            <figcaption class="date-figcaption">8. augusta</figcaption>
          </header>

          <a href="#"
            ><img src="../assets/icons/bx-cog.svg" alt="settings icon"
          /></a>
        </div>

        <div class="news__article__image">
          <img
            src="../assets/images/background-competition.png"
            alt="Article image"
          />
        </div>

        <footer class="news__article__footer padding">
          <div class="flex-container">
            <div class="wrapper">
              <div class="details">
                <p class="mark">
                  <img src="../assets/icons/bx-trophy.svg" alt="" />Súťaž
                </p>
                <p>Trvanie: <span class="date">1. marec - 15. marec</span></p>
              </div>

              <p class="about-event">
                Chcete vyhrať balíček kníh od Ikaru? Zapojte sa do súťaže tak ,
                že nám na email tvojpipikjekratky@haha.com fotku vašej poličky s
                ...
              </p>
            </div>

            <div class="media">
              <img src="../assets/icons/bx-heart.svg" alt="like button" />
              <img src="../assets/icons/bx-save.svg" alt="save button" />
              <img src="../assets/icons/bx-comment.svg" alt="comment button" />
            </div>
          </div>
        </footer>
      </article>

      <article class="news__article margin-top">
        <div class="flex-container padding">
          <header class="news__article__header">
            <h4 class="article-heading">
              Oravská knižnica Antóna Hrabovštiaka
            </h4>
            <figcaption class="date-figcaption">8. augusta</figcaption>
          </header>

          <a href="#"
            ><img src="../assets/icons/bx-cog.svg" alt="settings icon"
          /></a>
        </div>

        <div class="news__article__image">
          <img
            src="../assets/images/background-competition.png"
            alt="Article image"
          />
        </div>

        <footer class="news__article__footer padding">
          <div class="flex-container">
            <div class="wrapper">
              <div class="details">
                <p class="mark">
                  <img src="../assets/icons/bx-trophy.svg" alt="" />Súťaž
                </p>
                <p>Dátum a čas <span class="date">15. August, 15:00</span></p>
                <p>Trvanie: <span class="date">2 hodiny</span></p>
              </div>

              <p class="about-event">
                Chcete vyhrať balíček kníh od Ikaru? Zapojte sa do súťaže tak ,
                že nám na email tvojpipikjekratky@haha.com fotku vašej poličky s
                ...
              </p>
            </div>

            <div class="media">
              <img src="../assets/icons/bx-heart.svg" alt="like button" />
              <img src="../assets/icons/bx-save.svg" alt="save button" />
              <img src="../assets/icons/bx-comment.svg" alt="comment button" />
            </div>
          </div>
        </footer>
      </article>
    </section>

    <NewsAside />
  </div>

</template>

<script>
import NewsAside from '../components/NewsAside.vue';
export default {
  components: { NewsAside }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>
