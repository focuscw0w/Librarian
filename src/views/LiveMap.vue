<template>
  <div>
    <FilterProduct v-if="activeFilterProduct"
                   @onApplyFilter="reloadLibraries"
    />

    <div class="map-container">
      <SelectedBook
          v-if="activeFilterProduct"
          :bookData="book"
          @hideFilterProduct="activeFilterProduct = false;reloadLibraries()"
      />
      <GMapMap
          ref="myMapRef"
          :center="center"
          :maxZoom="10"
          :zoom="zoom"
          :restriction="{
          latLngBounds: slovakiaBounds,
          strictBounds: false,
        }"
          mapTypeControl: false
          v-bind:options="mapStyle"
          style="width: 100%; height: 100vh"
          :class="{ dark: darkGoogleMap }"
          @click="showInfoWindow(null)"
      >
        <GMapMarker
            class="w-75"
            :key="index"
            v-for="(library, index) in libraries"
            :position="library"
            :clickable="true"
            :icon="library.icon"
            @click="showInfoWindow(index)"
            @mouseover="toggleIcon(true, index)"
            @mouseout="toggleIcon(false, index)"
        >
          <GMapInfoWindow :opened="currentLibrary === index">
            <InfoWindow :library="library" :selectedBook="book"/>
          </GMapInfoWindow>
        </GMapMarker>
      </GMapMap>

      <div class="search-wrapper" @click="showInfoWindow(null)">
        <SearchBookForm

            @addBook="book = $event;
            reloadLibraries({'book_id' : book.id})"
            @activeFilterProduct="activeFilterProduct = true"
            @darkGoogleMap="darkGoogleMap = $event"
        />
      </div>
    </div>
  </div>

  <div v-if="openRegister" class="dead-background"></div>
</template>

<script>
import SearchBookForm from "../components/search-book/SearchBookForm.vue";
import SearchBookList from "../components/search-book/SearchBookList.vue";
import SelectedBook from "../components/filter-book/SelectedBook.vue";
import InfoWindow from "../components/InfoWindow.vue";
import FilterProduct from "../components/filter-book/FilterProduct.vue";
import axios from "axios";

export default {
  props: ["openRegister", "openLogin"],
  components: {
    SearchBookForm,
    SearchBookList,
    InfoWindow,
    FilterProduct,
    SelectedBook,
  },
  data() {
    return {
      libraries: [],
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
        // TODO: toto by bolo super dat niekde do ineho suboru
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
    // getCurrentPosition() {
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
    // },
    // getAddressFrom(lat, long) {
    //   this.center.lat = lat;
    //   this.center.lng = long;
    //   this.zoom = 12;
    // },
    showInfoWindow(index) {
      if (this.currentLibrary// || index === null
      ) {
        this.libraries[this.currentLibrary].icon = require("../assets/icons/Point_book.png");
      }
      this.currentLibrary = index;
      if (index !== null) {
        this.libraries[index].icon = require("../assets/icons/Point_book_active.png");
      }
    },
    reloadLibraries(data) {
      // console.log('prisloo')
      // console.log(data)
      this.fetchLibraries(data)
    },

    async fetchLibraries(data) {
      await axios
          .get("libraries", {params: data})
          .then((response) => {
            this.libraries = response.data.map((library) => {
              library.icon = require("../assets/icons/Point_book.png")
              library.lat = parseFloat(library.lat)
              library.lng = parseFloat(library.long)
              delete library.long;
              return library;
            })
          });
    },
    toggleIcon(statement, index) {
      // Ak už je aktívna, nechcem s ňou nič robiť
      if (index !== this.currentLibrary) {
        this.libraries[index].icon =
            statement === true
                ? require("../assets/icons/Point_book_active.png")
                : require("../assets/icons/Point_book.png");
      }
    },
  },
  async created() {
    this.$store.state.blurEffect =
        localStorage.getItem("activeIntroduction") == null ? true : false;

    this.$store.state.activeIntroduction =
        localStorage.getItem("activeIntroduction") == null ? true : false;
    this.fetchLibraries({})
    // return library
    //     {
    //   id: library.id,
    //   slug: library.slug,
    //   libraryName: library.name,
    //   libraryCity: library.city,
    //   libraryStreet: library.street,
    //   libraryPostCode: library.post_code,
    //   libraryHouseNumber: library.house_number,
    //   libraryTime: library.todayBusinessHoursStatusMarginTime,
    //   libraryStatus: library.todayBusinessHoursStatus,
    //   lat: parseFloat(library.lat),
    //   lng: parseFloat(library.long),
    //   icon: require("../assets/icons/Point_book.png"),
    // }
    // });
  },
  // mounted() {
  //   // this.getCurrentPosition();
  // },
};
</script>
