<template>
  <div class="map-container">
    <GMapMap
      :center="center"
      :zoom="12"
      map-type-id="terrain"
      style="width: 100%; height: 100vh"
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
      />

      <!--
    </GMapCluster>  
    -->
    </GMapMap>

    <SearchBookForm />

  </div>
</template>

<script>
import axios from "axios";
import SearchBookForm from '../components/SearchBookForm.vue';

export default {
  components: {SearchBookForm},
  data() {
    return {
      center: { lat: 0, lng: 0 },
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
            console.log(error.message);
          }
        );
      } else {
        console.log("lokácia neprebehla úspešne");
      }
    },
    getAddressFrom(lat, long) {
      this.center.lat = lat;
      this.center.lng = long;

      let marker = this.markers[0].position
      marker.lat = lat
      marker.lng = long

    },
    showStore() {
      console.log('works')
    }
  },
  mounted() {
    this.getCurrentPosition();
  },
};
</script>

<style lang="scss">
@import "../assets/scss/main.scss";
</style>
