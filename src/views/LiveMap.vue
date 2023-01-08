<template>
  <div :class="{ blur: blurEffect || openRegister || openLogin }">
    <div class="map-container">
      <GMapMap
        ref="myMapRef"
        :center="center"
        :maxZoom="10"
        :zoom="zoom"
        :restriction="{
          latLngBounds: slovakiaBounds,
          strictBounds: false
        }"
        map-type-id="terrain"
        style="width: 100%; height: 100vh"
        :class="{ dark: darkGoogleMap }"
        @click="currentLibrary = null"
      >
        <GMapMarker
          :key="index"
          v-for="(m, index) in libraryLocation"
          :position="m"
          :clickable="true"
          @click="showStore(index)"
        >
          <GMapInfoWindow :opened="currentLibrary === index">
            <InfoWindow
              :id="index"
              :libraryName="m.libraryName"
              :libraryCity="m.libraryCity"
              :libraryStreet="m.libraryStreet"
              :libraryPostCode="m.libraryPostCode"
              :libraryHouseNumber="m.libraryHouseNumber"
              :libraryTimeDirection="m.libraryTimeDirection"
              :libraryTime="m.libraryTime"
              :libraryStatus="m.libraryStatus"
            />
          </GMapInfoWindow>
        </GMapMarker>
      </GMapMap>

      <div class="search-wrapper">
        <SearchBookForm
          @addBook="bookName = $event"
          @activeFilterProduct="activeFilterProduct = true"
          @darkGoogleMap="darkGoogleMap = $event"
        />
      </div>
    </div>

    <FilterProduct v-if="activeFilterProduct" />

    <SelectedBook
      v-if="activeFilterProduct"
      :bookName="bookName"
      @hideFilterProduct="activeFilterProduct = false"
    />
  </div>

  <Introduction @hideBlur="blur" />

  <div v-if="openRegister" class="dead-background"></div>
</template>

<script>
import SearchBookForm from "../components/search-book/SearchBookForm.vue";
import SearchBookList from "../components/search-book/SearchBookList.vue";
import SelectedBook from "../components/filter-book/SelectedBook.vue";
import InfoWindow from "../components/InfoWindow.vue";
import FilterProduct from "../components/filter-book/FilterProduct.vue";
import Introduction from "../components/web-introduction/Introduction.vue";
import axios from "axios";

export default {
  props: ["openRegister", "openLogin"],
  emits: ["hideBlur", "hideRegister"],
  components: {
    SearchBookForm,
    SearchBookList,
    InfoWindow,
    FilterProduct,
    SelectedBook,
    Introduction,
  },
  data() {
    return {
      libraries: [],
      libraryLocation: [],
      map: null,
      currentLibrary: null,
      bookName: "",
      showBook: null,
      hideFilterProduct: null,
      blurEffect: true,
      darkGoogleMap: false,
      close: false,
      openedInfo: false,
      activeFilterProduct: false,
      zoom: 10,
      center: { lat: 49.219631, lng: 18.74222 },
      iconSettings: {
        url: require("../assets/icons/bx-book-open.svg"),
      },
      slovakiaBounds: {
        north: 49.87026137082037,
        south: 47.65664527385194,
        east: 23.590802234193244,
        west: 16.313703742420486,
      },
    };
  },
  methods: {
    getCurrentPosition() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.getAddressFrom(
              position.coords.latitude,
              position.coords.longitude
            );
          },
          (error) => {
            //SLOVAKIA
            this.center.lat = 48.669026;
            this.center.lng = 19.699024;
            this.zoom = 9;
          }
        );
      } else {
        console.log("lokácia neprebehla úspešne");
      }
    },
    getAddressFrom(lat, long) {
      this.center.lat = lat;
      this.center.lng = long;
      this.zoom = 12;
    },
    showStore(id) {
      this.currentLibrary = id;
    },
    blur() {
      this.$emit("hideBlur");
      this.blurEffect = false;
    },
  },
  computed: {
    mapCoordinates() {
      if (!this.map) {
        return {
          lat: 0,
          lng: 0,
        };
      }

      return {
        lat: this.test,
        lng: this.map.getCenter().lng(),
      };
    },
  },
  async created() {
    this.blurEffect =
      localStorage.getItem("activeIntroduction") == null ? true : false;

    await axios
      .get("https://api.librarian.sk/api/libraries")
      .then((response) => (this.libraries = response.data));

    this.libraryLocation = this.libraries.map((library) => ({
      id: library.id,
      libraryName: library.name,
      libraryCity: library.city,
      libraryStreet: library.street,
      libraryPostCode: library.post_code,
      libraryHouseNumber: library.house_number,
      libraryTime: library.todayBusinessHoursStatusMarginTime,
      libraryStatus: library.todayBusinessHoursStatus,
      lat: parseFloat(library.lat),
      lng: parseFloat(library.long),
    }));
  },
  mounted() {
    this.getCurrentPosition();
    this.$refs.myMapRef.$mapPromise.then((mapObject) => {
      this.map = mapObject;
    });
  },
};
</script>

<style lang="scss">
@import "../assets/scss/main.scss";
.blur {
  filter: blur(5px);
}
.dead-background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 500;
}
</style>
