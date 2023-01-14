<template>
  <div class="filter-product">
    <h2 class="filter-product__heading">Filtrovanie</h2>

    <div class="search-location">
      <label for="place" class="filter-product__label">Miesto hľadania</label>
      <div class="flex-container">
        <img
          class="search-icon"
          :src="require('@/assets/icons/bx-search-alt-2.svg')"
          alt="search icon"
        />
        <input
          type="text"
          name="place"
          placeholder="Zadajte miesto..."
          autocomplete="off"
        />
        <span class="radius">
          <div class="flex-container">
            <img
              :src="require('@/assets/icons/marker-icon.svg')"
              alt="marker icon"
              class="marker-icon"
            />
            +10km
            <img
              :src="require('@/assets/icons/angle-down.svg')"
              alt="arrow icon"
              class="drop-down-icon"
              @click="dropDown"
            />
           
           <DropDown v-if="showDropDown" :dropDownItems="dropDownContent" />

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
                v-model="checkedInputs"
              />
              <span class="checkmark"></span>
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
                v-model="checkedInputs"
              />
              <span class="checkmark"></span>
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
                v-model="checkedInputs"
              />
              <span class="checkmark"></span>
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
                v-model="checkedInputs"
              />
              <span class="checkmark"></span>
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
                v-model="checkedInputs"
              />
              <span class="checkmark"></span>
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
                v-model="checkedInputs"
              />
              <span class="checkmark"></span>
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
                v-model="checkedInputs"
              />
              <span class="checkmark"></span>
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
                v-model="checkedInputs"
              />
              <span class="checkmark"></span>
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
                v-model="checkedInputs"
              />
              <span class="checkmark"></span>
            </label>
            <label for="access">Bezbarierový prístup</label>
          </div>
        </div>
      </div>
    </div>
    <div v-if="visibleFilterButton" class="filter-book-wrapper">
      <button class="filter-book">Aplikuj filter</button>
      <img
        class="close-icon"
        src="@/assets/icons/close-icon.svg"
        alt="close icon"
        @click="checkedInputs.length = 0"
      />
    </div>
  </div>
</template>

<script>
import DropDown from "../DropDown.vue";
export default {
  components: { DropDown },
  data() {
    return {
      checkedInputs: [],
      dropDownContent: [{ content: "10km"},{content: "20km"}, {content:"50km"}],
      visibleFilterButton: false,
      showDropDown: false,
    };
  },
  watch: {
    checkedInputs() {
      this.visibleFilterButton = this.checkedInputs.length == 0 ? false : true;
    },
  },
  methods: {
    dropDown() {
      this.showDropDown = !this.showDropDown;
    },
  },
};
</script>

