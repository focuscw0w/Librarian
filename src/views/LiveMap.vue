<template>
  <div class="map-container">
    <GMapMap
      :center="center"
      :zoom="zoom"
      map-type-id="terrain"
      style="width: 100%; height: 100vh"
      ref="map"
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
          <article class="info-window">
            <div class="flex-container">
              <img
                src="../assets/images/book-store-illustration.jpg"
                alt="store image"
                class="store-img"
              />
              <div class="store-informations">
                <div class="flex-container">
                  <h4 class="store-informations__heading">
                    Oravská knižnica Antóna Habovštiaka
                  </h4>
                  <p class="opened-p">
                    <span class="opened">Otvorené</span>do 19:00
                  </p>
                  <p class="store-informations__address">
                    Samuela Nováka 1763, 026 01 Dolný Kubín
                  </p>
                  <div class="store-informations__media">
                    <div class="flex-container">
                      <button class="book-list">Zoznam kníh</button>
                      <span class="media-icon"
                        ><img
                          src="../assets/icons/route-icon.svg"
                          alt="route icon"
                      /></span>
                      <span class="media-icon"
                        ><img
                          src="../assets/icons/bx-heart.svg"
                          alt="like icon"
                      /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </GMapInfoWindow>
      </GMapMarker>
      <!--
    </GMapCluster>  
    -->
    </GMapMap>

    <SearchBookForm />
  </div>
</template>

<script>
import axios from "axios";
import SearchBookForm from "../components/SearchBookForm.vue";

export default {
  components: { SearchBookForm },
  data() {
    return {
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
