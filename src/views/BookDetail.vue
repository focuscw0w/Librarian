<template>
  <section class="book-list-page ">
    <div class="book-list__header container">
      <div class="">
        <div class="flex-container">
          <!-- Router link -->
          <button class="book-list__btn-previous">
            <img src="@/assets/icons/arrow-left.svg" alt="previous page" />
          </button>
          <h4 class="book-list__heading">
            <strong class="book-list__page-name">Zoznam kníh</strong> /
            <span class="book-list__book-name">
              <!--  Zaklínač IV.: Čas opovrhnutia  -->
              {{ $store.state.currentBook.name }}
            </span>
          </h4>
        </div>
      </div>
    </div>
    <div class="book-list__product ">
      <div class="container">
        <div class="flex-container">
          <div
            class="book-list__product_image"
            @mouseover="fullScreenBtn = true"
            @mouseleave="fullScreenBtn = false"
          >
            <img src="@/assets/images/book-product.jpg" alt="book" />
            <button v-if="fullScreenBtn" type="submit" class="fullscreen-btn">
              <img
                src="@/assets/icons/bx-fullscreen.svg"
                alt="see book"
                class="fullscreen-img"
              />
            </button>
          </div>
          <article class="book-list__product-info">
            <div class="flex-container">
              <h5 class="book-list__product__genres">
                <strong class="book-list__product__genre">Beletria</strong>
                /
                <strong class="book-list__product__genre"
                  >Scifi a fantasy</strong
                >
                /
                <strong class="book-list__product__genre">Fantasy</strong>
                /
                <span class="book-list__product__name"
                  >{{$store.state.currentBook.name}}</span
                >
              </h5>
              <h3 class="book-list__product__heading">
                {{$store.state.currentBook.name}}
              </h3>
              <figcaption class="book-list__product__author">
                Andrzej Sapkowski, Druhy Autor
                <span class="book-list__product__next-author">ďaľší...</span>
              </figcaption>
              <p class="book-list__product__info">
                Magický rozprávač na výprave do hraničných oblastí sveta temnoty
                a chaosu. Geralt naďalej pátra po zlopovestnom tajomnom
                Riencovi, ktorý Ciri vytrvalo prenasleduje. Mierová dohoda je
                krehká a schyľuje sa k vojne s Nilfgaardom. Cintra v jeho
                područí je tiež ohrozená. Na veľkom sneme čarodejov, ktorých
                vylúčili z mocenských bojov, dôjde k nebezpečnému prevratu a
                Ciri v dôsledku intríg len o vlások unikne smrteľnému
                nebezpečenstvu. Bojuje sa potichu, zákerne a kruto. Na tomto
                vojnovom besnení sa priživuje čudná zberba, ktorá z neho vzišla,
                a ľudia zoči-voči smrti opovrhujú svetom plným chaosu. Ciri,
                opustená a stratená v neznámom púštnom svete, nemôže uveriť, že
                ju zradili...
              </p>
              <ul class="book-list__product__library">
                <li>
                  Vydavateľstvo
                  <strong class="book-list__library-publisher"
                    >Verejná knižnica</strong
                  >
                </li>
                <li>
                  Dátum
                  <strong class="book-list__release-date">
                    Verejná knižnica
                  </strong>
                </li>
                <li>
                  ISBN
                  <strong class="book-list__isbn"> Verejná knižnica </strong>
                </li>
              </ul>
              <div class="book-list__product__controls">
                <button type="submit" class="like-btn" @click="toggle">
                  <AnimationIcon
                    class="toggle-favorite__icon"
                    :class="iconClasses"
                    @animationend="onIconAnimationEnds"
                  />
                </button>
                <button type="submit" class="book-list__product__find-book">
                  Hľadať v knižniciach
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
    <footer class="book-list__footer">
      <div class="">
        <h4>
          <strong class="book-list__footer__heading">Foooooter</strong>
          <br />
          <strong class="book-list__footer__heading">librarianu</strong>
        </h4>
        <p class="book-list__footer__paragraph">
          Vyhľadávanie kníh v knižniciach nikdy <br />
          nebolo jednoduchšie. Vytvorené <br />
          (budúcim bc.) Jakubom Rončakom.
        </p>
      </div>
    </footer>
    <PageFooter />
  </section>
</template>

<script>
import AnimationIcon from "@/components/AnimationIcon.vue";
import PageFooter from "../components/PageFooter.vue";
export default {
  components: { AnimationIcon, PageFooter },
  data() {
    return {
      favorited: false,
      animating: false,
      fullScreenBtn: false,
    };
  },
  computed: {
    iconClasses() {
      return {
        "toggle-favorite__icon--favorited": this.favorited,
        "toggle-favorite__icon--animate": this.animating,
      };
    },
  },
  methods: {
    toggle() {
      if (!this.favorited) {
        this.animating = true;
      }

      this.favorited = !this.favorited;
    },
    onIconAnimationEnds() {
      this.animating = false;
    },
  },
};
</script>
