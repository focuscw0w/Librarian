<template>
  <!-- refactor class names -->
  <li class="product-items__ul__product bg-2">
    <div class="flex-container">
      <router-link :to="(isBook ? '/kniha/' : '/autor/')+productData.slug" >
      <img
          :src="require(`@/assets/images/${image}`)"
          class="product-items__ul__image"
          alt="book"
      />
      </router-link>

      <article class="product-items__ul__book-info bg-2">
        <div v-if="isBook" class="book-info__genre">
          <span>
            {{ productData.category.name }}
          </span>
        </div>
        <router-link :to="(isBook ? '/kniha/' : '/autor/')+productData.slug" class="book-info__heading">
          {{ productData.name }}
        </router-link>
        <figcaption v-if="isBook" class="product__author-name">
          <!-- Andrzej Sapkowski, Druhy Autor -->
          <span v-for="creator in productData.creators" :key="creator">
            {{ creator.name }},
          </span>
          <span class="product__next-author">ďaľší...</span>
        </figcaption>
        <figcaption v-else class="product__author-name">
          Beletria, Sci-fi, Fantasy
        </figcaption>
        <p v-if="isBook" class="book-info__paragraph">
          {{ productData.short_description }}
        </p>
        <p v-else class="book-info__paragraph">
          {{ productData.description }}
        </p>
        <div class="book-info__media d-flex align-items-center">
          <router-link :to="(isBook ? '/kniha/' : '/autor/')+productData.slug" v-if="isListPage" class="my-btn">
            Zobraziť detail
          </router-link>
          <button v-else type="submit" class="my-btn">
            Hľadať v knižniciach
          </button>
          <button
              v-if="!isListPage && $store.state.loggedUser"
              type="submit"
              class="like-btn"
              @click="toggle"
          >
            <AnimationIcon
                v-if="$store.state.loggedUser"
                class="toggle-favorite__icon"
                :class="iconClasses"
                @animationend="onIconAnimationEnds"
            />
          </button>
          <p v-if="isBook && isListPage" class="size-15 text-h-emp">
            Hľadať v knižniciach
          </p>
        </div>
      </article>
    </div>
  </li>
</template>

<script>
import FindBookBtn from "@/components/FindBookBtn.vue";
import AnimationIcon from "@/components/AnimationIcon.vue";

export default {
  components: {FindBookBtn, AnimationIcon},
  props: ["isBook", "isListPage", "image", "productData",],
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
