<template>
  <div>
    <FilterProduct v-if="activeFilterProduct"/>

    <SelectedBook
        v-if="activeFilterProduct"
        :bookData="book"
        @hideFilterProduct="activeFilterProduct = false"
    />
    <div class="map-container">
      <GMapMap
          ref="myMapRef"
          :center="center"
          :maxZoom="10"
          :zoom="zoom"
          :restriction="{
          latLngBounds: slovakiaBounds,
          strictBounds: false,
        }"
          v-bind:options="mapStyle"
          style="width: 100%; height: 100vh"
          :class="{ dark: darkGoogleMap }"
          @click="currentLibrary = null"
      >
        <GMapMarker
            :key="index"
            v-for="(m, index) in libraryLocation"
            :position="m"
            :clickable="true"
            :icon="m.icon"
            @click="showStore(index)"
            @mouseover="toggleIcon(true, index)"
            @mouseout="toggleIcon(false, index)"
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
            @addBook="book = $event"
            @activeFilterProduct="activeFilterProduct = true"
            @darkGoogleMap="darkGoogleMap = $event"
        />
      </div>
    </div>
  </div>

  <Introduction v-if="$store.state.activeIntroduction"/>

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
      book: {},
      map: null,
      currentLibrary: null,
      showBook: null,
      hideFilterProduct: null,
      blurEffect: true,
      darkGoogleMap: false,
      close: false,
      openedInfo: false,
      activeFilterProduct: false,
      zoom: 10,
      center: {lat: 49.219631, lng: 18.74222},
      slovakiaBounds: {
        north: 49.87026137082037,
        south: 47.65664527385194,
        east: 23.590802234193244,
        west: 16.313703742420486,
      },
      mapStyle: {
        styles: [
          {
            "featureType": "landscape.natural",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "simplified"
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    getCurrentPosition() {
      // if (navigator.geolocation) {
      //   navigator.geolocation.getCurrentPosition(
      //     (position) => {
      //       this.getAddressFrom(
      //         position.coords.latitude,
      //         position.coords.longitude
      //       );
      //     },
      //     (error) => {
      //       //SLOVAKIA
      //       this.center.lat = 48.669026;
      //       this.center.lng = 19.699024;
      //       this.zoom = 9;
      //     }
      //   );
      // } else {
      //   console.log("lokácia neprebehla úspešne");
      // }
    },
    getAddressFrom(lat, long) {
      this.center.lat = lat;
      this.center.lng = long;
      this.zoom = 12;
    },
    showStore(id) {
      this.currentLibrary = id;
    },
    toggleIcon(statement, index) {
      this.libraryLocation[index].icon =
          statement === true
              ? require("../assets/icons/Point_book_active.png")
              : require("../assets/icons/Point_book.png");
    },
  },
  async created() {
    this.$store.state.blurEffect =
        localStorage.getItem("activeIntroduction") == null ? true : false;

    this.$store.state.activeIntroduction =
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
      icon: require("../assets/icons/Point_book.png"),
    }));
  },
  mounted() {
    this.getCurrentPosition();
  },
};
</script>
