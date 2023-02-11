<template>
  <section class="author-list-page detail-page">
    <SubHeader />
    <div class="author">
      <div class="container">
        <div class="flex-container">
          <img
            src="@/assets/images/author-img.jpg"
            class="author__image"
            alt="author"
          />
          <article class="author__information">
            <h4 class="author__information__heading">Andrzej Sapkowski</h4>
            <p class="author__information__life-length">
              * 15. Jun 1948 † Tu by bol keby bol
            </p>
            <p class="author__information__biography mb-4">
              Narodil sa 21. júna 1948 v Lodži. Vyštudoval ekonómiu na Lodžskej
              univerzite, pracoval v zahraničnom obchode.[2] Debutoval v roku
              1986 v poviedkovej súťaži magazínu Fantastyka so svojou poviedkou
              Wiedźmin (slov. Zaklínač), v ktorej predstavil postavu
              bielovlasého nájomného zabijaka mýtických príšer, Geralta z Rivie,
              ktorý sa neskôr stal jeho najpopulárnejšou postavou.[3] Poviedka
              sa v súťaži umiestnila na treťom mieste, ale získala si vysoký
              záujem čitateľov.[2]
            </p>
            <p class="author__information__biography">
              Sapkowski pokračoval v tvorbe ďalšími šiestimi poviedkami, ktoré
              naďalej publikoval vo Fantastyke (neskôr pokračoval v obnovenom
              magazíne pod názvom Nowa Fantastyka).[2][1] Tieto príbehy následne
              vyšli v roku 1990 v zbierke poviedok Wiedźmin a v roku 1993 ako
              zbierky poviedok Ostatne citaj viac…
            </p>
          </article>
        </div>
        <nav class="secondary-nav pb-3">
          <ul class="mb-0 ps-0">
            <li><a class="active">Beletria</a></li>
            <li><a>Sci-fi</a></li>
            <li><a>Fantasy</a></li>
            <li><a>A oveľa viac</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="product-items">
      <div class="container">
        <ul class="product-items__ul grid-container">
          <AuthorProduct v-for="Product in 12" :key="Product" />
        </ul>
      </div>
    </div>
    <SubFooter />
    <PageFooter />
  </section>
</template>

<script>
import SecondaryNavigation from "@/components/SecondaryNavigation";
import SubHeader from "@/components/SubHeader.vue";
import SubFooter from "@/components/SubFooter";
import PageFooter from "@/components/PageFooter";
import AuthorProduct from "@/components/creator-detail/AuthorProduct.vue";
export default {
  components: {
    SubHeader,
    SecondaryNavigation,
    SubFooter,
    PageFooter,
    AuthorProduct,
  },
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
