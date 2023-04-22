<template>
  <section
    class="book-list-page detail-page"
    v-if="book"
    style="padding-top: 70px"
  >
    <VueTitle :title="book.name" />
    <SubHeader category="Zoznam kníh" :title="book.name" />
    <div class="book-list__product">
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
          <article class="book-list__product-info bg-2">
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
                <span class="book-list__product__name">{{ book.name }}</span>
              </h5>
              <h3 class="book-list__product__heading">
                {{ book.name }}
              </h3>
              <figcaption class="product__author-name">
                <span v-for="(creator, index) in book.creators" :key="index">
                  <router-link :key="creator.id" :to="'/autor/' + creator.slug">
                    {{ creator.name }} </router-link
                  ><span v-if="index !== book.creators.length - 1">, </span>
                </span>
                <!--                <span class="product__next-author">ďaľší...</span>-->
              </figcaption>
              <p class="book-list__product__info">
                {{ book.long_description }}
              </p>
              <ul class="book-list__product__library">
                <li>
                  Vydavateľstvo
                  <strong class="book-list__library-publisher">{{
                    book.publisher.name ?? "-"
                  }}</strong>
                </li>
                <li>
                  Dátum
                  <strong class="book-list__release-date">
                    {{ formattedPublishedOn }}
                  </strong>
                </li>
                <li>
                  ISBN
                  <strong class="book-list__isbn">
                    {{ book.isbn_10 ?? book.isbn_13 ?? "-" }}
                  </strong>
                </li>
              </ul>
              <div class="book-list__product__controls">
                <button
                  v-if="$store.state.loggedUser"
                  type="submit"
                  class="like-btn"
                  @click="toggle"
                >
                  <AnimationIcon
                    class="toggle-favorite__icon"
                    :class="iconClasses"
                    @animationend="onIconAnimationEnds"
                  />
                </button>
                <button type="submit" class="my-btn">Rezervovať</button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

    <b-button variant="success" @click="makeToast('success')" class="mb-2">Success</b-button>

    <SubFooter />
    <PageFooter />
  </section>
</template>

<script>
import AnimationIcon from "@/components/AnimationIcon.vue";
import PageFooter from "@/components/PageFooter.vue";
import SubHeader from "@/components/SubHeader.vue";
import SubFooter from "@/components/SubFooter.vue";
import FindBookBtn from "@/components/FindBookBtn";
import axios from "axios";
import VueTitle from "@/utilities/vue-title.vue";
import dateFormat, { masks } from "dateformat";

export default {
  components: {
    AnimationIcon,
    PageFooter,
    SubHeader,
    FindBookBtn,
    SubFooter,
    VueTitle,
  },
  data() {
    return {
      favorited: false,
      animating: false,
      fullScreenBtn: false,
      title: "",
      // loadedItem: false,
      book: null,
    };
  },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData();
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    );
  },
  computed: {
    iconClasses() {
      return {
        "toggle-favorite__icon--favorited": this.favorited,
        "toggle-favorite__icon--animate": this.animating,
      };
    },
    formattedPublishedOn() {
      if (this.book.published_on) {
        return dateFormat(new Date(this.book.published_on), "d.m.yyyy");
      } else {
        return null;
      }
    },
  },
  methods: {
    async toggle() {
      const id = this.book.id;
      const url = "/books/" + id + (this.favorited ? "/dislike" : "/like");

      try {
        this.animating = true;
        this.favorited = !this.favorited;
        await axios.post(url);
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    },
    onIconAnimationEnds() {
      this.animating = false;
    },
    async fetchData() {
      await axios.get("books/" + this.$route.params.slug).then((response) => {
        this.book = response.data;
      });
    },
     makeToast(variant = null) {
        this.$bvToast.toast('Toast body content', {
          title: `Variant ${variant || 'default'}`,
          variant: variant,
          solid: true
        })
      }
  },
};
</script>
