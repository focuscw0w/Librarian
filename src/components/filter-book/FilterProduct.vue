<template>
  <div class="filter-product bg-2">
    <h2 class="filter-product__heading">Filtrovanie</h2>

    <div class="search-location">
      <label for="place" class="filter-product__label">Mesto hľadania</label>
      <div class="flex-container justify-content-between">
        <div class="search-location-input-wrapper align-items-center d-flex">
          <BIconSearch alt="search icon"
                       class="search-icon"/>
          <input
              type="text"
              name="place"
              class="bg-1"
              placeholder="Zadajte mesto..."
              autocomplete="off"
              v-model="city"
          />
        </div>
        <span class="radius">
          <div class="flex-container">
            <BIconGeoAlt alt="marker icon"
                         class="marker-icon"/>

            <select v-model="distance" name="" id=""
                    class="form-control w-auto  form-select border-0 shadow-none cursor-pointer ps-0">
          <option value="0">0km</option>
          <option value="10">+10km</option>
          <option value="25">+25km</option>
          <option value="50">+50km</option>
d        </select>


          </div>
        </span>
      </div>
    </div>

    <div class="library-types filter-split">
      <label for="type" class="filter-product__label">Typ knižnice</label>
      <div class="flex-container">
        <div class="left">
          <div class="filter-split__type flex-container">
            <label class="label">
              <input
                  type="checkbox"
                  value="academic"
                  name="academic"
                  id="academic"
                  v-model="library_types"
              />
              <span class="checkmark bg-2"></span>
            </label>
            <label for="academic">Akademická</label>
          </div>
          <div class="filter-split__type flex-container">
            <label class="label">
              <input
                  type="checkbox"
                  value="corporate"
                  name="corporate"
                  id="corporate"
                  v-model="library_types"
              />
              <span class="checkmark bg-2"></span>
            </label>
            <label for="corporate">Firemná</label>
          </div>
          <div class="filter-split__type flex-container">
            <label class="label">
              <input
                  type="checkbox"
                  value="country"
                  name="country"
                  id="country"
                  v-model="library_types"
              />
              <span class="checkmark bg-2"></span>
            </label>
            <label for="country">Krajská</label>
          </div>
        </div>
        <div class="right">
          <div class="filter-split__type flex-container">
            <label class="label">
              <input
                  type="checkbox"
                  value="communal"
                  name="communal"
                  id="communal"
                  v-model="library_types"
              />
              <span class="checkmark bg-2"></span>
            </label>
            <label for="communal">Obecná</label>
          </div>
          <div class="filter-split__type flex-container">
            <label class="label">
              <input
                  type="checkbox"
                  value="regional"
                  name="regional"
                  id="regional"
                  v-model="library_types"
              />
              <span class="checkmark bg-2"></span>
            </label>
            <label for="regional">Regionálna</label>
          </div>
        </div>
      </div>
    </div>

    <div class="library-types filter-split">
      <label for="type" class="filter-product__label">Sľužby knižnice</label>
      <div class="flex-container">
        <div class="left">
          <div class="filter-split__type flex-container">
            <label class="label">
              <input
                  type="checkbox"
                  value="wifi"
                  name="wifi"
                  id="wifi"
                  v-model="services"
              />
              <span class="checkmark bg-2"></span>
            </label>
            <label for="wifi">Wi-fi pripojenie</label>
          </div>
          <div class="filter-split__type flex-container">
            <label class="label">
              <input
                  type="checkbox"
                  value="printer"
                  name="printer"
                  id="printer"
                  v-model="services"
              />
              <span class="checkmark bg-2"></span>
            </label>
            <label for="printer">Možnosť tlače</label>
          </div>
        </div>
        <div class="right">
          <div class="filter-split__type flex-container">
            <label class="label">
              <input
                  type="checkbox"
                  value="cafe"
                  name="cafe"
                  id="cafe"
                  v-model="services"
              />
              <span class="checkmark bg-2"></span>
            </label>
            <label for="cafe">Kaviareň</label>
          </div>
          <div class="filter-split__type flex-container">
            <label class="label">
              <input
                  type="checkbox"
                  value="access"
                  name="access"
                  id="access"
                  v-model="services"
              />
              <span class="checkmark bg-2"></span>
            </label>
            <label for="access">Bezbarierový prístup</label>
          </div>
        </div>
      </div>
    </div>
    <div v-if="visibleFilterButton" class="filter-book-wrapper">
      <button class="filter-book" @click="applyFilter">Aplikuj filter</button>
      <img
          class="close-icon"
          src="@/assets/icons/close-icon.svg"
          alt="close icon"
      />
      <!--                @click="checkedInputs.length = 0"-->
    </div>
  </div>
</template>

<script>
import DropDown from "../DropDown.vue";
import {BIconSearch, BIconGeoAlt} from 'bootstrap-icons-vue';

export default {
  components: {DropDown, BIconSearch, BIconGeoAlt},
  emits: ['onApplyFilter'],
  data() {
    return {
      library_types: [],
      services: [],
      city: '',
      distance: 10,
      // dropDownContent: [{content: "10km"}, {content: "20km"}, {content: "50km"}],
      visibleFilterButton: true,
      // showDropDown: false,
    };
  },
  // watch: {
  //   checkedInputs() {
  //     this.visibleFilterButton = this.checkedInputs.length == 0 ? false : true;
  //   },
  // },
  methods: {
    // dropDown() {
    //   this.showDropDown = !this.showDropDown;
    // },
    applyFilter() {
      this.$emit("onApplyFilter", {
        'city': this.city,
        'distance': this.distance,
        'library_types': this.library_types,
        'services': this.services,
      })
    },
  },
};
</script>

