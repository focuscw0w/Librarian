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
            <label class="label">
              <input
                value="academic"
                type="checkbox"
                name="academic"
                v-model="checkedInputs"
              />
              <span class="checkmark"></span>
            </label>
            <label for="academic">Akademická</label>
          </div>
          <div class="filter-split__type flex-container">
            <label class="label">
              <input
                value="corporate"
                type="checkbox"
                name="corporate"
                v-model="checkedInputs"
              />
              <span class="checkmark"></span>
            </label>
            <label for="corporate">Firemná</label>
          </div>
          <div class="filter-split__type flex-container">
            <label class="label">
              <input
                value="country"
                type="checkbox"
                name="regional"
                v-model="checkedInputs"
              />
              <span class="checkmark"></span>
            </label>
            <label for="regional">Krajská</label>
          </div>
        </div>
        <div class="right">
          <div class="filter-split__type flex-container">
            <label class="label">
              <input
                value="communal"
                type="checkbox"
                name="communal"
                v-model="checkedInputs"
              />
              <span class="checkmark"></span>
            </label>
            <label for="communal">Obecná</label>
          </div>
          <div class="filter-split__type flex-container">
            <label class="label">
              <input
                value="regional"
                type="checkbox"
                name="regional"
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
                value="wifi"
                type="checkbox"
                name="wifi"
                v-model="checkedInputs"
              />
              <span class="checkmark"></span>
            </label>
            <label for="wifi">Wi-fi pripojenie</label>
          </div>
          <div class="filter-split__type flex-container">
            <label class="label">
              <input
                value="printer"
                type="checkbox"
                name="printer"
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
                value="cafe"
                type="checkbox"
                name="cafe"
                v-model="checkedInputs"
              />
              <span class="checkmark"></span>
            </label>
            <label for="cafe">Kaviareň</label>
          </div>
          <div class="filter-split__type flex-container">
            <label class="label">
              <input
                value="access"
                type="checkbox"
                name="access"
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
export default {
  data() {
    return {
      checkedInputs: [],
      visibleFilterButton: false,
    };
  },
  watch: {
    checkedInputs() {
      this.visibleFilterButton = this.checkedInputs.length == 0 ? false : true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
</style>
