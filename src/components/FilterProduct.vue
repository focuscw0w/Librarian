<template>
  <div v-if="activeFilterProduct" class="filter-product">
    <h2 class="filter-product__heading">Filtrovanie</h2>

    <div class="search-location">
      <label for="place" class="filter-product__label">Miesto hľadania</label>
      <div class="flex-container">
        <img
          class="search-icon"
          src="../assets/icons/bx-search-alt-2.svg"
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
              src="../assets/icons/marker-icon.svg"
              alt="marker icon"
              class="marker-icon"
            />
            +10km
            <img
              src="../assets/icons/bx-down-arrow-alt.svg"
              alt="arrow icon"
              class="radius-dropdown"
            />
          </div>
        </span>
      </div>
    </div>

    <div class="library-types filter-split">
      <label for="type" class="filter-product__label">Typ knižnice</label>
      <div class="flex-container">
        <div class="left">
          <div class="filter-split__type flex-container">
            <input
              value="academic"
              type="checkbox"
              name="academic"
              v-model="checkedInputs"
            />
            <label for="academic">Akademická</label>
          </div>
          <div class="filter-split__type flex-container">
            <input
              value="corporate"
              type="checkbox"
              name="corporate"
              v-model="checkedInputs"
            />
            <label for="corporate">Firemná</label>
          </div>
          <div class="filter-split__type flex-container">
            <input
              value="country"
              type="checkbox"
              name="regional"
              v-model="checkedInputs"
            />
            <label for="regional">Krajská</label>
          </div>
        </div>
        <div class="right">
          <div class="filter-split__type flex-container">
            <input
              value="communal"
              type="checkbox"
              name="communal"
              v-model="checkedInputs"
            />
            <label for="communal">Obecná</label>
          </div>
          <div class="filter-split__type flex-container">
            <input
              value="regional"
              type="checkbox"
              name="regional"
              v-model="checkedInputs"
            />
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
            <input value="wifi" type="checkbox" name="wifi" v-model="checkedInputs"/>
            <label for="wifi">Wi-fi pripojenie</label>
          </div>
          <div class="filter-split__type flex-container">
            <input value="printer" type="checkbox" name="printer" v-model="checkedInputs"/>
            <label for="printer">Možnosť tlače</label>
          </div>
        </div>
        <div class="right">
          <div class="filter-split__type flex-container">
            <input value="cafe" type="checkbox" name="cafe" v-model="checkedInputs"/>
            <label for="cafe">Kaviareň</label>
          </div>
          <div class="filter-split__type flex-container">
            <input value="access" type="checkbox" name="access" v-model="checkedInputs"/>
            <label for="access">Bezbarierový prístup</label>
          </div>
        </div>
      </div>
    </div>
    <div v-if="visibleFilterButton" class="filter-book-wrapper">
      <button class="filter-book">Aplikuj filter</button>
      <img
        class="close-icon"
        src="../assets/icons/close-icon.svg"
        alt="close icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['activeFilterProduct', 'hideFilterProduct'],
  data() {
    return {
      checkedInputs: [],
      visibleFilterButton: false,
    };
  },
  watch: {
    checkedInputs() {
      this.visibleFilterButton = this.checkedInputs.length == 0 ? false : true
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>
