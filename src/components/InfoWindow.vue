<template>
  <div class="info-window bg-2">
    <div class="flex-container info-window-container">
      <div class="info-window__store">
        <img
            :src="require('../assets/images/book-store-illustration.jpg')"
            alt="store image"
            class="store-img"
        />
      </div>
      <div class="store-informations">
        <div class="flex-container">
          <router-link
              class="store-informations__heading"
              :to="'/kniznica/'+library.slug"
          >
            {{ library.name }}
          </router-link>
          <div class="opened-p">
            <span :class="'fw-bold text-'+( library.todayBusinessHoursStatus === 'closed' ? 'danger' : 'success' )">{{
                library.todayBusinessHoursStatusTranslated
              }}</span> {{ library.todayBusinessHoursStatusMarginTimeDirectionTranslated }} {{
              library.todayBusinessHoursStatusMarginTime
            }}
          </div>
          <div class="store-informations__address">
            {{ library.street }} {{ library.house_number }} <br/>
            {{ library.post_code }} {{ library.city }}
          </div>
          <div class="store-informations__media">
            <div class="flex-container">
              <button @click="reserve" :class="library.is_reserved ? 'my-btn':'filter-book'"
                      v-if="selectedBook && 'is_reserved' in library && actualRole === 'reader'">
                {{ library.is_reserved ? 'Zrušiť rezerváciu' : 'Rezervovať' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <transition name="slide-in">
    <div
        v-if="reservedBook"
        class="success-modal position-absolute bg-light p-3 top-O right-3"
    >
      <p class="text-dark">Akcia bola úspešná!</p>
    </div>
  </transition>
</template>

<script>
import AnimationIcon from "./AnimationIcon.vue";
import axios from "axios";

export default {
  props: [
    "library", 'selectedBook'
  ],
  components: {AnimationIcon},
  data() {
    return {
      favorited: false,
      animating: false,
      reservedBook: false,
      actualRole: null,
    };
  },
  mounted() {
    this.actualRole = localStorage.getItem('roles');
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
    async reserve() {
      await axios
          .post("/libraries/" + this.library.id + "/reservations/" + this.selectedBook.id)
          .then((res) => {
            this.library.is_reserved = res.status === 201;
            this.triggerNotification()
          });
    },
    triggerNotification() {
      this.addedBook = true;
      setTimeout(() => {
        this.addedBook = false;
      }, 2000);
    },
  },
};
</script>


