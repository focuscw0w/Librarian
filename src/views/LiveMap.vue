<template>
  <div class="map-container">
    <GMapMap
      :center="center"
      :zoom="zoom"
      map-type-id="terrain"
      style="width: 100%; height: 100vh"
      @click="this.openedInfo = false"
    >
      <!--
      <GMapCluster>
    -->

      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="showStore"
      >
        <GMapInfoWindow :opened="openedInfo">
          <InfoWindow />
        </GMapInfoWindow>
      </GMapMarker>
      <!--
    </GMapCluster>  
    -->
    </GMapMap>

    <!-- Spraviť scss file na containeri -->
    <div class="search-wrapper">
      <SearchBookForm @addBook="this.bookName = $event" />
    </div>
  </div>

  <FilterProduct @closeSelectedBook="close = false" />

  <SelectedBook :bookName="bookName" :closeSelectedBook="close" />

  <Introduction />
</template>

<script>
import SearchBookForm from "../components/SearchBookForm.vue";
import SearchBookList from "../components/SearchBookList.vue";
import InfoWindow from "../components/InfoWindow.vue";
import FilterProduct from "../components/FilterProduct.vue";
import SelectedBook from "../components/SelectedBook.vue";
import Introduction from "../components/Introduction.vue";

export default {
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
      bookName: "",
      close: false,
      showBook: null,
      openedInfo: false,
      zoom: 11,
      center: { lat: 49.219631, lng: 18.74222 },
      markers: [
        {
          position: {
            lat: 0,
            lng: 0,
          },
        },
      ],
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

      let marker = this.markers[0].position;
      marker.lat = lat;
      marker.lng = long;
    },
    showStore() {
      this.openedInfo = !this.openedInfo;
    },
  },
  mounted() {
    this.getCurrentPosition();
  },
};
</script>

<style lang="scss">
@import "../assets/scss/main.scss";
</style>
