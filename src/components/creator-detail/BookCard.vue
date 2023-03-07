<template>
  <li class="product-items__ul__product bg-2">
    <div class="flex-container">
      <img
        src="@/assets/images/book-product.jpg"
        class="product-items__ul__image"
        alt="book"
      />
      <article class="product-items__ul__book-info bg-2">
        <span class="book-info__genre">Fantasy</span>
        <h4 class="book-info__heading">Zaklínač IV.: Čas opovrhnutia</h4>
        <figcaption class="product__author-name">
          Andrzej Sapkowski, Druhy Autor
          <span class="product__next-author">ďaľší...</span>
        </figcaption>
        <p class="book-info__paragraph">
          Magický rozprávač na výprave do hraničných oblastí sveta temnoty a
          chaosu. Geralt naďalej pátra po zlopovestnom tajomnom Riencovi, ktorý
          Ciri vytrvalo prenasleduje citaj viac…
        </p>
        <div class="book-info__media d-flex">
          <FindBookBtn />
          <button type="submit" class="like-btn" @click="toggle">
            <AnimationIcon
              class="toggle-favorite__icon"
              :class="iconClasses"
              @animationend="onIconAnimationEnds"
            />
          </button>
        </div>
      </article>
    </div>
  </li>
</template>

<script>
import FindBookBtn from "@/components/FindBookBtn.vue";
import AnimationIcon from "@/components/AnimationIcon.vue";
export default {
  components: { FindBookBtn, AnimationIcon },
  data() {
    return {
      favorited: false,
      animating: false,
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
    showComponent(contentToShow) {},
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
