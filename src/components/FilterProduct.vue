<template>
  <div class="filter-product">
    <h2 class="filter-product__heading">Filtrovanie</h2>

    <div class="search-location">
      <label for="place" class="filter-product__label">Miesto hľadania</label>
      <div class="flex-container">
        <img
          class="search-icon"
          src="../assets/icons/bx-search-alt-2.svg"
          alt="search icon"
        />
        <input type="text" name="place" placeholder="Zadajte miesto..." />
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
            <input type="checkbox" name="academic" />
            <label for="academic">Akademická</label>
          </div>
          <div class="filter-split__type flex-container">
            <input type="checkbox" name="corporate" />
            <label for="corporate">Firemná</label>
          </div>
          <div class="filter-split__type flex-container">
            <input type="checkbox" name="regional" />
            <label for="regional">Krajská</label>
          </div>
        </div>
        <div class="right">
          <div class="filter-split__type flex-container">
            <input type="checkbox" name="communal" />
            <label for="communal">Obecná</label>
          </div>
          <div class="filter-split__type flex-container">
            <input type="checkbox" name="regional" />
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
            <input type="checkbox" name="wifi" />
            <label for="wifi">Wi-fi pripojenie</label>
          </div>
          <div class="filter-split__type flex-container">
            <input type="checkbox" name="printer" />
            <label for="printer">Možnosť tlače</label>
          </div>         
        </div>
        <div class="right">
          <div class="filter-split__type flex-container">
            <input type="checkbox" name="cafe" />
            <label for="cafe">Kaviareň</label>
          </div>
          <div class="filter-split__type flex-container">
            <input type="checkbox" name="access" />
            <label for="access">Bezbarierový prístup</label>
          </div>
        </div>
      </div>
    </div>
    <div class="filter-book-wrapper">
      <button class="filter-book">Aplikuj filter</button>
      <img class="close-icon" src="../assets/icons/close-icon.svg" alt="close icon" @click="$emit('closeSelectedBook')">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>
